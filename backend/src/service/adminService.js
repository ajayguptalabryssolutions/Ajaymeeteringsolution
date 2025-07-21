/////////////////////////////////////////////////////////////

// service/dashboardService.js
const mongoose = require("mongoose");
const User = require("../model/User");
const Meter = require("../model/Meter");
const MeterDecodedData = require("../model/MeterData");
const AdminDashboard = require("../model/AdminDashboard");
const AdminConsumption = require("../model/AdminConsumption");
// const DailyMeterData = require("../model/DailyMeterData");
const Payment = require("../model/Payment");

////////////////////////////////////////////////////////

//////////////////////////////////////// neeche wala correct hai
// const addAdminDashboardStats = async () => {
//   const adminIds = await Meter.distinct("adminId");
  // const meterIds = await Meter.find({ adminId: { $in: adminIds } }).distinct("_id");
  // console.log("meterIds for mongo db: =============", meterIds);

  //   const meterDecodedData = await MeterDecodedData.find({ meterId: { $in: meterIds } });
  // console.log("Meter Decoded Data: =============", meterDecodedData);
  // const meterId = await Meter.find({ adminId: { $in: adminIds } }).distinct("meterId");
  // console.log("meterId for Manually createed: =============", meterId);
  // console.log("Admin IDs: =============", adminIds);

// const meters = await Meter.find({ adminIds });
// console.log("Meter count for adminId:", meters.length);
// console.log("Meter IDs:", meters.map(m => m._id));

//   const results = [];

//   for (const adminId of adminIds) {
//     const totalUsers = await User.countDocuments({ adminId, role: "user" });

//     const assignedUsers = await Meter.distinct("assingnedUserId", {
//       adminId,
//       isAssigned: true,
//     });
//     const totalAssignedUsers = assignedUsers.filter(Boolean).length;

//     const totalMeters = await Meter.countDocuments({ adminId });
//     const totalActiveMeters = await Meter.countDocuments({
//       adminId,
//       status: "online",
//     });
//     const totalFaultyMeters = await Meter.countDocuments({
//       adminId,
//       status: "faulty",
//     });

//     ////////////////////////////////

//     ////////////////////////////
//     // Revenue It is based on the payment model we can edit it after.

//     const revenueAgg = await MeterDecodedData.aggregate([
//       {
//         $lookup: {
//           from: "meters",
//           localField: "meterId",
//           foreignField: "_id",
//           as: "meter",
//         },
//       },
//       { $unwind: "$meter" },
//       { $match: { "meter.adminId": adminId } },
//       {
//         $group: {
//           _id: null,
//           totalRevenue: { $sum: "$balance_amount.value" },
//         },
//       },
//     ]);
//     const totalRevenue = revenueAgg[0]?.totalRevenue || 0;

//     console.log("Total Revenue:", totalRevenue);

//     // Consumption (EB + DG kWh)
//     const consumptionAgg = await MeterDecodedData.aggregate([
//       {
//         $lookup: {
//           from: "meters",
//           localField: "meterId",
//           foreignField: "_id",
//           as: "meter",
//         },
//       },
//       { $unwind: "$meter" },
//       { $match: { "meter.adminId": adminId } },
//       {
//         $group: {
//           _id: null,
//           totalConsumption: {
//             $sum: {
//               $add: [
//                 { $ifNull: ["$cum_eb_kwh.value", 0] },
//                 { $ifNull: ["$cum_dg_kwh.value", 0] },
//               ],
//             },
//           },
//         },
//       },
//     ]);
//     const totalConsumption = consumptionAgg[0]?.totalConsumption || 0;

//     console.log("Total Consumption:", totalConsumption);

//     // Power factor
//     const powerFactorAgg = await MeterDecodedData.aggregate([
//       {
//         $lookup: {
//           from: "meters",
//           localField: "meterId",
//           foreignField: "_id",
//           as: "meter",
//         },
//       },
//       { $unwind: "$meter" },
//       { $match: { "meter.adminId": adminId } },
//       {
//         $group: {
//           _id: null,
//           avgPowerFactor: { $avg: "$power_factor.value" },
//         },
//       },
//     ]);
//     const averagePowerFactor = powerFactorAgg[0]?.avgPowerFactor || 0;

//     console.log("Average Power Factor:", averagePowerFactor);

