/////////////////////////////////////////////////////////////

// service/dashboardService.js
const mongoose = require("mongoose");
const User = require("../model/User");
const Meter = require("../model/Meter");
const MeterDecodedData = require("../model/MeterData");
const AdminDashboard = require("../model/AdminDashboard");
const AdminConsumption = require("../model/AdminConsumption");
const DailyMeterData = require("../model/DailyMeterSummary");
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

    const totalOfflineMeters = await Meter.countDocuments({
      adminId,
      status: "offline",
    });

    // Get meters for this admin
    const meters = await Meter.find({ adminId });

    let totalConsumption = 0;
    let totalEbConsumption = 0;
    let totalDgConsumption = 0;

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
        totalEbConsumption += eb;
        totalDgConsumption += dg;

        console.log(
          ` ${meter.meterId} | EB: ${eb} + DG: ${dg} = ${combined} kWh`
        );
      } else {
        console.log(` Meter ${meter.meterId} has no readings`);
      }
    }

    console.log(
      `🔢 Total Admin Consumption: ${totalConsumption.toFixed(2)} kWh`
    );

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
          `✅ Meter ${meter.meterId} → Latest Power Factor: ${
            latest.power_factor.value
          } ->> Total Power Factor: ${totalPowerFactor.toFixed(
            2
          )} -> tiemstamp: ${latest.timestamp.toLocaleDateString()} -> ${latest.timestamp.toLocaleTimeString()}`
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
      totalOfflineMeters,
      totalEbConsumption: totalEbConsumption.toFixed(2),
      totalDgConsumption: totalDgConsumption.toFixed(2),
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
// const generateAndSaveAdminConsumption = async () => {
//   const adminIds = await Meter.distinct("adminId");
//   const responseData = [];

//   for (const adminId of adminIds) {
//     const existingDates = await AdminConsumption.find({ adminId }).distinct(
//       "date"
//     );
//     const existingDateStrings = new Set(
//       existingDates.map((d) => new Date(d).toISOString().substring(0, 10))
//     );

//     // ✅ Step 1: Calculate Energy Consumption (already exists)
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
//           fullTimestamp: "$timestamp",
//           date: {
//             $dateToString: { format: "%Y-%m-%d", date: "$timestamp" },
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
//           latestTimestamp: { $last: "$fullTimestamp" },
//         },
//       },
//       {
//         $group: {
//           _id: "$_id.date",
//           totalAdminConsumption: { $sum: "$latestCombinedKwh" },
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

//     const newEntries = result.filter((day) => {
//       return !existingDateStrings.has(day.date);
//     });

//     // ✅ Step 2: Get revenue and due balance per month
//     const meters = await Meter.find({ adminId }).distinct("_id");

//     const revenueData = await Payment.aggregate([
//       {
//         $match: {
//           meterId: { $in: meters },
//           status: "success",
//         },
//       },
//       {
//         $addFields: {
//           month: { $dateToString: { format: "%Y-%m", date: "$timestamp" } },
//         },
//       },
//       {
//         $group: {
//           _id: "$month",
//           totalRevenue: { $sum: "$amount" },
//         },
//       },
//     ]);

//     const dueBalanceData = await Meter.aggregate([
//       {
//         $match: { _id: { $in: meters } },
//       },
//       {
//         $addFields: {
//           month: new Date().toISOString().slice(0, 7), // Current month
//         },
//       },
//       {
//         $group: {
//           _id: "$month",
//           totalDueBalance: { $sum: "$dueBalance" }, // Make sure this field exists in Meter
//         },
//       },
//     ]);

//     // Convert to Map for fast lookup
//     const revenueMap = new Map();
//     revenueData.forEach((r) => revenueMap.set(r._id, r.totalRevenue));

//     const dueMap = new Map();
//     dueBalanceData.forEach((d) => dueMap.set(d._id, d.totalDueBalance));

//     for (const entry of newEntries) {
//       const monthKey = entry.date.slice(0, 7); // e.g., "2025-07"

//       const revenue = revenueMap.get(monthKey) || 0;
//       const due = dueMap.get(monthKey) || 0;

//       await AdminConsumption.create({
//         adminId,
//         date: new Date(entry.date),
//         totalAdminConsumption: entry.totalAdminConsumption,
//         totalRevenue: Math.round(revenue),
//         totalDueBalance: Math.round(due),
//       });
//     }

