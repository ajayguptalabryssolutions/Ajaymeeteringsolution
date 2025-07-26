const Meter = require('../model/Meter');
const User = require('../model/User');
const Payment = require("../model/Payment");
const DailyMeterData = require("../model/DailyMeterSummary");
const mongoose = require('mongoose'); // ensure this is imported

const { meterValidator } = require('../validator/meterValidator');
const generateDevEUI = require('../helper/generateDevEUI');

const addMeter = async (req, res) => {
    try {
        // Validate the incoming data
        const { type, name, meterSerialNumber, slaveId, status, adminId } = req.body;
        console.log("Received data for new meter:", type, name, meterSerialNumber, slaveId, status, adminId);

        if (!name || !meterSerialNumber || !slaveId || !adminId) {
            return res.status(400).json({ error: "All fields are required." });
        }

        const devEUI = generateDevEUI(meterSerialNumber, slaveId);
        const meterId = `M-${devEUI}`;
        const validatedMeterData = meterValidator.parse({
            devEUI,
            ...req.body,
        });

        // Check if the meter already exists
        const existingMeter = await Meter.findOne(
            {
                meterSerialNumber: validatedMeterData.meterSerialNumber,
                slaveId: validatedMeterData.slaveId
            }
        );
        if (existingMeter) {
            return res.status(400).json({ error: "Meter with this serial number already exists." });
        }

        //check if the userId exists or not
        const adminExists = await User.findById(validatedMeterData.adminId);
        if (!adminExists) {
            return res.status(404).json({ error: "User not found." });
        }

        // Create a new meter instance
        const newMeter = new Meter({
            meterId: meterId,
            devEUI: validatedMeterData.devEUI,
            name: validatedMeterData.name,
            type: validatedMeterData.type,
            meterSerialNumber: validatedMeterData.meterSerialNumber,
            slaveId: validatedMeterData.slaveId,
            status: validatedMeterData.status || "offline",
            lastSeen: validatedMeterData.lastSeen || new Date(),
            adminId: validatedMeterData.adminId,
        });

        // Save the new meter to the database
        await newMeter.save();

        return res.status(201).json({ message: "New meter added successfully", data: newMeter });
    } catch (error) {
        console.error("Error adding meter:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}
const assignMeter = async (req, res) => {
  try {
    const { userId, meterId } = req.body;

    // Check if the meter exists
    const meter = await Meter.findOne({ meterId });

    if (!meter) {
      return res.status(404).json({ message: "Meter not found" });
    }

    // Check if it's already assigned
    if (meter.isAssigned === true) {
      return res.status(400).json({ message: "Meter is already assigned" });
    }

    meter.userId = userId;
    meter.isAssigned = true;

    await meter.save();

    return res.status(201).json({ message: "Meter assigned successfully" });
  } catch (err) {
    console.error(" Error assigning meter:", err);
    return res.status(500).json({ message: "Server error" });
  }
};

const updateMeter = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, type, meterSerialNumber, slaveId, status, adminId } = req.body;

        // Validate the incoming data
        if (!name || !meterSerialNumber || !slaveId || !adminId) {
            return res.status(400).json({ error: "All fields are required." });
        }

        // Check if the meter exists
        const meter = await Meter.findById(id);
        if (!meter) {
            return res.status(404).json({ error: "Meter not found." });
        }

        // Update the meter details
        meter.name = name;
        meter.type = type;
        meter.meterSerialNumber = meterSerialNumber;
        meter.slaveId = slaveId;
        meter.status = status;
        meter.adminId = adminId;

        // Save the updated meter
        await meter.save();

        return res.status(200).json({ message: "Meter updated successfully", data: meter });
    } catch (error) {
        console.error("Error updating meter:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}
const deleteMeter = async (req, res) => {
    try {
        const { id } = req.params;

        // Check if the meter exists
        const meter = await Meter.findById(id);
        if (!meter) {
            return res.status(404).json({ error: "Meter not found." });
        }

        // Delete the meter
        await Meter.findByIdAndDelete(id);

        return res.status(200).json({ message: "Meter deleted successfully" });
    } catch (error) {
        console.error("Error deleting meter:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}
const getAllMeters = async (req, res) => {
    try {
        // Fetch all meters from the database
        const meters = await Meter.find().populate('assingnedUserId', 'name email');

        if (meters.length === 0) {
            return res.status(404).json({ message: "No meters found." });
        }

        return res.status(200).json({ data: meters });

    } catch(error){
        console.error("Error deleting meter:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}

const getMeterById = async (req, res) => {
    try {
        const { id } = req.params;

        // Check if the meter exists
        const meter = await Meter.findById(id).populate('assingnedUserId', 'name email');
        if (!meter) {
            return res.status(404).json({ error: "Meter not found." });
        }

        return res.status(200).json({ data: meter });
    } catch (error) {
        console.error("Error fetching meter by ID:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};




const getMetersByAdminId = async (req, res) => {
  const { adminId } = req.params;
  console.log("----",req.params)

  if (!adminId) {
    return res.status(400).json({ error: "adminId is required in params." });
  }

  // Optional: Uncomment only if adminId is stored as ObjectId
  if (!mongoose.Types.ObjectId.isValid(adminId)) {
    return res.status(400).json({ error: "Invalid adminId format." });
  }

  try {
    const meters = await Meter.find({ adminId }).populate('assingnedUserId',"_id name email");

    if (meters.length === 0) {
      return res.status(404).json({ message: "No meters found for this admin." });
    }

    return res.status(200).json({ data: meters });
  } catch (error) {
    console.error("Error fetching meters:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};


// const getAllMeterWithSummaryData = async (req, res) => {
//   try {
//     // Step 1: Get all meters, populate user name from assingnedUserId
//     const meters = await Meter.find()
//       .populate("assingnedUserId", "name")
//       .sort({ createdAt: -1 });

//       console.log("meters data is : ------------ ", meters)
//     // Step 2: For each meter, get latest payment and format result
//     const result = await Promise.all(
//       meters.map(async (meter) => {
//         const latestPayment = await Payment.findOne({ meterId: meter._id })
//           .sort({ createdAt: -1 });

//         return {
//           meterId: meter.meterId,
//           meterName: meter.name,
//           userName: meter.assingnedUserId?.name || "Unassigned",
//           balance: latestPayment?.amount ?? 0,
//           lastRecharge: latestPayment?.createdAt ?? null,
//           status: meter.status,
//         };
//       })
//     );

//     res.status(200).json({ success: true, data: result });
//   } catch (error) {
//     console.error("Error fetching meter summary:", error);
//     res.status(500).json({ success: false, message: "Server Error" });
//   }
// };



const getAllMeterWithSummaryData = async (req, res) => {
  try {
    const meters = await Meter.find()
      .populate("assingnedUserId", "name email") // only name & email from user
      .lean(); // convert to plain objects

    const meterIds = meters.map(m => m._id);

    // Get latest decoded data for each meter
    const latestData = await MeterDecodedData.aggregate([
      { $match: { meterId: { $in: meterIds } } },
      { $sort: { timestamp: -1 } },
      {
        $group: {
          _id: "$meterId",
          balance: { $first: "$balance_amount.value" },
          timestamp: { $first: "$timestamp" }
        }
      }
    ]);

    const balanceMap = {};
    latestData.forEach(data => {
      balanceMap[data._id.toString()] = data.balance;
    });

    const result = meters.map(meter => {
      const meterIdStr = meter._id.toString();
      return {
        _id: meter._id,
        meterId: meter.meterId,
        name: meter.name,
        type: meter.type,
        status: meter.status,
        assignedUser: meter.assingnedUserId || null,
        balance: balanceMap[meterIdStr] || 0
      };
    });

    res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.error("Error fetching all meters with summary:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};



// const getMeterByMeterId = async (req, res) => {
//   try {
//     const { meterId } = req.params;

//     // ✅ Correctly find meter by meterId string (not _id)
//     const meter = await Meter.findOne({ meterId });

//     if (!meter) {
//       return res.status(404).json({ message: "Meter not found" });
//     }

//     // ✅ Use meter._id (ObjectId) to fetch daily data
//     const dailyData = await DailyMeterData.find({ meterId: meter._id });

//     res.json(dailyData);
//   } catch (error) {
//     console.error("Error fetching meter data by meterId:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

// Get meter summary data using meterId string (e.g., "M-03000000000F3DDD")
const getMeterByMeterId =  async (req, res) => {
  try {
    const { meterId } = req.params;

    // Step 1: Find the meter with this meterId string
    const meter = await Meter.findOne({ meterId });

    if (!meter) {
      return res.status(404).json({ message: "Meter not found" });
    }

    // Step 2: Find all summaries that reference this meter's _id
    const summaries = await DailyMeterData.find({ meterId: meter._id }).sort({ date: -1 });

    res.status(200).json(summaries);
  } catch (error) {
    console.error("Error fetching meter summary data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}


module.exports = {getAllMeters,getMeterById,updateMeter,addMeter,assignMeter,deleteMeter, getMetersByAdminId, getMeterByMeterId,getAllMeterWithSummaryData }