//     const updated = await AdminDashboard.findOneAndUpdate(
//       { adminId },
//       {
//         $set: {
//           totalUsers,
//           totalAssignedUsers,
//           totalMeters,
//           totalActiveMeters,
//           totalFaultyMeters,
//           totalRevenue: Number(totalRevenue.toFixed(2)),
//           totalConsumption: Number(totalConsumption.toFixed(2)),
//           averagePowerFactor: Number(averagePowerFactor.toFixed(2)),
//           updatedAt: new Date(),
//         },
//       },
//       { upsert: true, new: true }
//     );

//     console.log(`Updated stats for adminId: ${adminId}`, updated);
//     results.push(updated);
//   }

//   return results;
// };

// console.log(
//   "Admin dashboard stats updated successfully.",
//   addAdminDashboardStats
// );

////////////////////////////  uper wala correct hai



// Function to get admin dashboard stats
// This function retrieves the dashboard stats for a specific admin
// It aggregates data from various collections and returns the stats
// correct
const addAdminDashboardStat = async () => {
  const adminIds = await Meter.distinct("adminId");

  //   const meterIds = await Meter.find({ adminId: { $in: adminIds } }).distinct("_id");
  // console.log("meterIds for mongo db: =============", meterIds);

  //   const meterDecodedData = await MeterDecodedData.find({ meterId: { $in: meterIds } });
  // console.log("Meter Decoded Data: =============", meterDecodedData);
  // const meterId = await Meter.find({ adminId: { $in: adminIds } }).distinct("meterId");
  // console.log("meterId for Manually createed: =============", meterId);
  // console.log("Admin IDs: =============", adminIds);
  const results = [];

  for (const adminId of adminIds) {
    const totalUsers = await User.countDocuments({ adminId, role: "user" });

    const assignedUsers = await Meter.distinct("assingnedUserId", {
      adminId,
      isAssigned: true,
    });
    const totalAssignedUsers = assignedUsers.filter(Boolean).length;

    const totalMeters = await Meter.countDocuments({ adminId });
    const totalActiveMeters = await Meter.countDocuments({
      adminId,
      status: "online",
    });
    const totalFaultyMeters = await Meter.countDocuments({
      adminId,
      status: "faulty",
    });

    // Get meters for this admin
    const meters = await Meter.find({ adminId });

    let totalConsumption = 0;

    for (const meter of meters) {
      // Get only the latest decoded data entry for this meter
      const latest = await MeterDecodedData.findOne({
        meterId: meter._id,
      }).sort({ timestamp: -1 });

      if (latest) {
        const eb = latest.cum_eb_kwh?.value || 0;
        const dg = latest.cum_dg_kwh?.value || 0;
        const combined = eb + dg;

        totalConsumption += combined;

        console.log(
          `✅ ${meter.meterId} | EB: ${eb} + DG: ${dg} = ${combined} kWh`
        );
      } else {
        console.log(`⚠️ Meter ${meter.meterId} has no readings`);
      }
    }

    console.log(
      `🔢 Total Admin Consumption: ${totalConsumption.toFixed(2)} kWh`
    );

    // // Step 1: Calculate total revenue (excluding negative payments)
    // const revenue = await Payment.aggregate([
    //   {
    //     $match: {
    //       adminId: new mongoose.Types.ObjectId(adminId),
    //       status: "success",
    //       amount: { $gte: 0 }, // ✅ Exclude negative payments
    //     },
    //   },
    //   {
    //     $group: {
    //       _id: null,
    //       totalRevenue: { $sum: "$amount" },
    //     },
    //   },
    // ]);

    // const totalRevenue = revenue[0]?.totalRevenue || 0;

    // // STEP 2: Calculate total negative revenue
    // const negativeRevenueAgg = await Payment.aggregate([
    //   {
    //     $match: {
    //       adminId: new mongoose.Types.ObjectId(adminId),
    //       status: "success",
    //       amount: { $lt: 0 },
    //     },
    //   },
    //   {
    //     $group: {
    //       _id: null,
    //       negativeRevenue: { $sum: "$amount" }, // This will be negative like -80
    //     },
    //   },
    // ]);
    // const negativeRevenue = negativeRevenueAgg[0]?.negativeRevenue || 0;

    // Step 1: Calculate total revenue (excluding negative payments)
const revenue = await Payment.aggregate([
  {
    $match: {
      status: "success",
      amount: { $gte: 0 }, // ✅ Exclude negative
    },
  },
  {
    $lookup: {
      from: "meters", // your meters collection name in MongoDB
      localField: "meterId",
      foreignField: "_id",
      as: "meter",
    },
  },
  { $unwind: "$meter" },
  {
    $match: {
      "meter.adminId": new mongoose.Types.ObjectId(adminId),
    },
  },
  {
    $group: {
      _id: null,
      totalRevenue: { $sum: "$amount" },
    },
  },
]);

const totalRevenue = revenue[0]?.totalRevenue || 0;

// STEP 2: Calculate total negative revenue
const negativeRevenueAgg = await Payment.aggregate([
  {
    $match: {
      status: "success",
      amount: { $lt: 0 }, // Only negatives
    },
  },
  {
    $lookup: {
      from: "meters",
      localField: "meterId",
      foreignField: "_id",
      as: "meter",
    },
  },
  { $unwind: "$meter" },
  {
    $match: {
      "meter.adminId": new mongoose.Types.ObjectId(adminId),
    },
  },
  {
    $group: {
      _id: null,
      negativeRevenue: { $sum: "$amount" },
    },
  },
]);

const negativeRevenue = negativeRevenueAgg[0]?.negativeRevenue || 0;

    console.log(" Total Revenue (excluding negatives):", totalRevenue);
    console.log(" Negative Payments (excluded):", negativeRevenue);

    let totalPowerFactor = 0;
    let meterCount = 0;

    for (const meter of meters) {
      const latest = await MeterDecodedData.findOne({
        meterId: meter._id,
      }).sort({ timestamp: -1 });

      if (latest) {
        totalPowerFactor += latest.power_factor.value;
        meterCount += 1;

        console.log(
          `✅ Meter ${meter.meterId} → Latest Power Factor: ${latest.power_factor.value} ->> Total Power Factor: ${totalPowerFactor.toFixed(2)} -> tiemstamp: ${latest.timestamp.toLocaleDateString()} -> ${latest.timestamp.toLocaleTimeString()}`
        );
      } else {
        console.log(`⚠️ Meter ${meter.meterId} has no valid power factor`);
      }
    }

    const newEntry = await AdminDashboard.create({
      adminId,
      totalUsers,
      totalAssignedUsers,
      totalMeters,
      totalActiveMeters,
      totalFaultyMeters,
      totalRevenue: Number(totalRevenue.toFixed(2)),
      negativeRevenue: Number(negativeRevenue.toFixed(2)),
      totalConsumption: Number(totalConsumption.toFixed(2)),
      totalPowerFactor: Number(totalPowerFactor.toFixed(2)),
      createdAt: new Date(),
    });
    console.log(` Created new dashboard entry for admin ${adminId}:`, newEntry);
    results.push(newEntry);
  }

  return results;
};