//     responseData.push({
//       adminId,
//       inserted: newEntries.map((e) => ({
//         date: e.date,
//         totalAdminConsumption: e.totalAdminConsumption,
//         totalRevenue: revenueMap.get(e.date.slice(0, 7)) || 0,
//         totalDueBalance: dueMap.get(e.date.slice(0, 7)) || 0,
//       })),
//     });
//   }

//   return { success: true, data: responseData };
// };

// const generateAndSaveAdminConsumption = async () => {
//   const adminIds = await Meter.distinct("adminId");
//   const responseData = [];

//   for (const adminId of adminIds) {
//     // ✅ 1. Get all previously saved dates for this admin
//     const existingDates = await AdminConsumption.find({ adminId }).distinct("date");

//     const existingDateStrings = new Set(
//       existingDates.map((d) => new Date(d).toISOString().substring(0, 10))
//     );

//     // ✅ 2. Aggregate meter-wise latest reading per day (EB + DG)
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
//           fullTimestamp: "$timestamp",
//           date: {
//             $dateToString: { format: "%Y-%m-%d", date: "$timestamp" },
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
//           latestTimestamp: { $last: "$fullTimestamp" },
//         },
//       },
//       {
//         $group: {
//           _id: "$_id.date",
//           totalAdminConsumption: { $sum: "$latestCombinedKwh" },
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

//     // ✅ 3. Filter out dates already saved
//     const newEntries = result.filter((day) => {
//       return !existingDateStrings.has(day.date);
//     });

//     // ✅ 4. Save only truly new entries
//     for (const entry of newEntries) {
//       await AdminConsumption.create({
//         adminId,
//         date: new Date(entry.date), // Store actual date
//         totalAdminConsumption: entry.totalAdminConsumption,
//       });
//     }

//     responseData.push({
//       adminId,
//       inserted: newEntries.map((e) => ({
//         date: e.date,
//         totalAdminConsumption: e.totalAdminConsumption,
//       })),
//     });
//   }

//   return { success: true, data: responseData };
// };

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
    .lean()

  return data;
};
///////////////////////////////////
//getting data for all admins chart
const getAdminConsumptionByDate = async (adminId, from, to) => {
  if (!mongoose.Types.ObjectId.isValid(adminId)) {
    throw new Error("Invalid adminId");
  }

  const query = { adminId: new mongoose.Types.ObjectId(adminId) };

  if (from || to) {
    query.updatedAt = {};
    if (from) query.updatedAt.$gte = new Date(from);
    if (to) query.updatedAt.$lte = new Date(to);
  } else {
    const toDate = new Date();
    const fromDate = new Date();
    fromDate.setDate(toDate.getDate() - 7);

    query.updatedAt = {
      $gte: fromDate,
      $lte: toDate,
    };
  }

  const result = await AdminDashboard.aggregate([
    { $match: query }, // ✅ THIS IS REQUIRED!

    { $sort: { updatedAt: -1 } },

    {
      $group: {
        _id: { $dateToString: { format: "%Y-%m-%d", date: "$updatedAt" } },
        latestUpdatedAt: { $first: "$updatedAt" },
        latestTotalUsers: { $first: "$totalUsers" },
        latestTotalAssignedUsers: { $first: "$totalAssignedUsers" },
        latestTotalMeters: { $first: "$totalMeters" },
        latestTotalActiveMeters: { $first: "$totalActiveMeters" },
        latestTotalFaultyMeters: { $first: "$totalFaultyMeters" },
        latestTotalRevenue: { $first: "$totalRevenue" },
        latestNegativeRevenue: { $first: "$negativeRevenue" },
        latestTotalConsumption: { $first: "$totalConsumption" },
        latestTotalPowerFactor: { $first: "$totalPowerFactor" },
        latestTotalOfflineMeters: { $first: "$totalOfflineMeters" },
        latestTotalEbConsumption: { $first: "$totalEbConsumption" },
        latestTotalDgConsumption: { $first: "$totalDgConsumption" }
      }
    },

    { $sort: { _id: 1 } },

    {
      $setWindowFields: {
        sortBy: { _id: 1 },
        output: {
          prevTotalUsers: { $shift: { output: "$latestTotalUsers", by: -1 } },
          prevTotalMeters: { $shift: { output: "$latestTotalMeters", by: -1 } },
          prevTotalRevenue: { $shift: { output: "$latestTotalRevenue", by: -1 } },
          prevTotalFaultyMeters: { $shift: { output: "$latestTotalFaultyMeters", by: -1 } },
          prevTotalOfflineMeters: { $shift: { output: "$latestTotalOfflineMeters", by: -1 } },
          prevTotalConsumption: { $shift: { output: "$latestTotalConsumption", by: -1 } },
          prevTotalPowerFactor: { $shift: { output: "$latestTotalPowerFactor", by: -1 } },
          prevTotalEbConsumption: { $shift: { output: "$latestTotalEbConsumption", by: -1 } },
          prevTotalDgConsumption: { $shift: { output: "$latestTotalDgConsumption", by: -1 } }
        }
      }
    },

    {
      $project: {
        _id: 1,
        latestUpdatedAt: 1,

        latestTotalUsers: 1,
        dailyTotalUsers: { $subtract: ["$latestTotalUsers", "$prevTotalUsers"] },

        latestTotalMeters: 1,
        dailyTotalMeters: { $subtract: ["$latestTotalMeters", "$prevTotalMeters"] },

        latestTotalRevenue: 1,
        dailyTotalRevenue: { $round: [{ $subtract: ["$latestTotalRevenue", "$prevTotalRevenue"] }, 2] },

        latestTotalFaultyMeters: 1,
        dailyTotalFaultyMeters: { $subtract: ["$latestTotalFaultyMeters", "$prevTotalFaultyMeters"] },

        latestTotalOfflineMeters: 1,
        dailyTotalOfflineMeters: { $subtract: ["$latestTotalOfflineMeters", "$prevTotalOfflineMeters"] },

        latestTotalConsumption: 1,
        dailyTotalConsumption: { $round: [{ $subtract: ["$latestTotalConsumption", "$prevTotalConsumption"] }, 2] },

        latestTotalPowerFactor: 1,
        dailyTotalPowerFactor: { $round: [{ $subtract: ["$latestTotalPowerFactor", "$prevTotalPowerFactor"] }, 2] },

        latestTotalEbConsumption: 1,
        dailyTotalEbConsumption: { $round: [{ $subtract: ["$latestTotalEbConsumption", "$prevTotalEbConsumption"] }, 2] },

        latestTotalDgConsumption: 1,
        dailyTotalDgConsumption: { $round: [{ $subtract: ["$latestTotalDgConsumption", "$prevTotalDgConsumption"] }, 2] }
      }
    }
  ]);

  return result;
};

// const getAdminConsumptionByDate = async (adminId, from, to) => {
//   if (!mongoose.Types.ObjectId.isValid(adminId)) {
//     throw new Error("Invalid adminId");
//   }

//   const query = {
//     adminId
//   };

//   if (from || to) {
//     query.updatedAt = {};
//     if (from) query.updatedAt.$gte = new Date(from);
//     if (to) query.updatedAt.$lte = new Date(to);
//   } else {
//     // If no from/to given, default to last 7 days
//     const toDate = new Date();
//     const fromDate = new Date();
//     fromDate.setDate(toDate.getDate() - 7);

//     query.updatedAt = {
//       $gte: fromDate,
//       $lte: toDate
//     };
//   }

//   // const data = await AdminDashboard.find(query)
//   //   .sort({ updatedAt: 1 })
//   //   .select("updatedAt totalConsumption -_id");

//   // return data;

//   const result = await AdminDashboard.aggregate([

//     /////////////////////////////////

//     // { $match: query }, // ✅ filter by adminId and date range

//   { $sort: { updatedAt: -1 } },

//   {
//     $group: {
//       _id: { $dateToString: { format: "%Y-%m-%d", date: "$updatedAt" } },
//       latestUpdatedAt: { $first: "$updatedAt" },
//       latestTotalUsers: { $first: "$totalUsers" },
//       latestTotalAssignedUsers: { $first: "$totalAssignedUsers" },
//       latestTotalMeters: { $first: "$totalMeters" },
//       latestTotalActiveMeters: { $first: "$totalActiveMeters" },
//       latestTotalFaultyMeters: { $first: "$totalFaultyMeters" },
//       latestTotalRevenue: { $first: "$totalRevenue" },
//       latestNegativeRevenue: { $first: "$negativeRevenue" },
//       latestTotalConsumption: { $first: "$totalConsumption" },
//       latestTotalPowerFactor: { $first: "$totalPowerFactor" },
//       latestTotalOfflineMeters: { $first: "$totalOfflineMeters" },
//       latestTotalEbConsumption: { $first: "$totalEbConsumption" },
//       latestTotalDgConsumption: { $first: "$totalDgConsumption" }
//     }
//   },