//generateAndSaveAdminConsumption is a function that generates and saves admin consumption data
// It aggregates meter data, calculates daily consumption, and saves it to the AdminConsumption model
// It ensures that only new entries are saved, avoiding duplicates based on date
// It returns a response object with success status and data of newly inserted entries
//correct
const generateAndSaveAdminConsumption = async () => {
  const adminIds = await Meter.distinct("adminId");
  const responseData = [];

  for (const adminId of adminIds) {
    // ✅ 1. Get all previously saved dates for this admin
    const existingDates = await AdminConsumption.find({ adminId }).distinct("date");

    const existingDateStrings = new Set(
      existingDates.map((d) => new Date(d).toISOString().substring(0, 10))
    );

    // ✅ 2. Aggregate meter-wise latest reading per day (EB + DG)
    const result = await MeterDecodedData.aggregate([
      {
        $lookup: {
          from: "meters",
          localField: "meterId",
          foreignField: "_id",
          as: "meter",
        },
      },
      { $unwind: "$meter" },
      {
        $match: {
          "meter.adminId": new mongoose.Types.ObjectId(adminId),
        },
      },
      {
        $addFields: {
          fullTimestamp: "$timestamp",
          date: {
            $dateToString: { format: "%Y-%m-%d", date: "$timestamp" },
          },
          combined_kwh: {
            $add: [
              { $ifNull: ["$cum_eb_kwh.value", 0] },
              { $ifNull: ["$cum_dg_kwh.value", 0] },
            ],
          },
        },
      },
      { $sort: { timestamp: 1 } },
      {
        $group: {
          _id: {
            meterId: "$meterId",
            date: "$date",
          },
          latestCombinedKwh: { $last: "$combined_kwh" },
          latestTimestamp: { $last: "$fullTimestamp" },
        },
      },
      {
        $group: {
          _id: "$_id.date",
          totalAdminConsumption: { $sum: "$latestCombinedKwh" },
          latestReadingTime: { $max: "$latestTimestamp" },
        },
      },
      {
        $project: {
          date: "$_id",
          totalAdminConsumption: {
            $round: ["$totalAdminConsumption", 2],
          },
          latestReadingTime: 1,
          _id: 0,
        },
      },
      { $sort: { date: 1 } },
    ]);

    // ✅ 3. Filter out dates already saved
    const newEntries = result.filter((day) => {
      return !existingDateStrings.has(day.date);
    });

    // ✅ 4. Save only truly new entries
    for (const entry of newEntries) {
      await AdminConsumption.create({
        adminId,
        date: new Date(entry.date), // Store actual date
        totalAdminConsumption: entry.totalAdminConsumption,
      });
    }

    responseData.push({
      adminId,
      inserted: newEntries.map((e) => ({
        date: e.date,
        totalAdminConsumption: e.totalAdminConsumption,
      })),
    });
  }

  return { success: true, data: responseData };
};