//   { $sort: { _id: 1 } },

//   {
//     $setWindowFields: {
//       sortBy: { _id: 1 },
//       output: {
//         prevTotalUsers: { $shift: { output: "$latestTotalUsers", by: -1 } },
//         prevTotalMeters: { $shift: { output: "$latestTotalMeters", by: -1 } },
//         prevTotalRevenue: { $shift: { output: "$latestTotalRevenue", by: -1 } },
//         prevTotalFaultyMeters: { $shift: { output: "$latestTotalFaultyMeters", by: -1 } },
//         prevTotalOfflineMeters: { $shift: { output: "$latestTotalOfflineMeters", by: -1 } },
//         prevTotalConsumption: { $shift: { output: "$latestTotalConsumption", by: -1 } },
//         prevTotalPowerFactor: { $shift: { output: "$latestTotalPowerFactor", by: -1 } },
//         prevTotalEbConsumption: { $shift: { output: "$latestTotalEbConsumption", by: -1 } },
//         prevTotalDgConsumption: { $shift: { output: "$latestTotalDgConsumption", by: -1 } }
//       }
//     }
//   },

//   {
//     $project: {
//       _id: 1,
//       latestUpdatedAt: 1,

//       latestTotalUsers: 1,
//       dailyTotalUsers: { $subtract: ["$latestTotalUsers", "$prevTotalUsers"] },

//       latestTotalMeters: 1,
//       dailyTotalMeters: { $subtract: ["$latestTotalMeters", "$prevTotalMeters"] },

//       latestTotalRevenue: 1,
//       dailyTotalRevenue: { $round: [{ $subtract: ["$latestTotalRevenue", "$prevTotalRevenue"] }, 2] },

//       latestTotalFaultyMeters: 1,
//       dailyTotalFaultyMeters: { $subtract: ["$latestTotalFaultyMeters", "$prevTotalFaultyMeters"] },

//       latestTotalOfflineMeters: 1,
//       dailyTotalOfflineMeters: { $subtract: ["$latestTotalOfflineMeters", "$prevTotalOfflineMeters"] },

//       latestTotalConsumption: 1,
//       dailyTotalConsumption: { $round: [{ $subtract: ["$latestTotalConsumption", "$prevTotalConsumption"] }, 2] },

//       latestTotalPowerFactor: 1,
//       dailyTotalPowerFactor: { $round: [{ $subtract: ["$latestTotalPowerFactor", "$prevTotalPowerFactor"] }, 2] },

//       latestTotalEbConsumption: 1,
//       dailyTotalEbConsumption: { $round: [{ $subtract: ["$latestTotalEbConsumption", "$prevTotalEbConsumption"] }, 2] },

//       latestTotalDgConsumption: 1,
//       dailyTotalDgConsumption: { $round: [{ $subtract: ["$latestTotalDgConsumption", "$prevTotalDgConsumption"] }, 2] }
//     }
//   }
// ]);
// return result
// };

// const getAdminConsumptionByDate = async (adminId, from, to) => {
//   if (!mongoose.Types.ObjectId.isValid(adminId)) {
//     throw new Error("Invalid adminId");
//   }

//   const toDate = to ? new Date(to) : new Date();
//   const fromDate = from
//     ? new Date(from)
//     : new Date(toDate.getTime() - 30 * 24 * 60 * 60 * 1000); // 30 days default

//   // Common query range
//   const rangeQuery = {
//     adminId,
//     updatedAt: { $gte: fromDate, $lte: toDate },
//   };

//   // 1. Monthly Total Users and Meters
//   const usersMeters = await AdminDashboard.find(rangeQuery)
//     .sort({ updatedAt: 1 })
//     .select("updatedAt totalUsers totalMeters -_id");