// const generateAndSaveAdminConsumption = async () => {
//   const adminIds = await Meter.distinct("adminId");
//   const responseData = [];

//   for (const adminId of adminIds) {
//     // Step 1: Get last saved date+time (not just date)
//     const latestSavedEntry = await AdminConsumption.findOne({ adminId })
//       .sort({ date: -1 })
//       .lean();

//     const latestSavedDateTime = latestSavedEntry?.date
//       ? new Date(latestSavedEntry.date)
//       : null;

//     // Step 2: Aggregate latest EB+DG per meter per date
//     const result = await MeterDecodedData.aggregate([
//       {
//         $lookup: {
//           from: "meters",
//           localField: "meterId",
//           foreignField: "_id",
//           as: "meter",
//         },
//       },
//       { $unwind: "$meter" },
//       {
//         $match: {
//           "meter.adminId": new mongoose.Types.ObjectId(adminId),
//         },
//       },
//       {
//         $addFields: {
//           dateObj: "$timestamp", // exact datetime
//           date: {
//             $dateToString: {
//               format: "%Y-%m-%d",
//               date: "$timestamp",
//             },
//           },
//           combined_kwh: {
//             $add: [
//               { $ifNull: ["$cum_eb_kwh.value", 0] },
//               { $ifNull: ["$cum_dg_kwh.value", 0] },
//             ],
//           },
//         },
//       },
//       { $sort: { timestamp: 1 } },
//       {
//         $group: {
//           _id: {
//             meterId: "$meterId",
//             date: "$date",
//           },
//           latestTimestamp: { $last: "$dateObj" }, // full timestamp
//           latestTotal: { $last: "$combined_kwh" },
//         },
//       },
//       {
//         $group: {
//           _id: "$_id.date",
//           totalAdminConsumption: { $sum: "$latestTotal" },
//           latestReadingTime: { $max: "$latestTimestamp" },
//         },
//       },
//       {
//         $project: {
//           date: "$_id",
//           totalAdminConsumption: {
//             $round: ["$totalAdminConsumption", 2],
//           },
//           latestReadingTime: 1,
//           _id: 0,
//         },
//       },
//       { $sort: { date: 1 } },
//     ]);

//     // Step 3: Filter out already-processed dates & times
//     const newDays = result.filter((day) => {
//       const readingDate = new Date(day.latestReadingTime);
//       return !latestSavedDateTime || readingDate > latestSavedDateTime;
//     });

//     // Step 4: Save only new ones
//     for (const day of newDays) {
//       await AdminConsumption.create({
//         adminId,
//         date: day.latestReadingTime,
//         totalAdminConsumption: day.totalAdminConsumption,
//       });
//     }

//     responseData.push({
//       adminId,
//       newlyAdded: newDays,
//     });
//   }

//   return { data: responseData };
// };

// const generateAndSaveAdminConsumption = async () => {
//   const adminIds = await Meter.distinct("adminId");

//   const responseData = [];

//   for (const adminId of adminIds) {
//     const result = await MeterDecodedData.aggregate([
//       // Join meter data
//       {
//         $lookup: {
//           from: "meters",
//           localField: "meterId",
//           foreignField: "_id",
//           as: "meter",
//         },
//       },
//       { $unwind: "$meter" },

//       // Filter by admin
//       {
//         $match: {
//           "meter.adminId": new mongoose.Types.ObjectId(adminId),
//         },
//       },

//       // Add date and combined_kwh (EB + DG)
//       {
//         $addFields: {
//           date: {
//             $dateToString: {
//               format: "%Y-%m-%d",
//               date: "$timestamp",
//             },
//           },
//           combined_kwh: {
//             $add: [
//               { $ifNull: ["$cum_eb_kwh.value", 0] },
//               { $ifNull: ["$cum_dg_kwh.value", 0] },
//             ],
//           },
//         },
//       },

//       // Sort by timestamp (so $last gets latest of the day)
//       { $sort: { timestamp: 1 } },

//       // Get latest (combined_kwh) per meter per day
//       {
//         $group: {
//           _id: {
//             meterId: "$meterId",
//             date: "$date",
//           },
//           latestTotal: { $last: "$combined_kwh" },
//         },
//       },

//       // Now group by date to sum latest values of all meters
//       {
//         $group: {
//           _id: "$_id.date",
//           totalAdminConsumption: { $sum: "$latestTotal" },
//         },
//       },

//       // Format output
//       {
//         $project: {
//           date: "$_id",
//           totalAdminConsumption: {
//             $round: ["$totalAdminConsumption", 2],
//           },
//           _id: 0,
//         },
//       },

//       // Sort by date ascending
//       { $sort: { date: 1 } },
//     ]);

//     // Save to DB
//     for (const day of result) {
//       await AdminConsumption.findOneAndUpdate(
//         {
//           adminId,
//           date: day.date,
//         },
//         {
//           $set: {
//             totalAdminConsumption: day.totalAdminConsumption,
//           },
//         },
//         { upsert: true, new: true }
//       );
//     }

//     responseData.push({
//       adminId,
//       dailyConsumption: result,
//     });
//   }

//   return { data: responseData };
// };

// const generateAndSaveAdminConsumption = async () => {
//   const adminIds = await Meter.distinct("adminId");
//   const responseData = [];

//   for (const adminId of adminIds) {
//     // 1. Find latest saved date for this admin
//     const latestSavedEntry = await AdminConsumption.findOne({ adminId })
//       .sort({ date: -1 })
//       .lean();

//     const latestSavedDate = latestSavedEntry?.date
//       ? new Date(latestSavedEntry.date)
//       : null;

//     const result = await MeterDecodedData.aggregate([
//       {
//         $lookup: {
//           from: "meters",
//           localField: "meterId",
//           foreignField: "_id",
//           as: "meter",
//         },
//       },
//       { $unwind: "$meter" },
//       {
//         $match: {
//           "meter.adminId": new mongoose.Types.ObjectId(adminId),
//         },
//       },
//       {
//         $addFields: {
//           date: {
//             $dateToString: {
//               format: "%Y-%m-%d",
//               date: "$timestamp",
//             },
//           },
//           combined_kwh: {
//             $add: [
//               { $ifNull: ["$cum_eb_kwh.value", 0] },
//               { $ifNull: ["$cum_dg_kwh.value", 0] },
//             ],
//           },
//         },
//       },
//       { $sort: { timestamp: 1 } },
//       {
//         $group: {
//           _id: {
//             meterId: "$meterId",
//             date: "$date",
//           },
//           latestTotal: { $last: "$combined_kwh" },
//         },
//       },
//       {
//         $group: {
//           _id: "$_id.date",
//           totalAdminConsumption: { $sum: "$latestTotal" },
//         },
//       },
//       {
//         $project: {
//           date: "$_id",
//           totalAdminConsumption: {
//             $round: ["$totalAdminConsumption", 2],
//           },
//           _id: 0,
//         },
//       },
//       { $sort: { date: 1 } },
//     ]);

//     const newDays = result.filter((day) => {
//       const entryDate = new Date(day.date);
//       return !latestSavedDate || entryDate > latestSavedDate;
//     });

//     for (const day of newDays) {
//       await AdminConsumption.create({
//         adminId,
//         date: day.date,
//         totalAdminConsumption: day.totalAdminConsumption,
//       });
//     }

//     responseData.push({
//       adminId,
//       newlyAdded: newDays,
//     });
//   }

//   return { data: responseData };
// };

// const generateAndSaveAdminConsumption = async () => {
//   const adminIds = await Meter.distinct("adminId");
//   const responseData = [];

//   for (const adminId of adminIds) {
//     // ✅ 1. Get the latest saved entry's full datetime (if exists)
//     const latestSavedEntry = await AdminConsumption.findOne({ adminId })
//       .sort({ date: -1 })
//       .lean();

//     const latestSavedDateTime = latestSavedEntry?.date
//       ? new Date(latestSavedEntry.date)
//       : null;