//   // 2. Monthly Meter Health (Faulty, Online, Offline)
//   const meterHealth = await AdminDashboard.find(rangeQuery)
//     .sort({ updatedAt: 1 })
//     .select(
//       "updatedAt totalFaultyMeters totalActiveMeters totalOfflineMeters -_id"
//     );

//   // 3. Monthly Due Balance
//   const dueBalance = await AdminConsumption.find(rangeQuery)
//     .sort({ updatedAt: 1 })
//     .select("updatedAt totalDueBalance -_id");

//   // 4. 7-Day Consumption
//   const to7 = new Date();
//   const from7 = new Date();
//   from7.setDate(to7.getDate() - 7);

//   const consumption = await AdminConsumption.find({
//     adminId,
//     updatedAt: { $gte: from7, $lte: to7 },
//   })
//     .sort({ updatedAt: 1 })
//     .select("updatedAt totalAdminConsumption -_id");

//   return {
//     usersMeters,
//     meterHealth,
//     dueBalance,
//     consumption,
//   };
// };

// const getUserDataByAdminId = async (adminId, startDate, endDate) => {
//   if (!mongoose.Types.ObjectId.isValid(adminId)) {
//     throw new Error("Invalid adminId");
//   }

//   const users = await User.find({ adminId, role: "user" })
//     .select("_id name email phoneNumber createdAt updatedAt");
//   const userDataWithMeters = await Promise.all(
//     users.map(async (user) => {
//       const meters = await Meter.find({ assignedUserId: user._id }).select("_id meterName");

//       const meterData = await Promise.all(
//         meters.map(async (meter) => {
//           const query = { meterId: meter._id.toString() };

//           // ✅ If date filter is passed
//           if (startDate || endDate) {
//             query.date = {};
//             if (startDate) query.date.$gte = new Date(startDate);
//             if (endDate) query.date.$lte = new Date(endDate);
//           } else {
//             // Default: Latest 7 days
//             const latest7Days = await DailyMeterData.find({ meterId: meter._id.toString() })
//               .sort({ date: -1 })
//               .limit(7)
//               .select("date");

//             const latestDates = latest7Days.map((entry) => entry.date);
//             query.date = { $in: latestDates };
//           }

//           const dailyData = await DailyMeterData.find(query)
//             .sort({ date: 1 }) // sort ascending for charts/tables
//             .select("totalKWh totalDeduction totalEG totalDG date -_id");

//           return {
//             meterId: meter._id,
//             meterName: meter.meterName,
//             dailyData
//           };
//         })
//       );

//       return {
//         userId: user._id,
//         name: user.name,
//         email: user.email,
//         phoneNumber: user.phoneNumber,
//         createdAt: user.createdAt,
//         updatedAt: user.updatedAt,
//         meters: meterData
//       };
//     })
//   );

//   return userDataWithMeters;
// };

// const getUserDataByAdminId = async (adminId) => {
//   if (!mongoose.Types.ObjectId.isValid(adminId)) {
//     throw new Error("Invalid adminId");
//   }

//   const users = await User.find({ adminId, role: "user" })
//     .select("_id name email phoneNumber createdAt updatedAt");

//   const userDataWithMeters = await Promise.all(
//     users.map(async (user) => {
//       const meters = await Meter.find({ assignedUserId: user._id }).select("_id meterName");

//       const meterData = await Promise.all(
//         meters.map(async (meter) => {
//           // ✅ Fetch ALL daily meter data (no date filter)
//           const dailyData = await DailyMeterData.find({ meterId: meter._id.toString() })
//             .sort({ date: 1 }) // oldest to newest
//             .select("totalKWh totalDeduction totalEG totalDG date -_id");

//           return {
//             meterId: meter._id,
//             meterName: meter.meterName,
//             dailyData
//           };
//         })
//       );

//       return {
//         userId: user._id,
//         name: user.name,
//         email: user.email,
//         phoneNumber: user.phoneNumber,
//         createdAt: user.createdAt,
//         updatedAt: user.updatedAt,
//         meters: meterData
//       };
//     })
//   );

//   return userDataWithMeters;
// };