//     // ✅ 2. Aggregate latest reading (EB+DG) for each meter per day
//     const result = await MeterDecodedData.aggregate([
//       {
//         $lookup: {
//           from: "meters",
//           localField: "meterId",
//           foreignField: "_id",
//           as: "meter",
//         },
//       },
//       { $unwind: "$meter" },
//       {
//         $match: {
//           "meter.adminId": new mongoose.Types.ObjectId(adminId),
//         },
//       },
//       {
//         $addFields: {
//           fullTimestamp: "$timestamp", // full datetime
//           date: {
//             $dateToString: {
//               format: "%Y-%m-%d",
//               date: "$timestamp",
//             },
//           },
//           combined_kwh: {
//             $add: [
//               { $ifNull: ["$cum_eb_kwh.value", 0] },
//               { $ifNull: ["$cum_dg_kwh.value", 0] },
//             ],
//           },
//         },
//       },
//       { $sort: { timestamp: 1 } },
//       {
//         $group: {
//           _id: {
//             meterId: "$meterId",
//             date: "$date",
//           },
//           latestCombinedKwh: { $last: "$combined_kwh" },
//           latestTimestamp: { $last: "$fullTimestamp" }, // capture last timestamp per meter per day
//         },
//       },
//       {
//         $group: {
//           _id: "$_id.date", // date string
//           totalAdminConsumption: { $sum: "$latestCombinedKwh" },
//           latestReadingTime: { $max: "$latestTimestamp" }, // capture max timestamp of all meters that day
//         },
//       },
//       {
//         $project: {
//           date: "$_id",
//           totalAdminConsumption: {
//             $round: ["$totalAdminConsumption", 2],
//           },
//           latestReadingTime: 1,
//           _id: 0,
//         },
//       },
//       { $sort: { latestReadingTime: 1 } },
//     ]);

//     // ✅ 3. Filter only dates newer than last saved full datetime
//     const newEntries = result.filter((day) => {
//       const readingTimestamp = new Date(day.latestReadingTime);
//       return !latestSavedDateTime || readingTimestamp > latestSavedDateTime;
//     });

//     // ✅ 4. Save only new entries (no update)
//     for (const entry of newEntries) {
//       await AdminConsumption.create({
//         adminId,
//         date: entry.latestReadingTime,
//         totalAdminConsumption: entry.totalAdminConsumption,
//       });
//     }

//     responseData.push({
//       adminId,
//       inserted: newEntries,
//     });
//   }

//   return { success: true, data: responseData };
// };

const getAllAdminsUserMeterData = async (adminId) => {
  const results = [];

  // Step 1: Get all users under this admin
  const users = await User.find({ adminId, role: "user" });

  const userDetails = [];

  for (const user of users) {
    // Step 2: Get all meters assigned to the user
    const assignedMeters = await Meter.find({ assingnedUserId: user._id });

    const meterDetails = [];

    for (const meter of assignedMeters) {
      // Step 3: Get daily data for each meter
      const dailyData = await DailyMeterData.find({
        meterId: meter._id.toString(),
      }).sort({ date: -1 });

      meterDetails.push({
        meterId: meter._id,
        meterName: meter.name,
        meterType: meter.type,
        dailyData,
      });
    }

    userDetails.push({
      userId: user._id,
      userName: user.name,
      meters: meterDetails,
    });
  }

  results.push({
    adminId,
    users: userDetails,
  });

  return results;
};

const getLatestAdminDashboardStat = async (adminId) => {
  const data = await AdminDashboard.findOneAndUpdate({ adminId })
    .sort({ updatedAt: -1 }) // Sort by newest entry
    .lean();

  return data;
};


// Get admin consumption by date range
// This function retrieves admin consumption data for a specific admin within a date range.
// correct
const getAdminConsumptionByDate = async (adminId, from, to) => {
  if (!mongoose.Types.ObjectId.isValid(adminId)) {
    throw new Error("Invalid adminId");
  }

  const query = {
    adminId,
  };

  if (from || to) {
    query.updatedAt = {}; // <-- Use updatedAt instead of date
    if (from) query.updatedAt.$gte = new Date(from);
    if (to) query.updatedAt.$lte = new Date(to);
  }

  const data = await AdminConsumption.find(query)
    .sort({ updatedAt: 1 }) // <-- Sort by updatedAt
    .select("updatedAt totalAdminConsumption -_id"); // <-- Select updatedAt

  return data;
};


module.exports = {
  addAdminDashboardStat,
  generateAndSaveAdminConsumption,
  getAllAdminsUserMeterData,
  getLatestAdminDashboardStat,
  getAdminConsumptionByDate,
};