const getUserDataByAdminId = async (adminId, startDate, endDate) => {
  if (!mongoose.Types.ObjectId.isValid(adminId)) {
    throw new Error("Invalid adminId");
  }

  const users = await User.find({ adminId, role: "user" }).select(
    "_id name email phoneNumber createdAt updatedAt"
  );

  console.log("====users=====", users);

  const userDataWithMeters = await Promise.all(
    users.map(async (user) => {
      const meters = await Meter.find({
        adminId: adminId,
        assingnedUserId: user._id,
        isAssigned: true,
      });

      //       const assignedMeters = await Meter.find({
      //   adminId: adminId,
      //   assingnedUserId: user._id ,
      //       isAssigned: true,   // not "assignedUserId"
      // });
      console.log("====meters=====", meters);

      const meterData = await Promise.all(
        meters.map(async (meter) => {
          const query = { meterId:new mongoose.Types.ObjectId(meter._id) };

          // ✅ If date filter is passed
          if (startDate || endDate) {
            query.date = {};
            if (startDate) query.date.$gte = new Date(startDate);
            if (endDate) query.date.$lte = new Date(endDate);
          } else {
            // ✅ Default: Latest 7 days
            const latest7Days = await DailyMeterData.find({
               meterId: new mongoose.Types.ObjectId(meter._id),
            })
              .sort({ date: -1 })
              .limit(7)
              .select("date");
            console.log("=====dailyData1======", latest7Days);

            const latestDates = latest7Days.map((entry) => entry.date);
            query.date = { $in: latestDates };
          }

          const dailyData = await DailyMeterData.find(query)
            .sort({ date: 1 }) // sort ascending for charts/tables
            .select("totalKWh totalDeduction totalEG totalDG date -_id");
          console.log("=====dailyData1======", dailyData);
          return {
            // meterId: meter._id,
            // meterName: meter.meterName,
            meter,
            dailyData,
          };
        })
      );

      return {
        userId: user._id,
        name: user.name,
        email: user.email,
        phoneNumber: user.phoneNumber,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        meters: meterData,
      };
    })
  );

  return userDataWithMeters;
};

const getMeterDataByAdminId = async (adminId) => {
  if (!mongoose.Types.ObjectId.isValid(adminId)) {
    throw new Error("Invalid adminId");
  }
  const meterData = await Meter.find({ adminId });

  console.log("Meter Data for Admin:", meterData);
  return meterData;
};

// const getAdminConsumptionByDate = async (adminId, from, to) => {
//   if (!mongoose.Types.ObjectId.isValid(adminId)) {
//     throw new Error("Invalid adminId");
//   }

//   const query = { adminId };

//   // Handle date range
//   let fromDate = from ? new Date(from) : null;
//   let toDate = to ? new Date(to) : null;

//   // Default to last 7 days if no filter is provided
//   if (!fromDate && !toDate) {
//     toDate = new Date(); // now
//     fromDate = new Date();
//     fromDate.setDate(toDate.getDate() - 7); // 7 days ago
//   }

//   // Only set `updatedAt` if either date is defined
//   if (fromDate || toDate) {
//     query.updatedAt = {};
//     if (fromDate) query.updatedAt.$gte = fromDate;
//     if (toDate) query.updatedAt.$lte = toDate;
//   }

//   const data = await AdminConsumption.find(query)
//     .sort({ updatedAt: 1 }) // ascending
//     .select("updatedAt totalAdminConsumption -_id");

//   return data;
// };

// const getAdminConsumptionByDate = async (adminId, from, to) => {
//   if (!mongoose.Types.ObjectId.isValid(adminId)) {
//     throw new Error("Invalid adminId");
//   }

//   const query = {
//     adminId,
//   };

//   if (from || to) {
//     query.updatedAt = {}; // <-- Use updatedAt instead of date
//     if (from) query.updatedAt.$gte = new Date(from);
//     if (to) query.updatedAt.$lte = new Date(to);
//   }

//   const data = await AdminConsumption.find(query)
//     .sort({ updatedAt: 1 }) // <-- Sort by updatedAt
//     .select("updatedAt totalAdminConsumption -_id"); // <-- Select updatedAt

//   return data;
// };

module.exports = {
  addAdminDashboardStat,
  generateAndSaveAdminConsumption,
  getAllAdminsUserMeterData,
  getLatestAdminDashboardStat,
  getAdminConsumptionByDate,
  getUserDataByAdminId,
  getMeterDataByAdminId,
};
