// const mongoose = require("mongoose");
// const MeterDecodedData = require("../model/MeterData");
// const Meter = require("../model/Meter");
// const AdminDailyConsumption = require("../model/AdminDailyConsumption");

// const generateAndSaveAdminDailyConsumption = async () => {
//   const adminIds = await Meter.distinct("adminId");

//   for (const adminId of adminIds) {

//     const result = await MeterDecodedData.aggregate([
//   {
//     $match: {
//       timestamp: { $type: "date" } // ✅ This fixes the error
//     }
//   },
//   { $sort: { timestamp: 1 } },
//   {
//     $group: {
//       _id: {
//         meterId: "$meterId",
//         date: {
//           $dateToString: {
//             format: "%Y-%m-%d",
//             date: "$timestamp"
//           }
//         }
//       },
//       firstEbReading: { $first: "$cum_eb_kwh.value" },
//       lastEbReading: { $last: "$cum_eb_kwh.value" }
//     }
//   },
//   {
//     $project: {
//       meterId: "$_id.meterId",
//       date: "$_id.date",
//       consumption: { $subtract: ["$lastEbReading", "$firstEbReading"] },
//       _id: 0
//     }
//   },
//   {
//     $lookup: {
//       from: "meters",
//       localField: "meterId",
//       foreignField: "meterId", // string match if you're using custom IDs
//       as: "meter"
//     }
//   },
//   { $unwind: "$meter" },
//   {
//     $match: {
//       "meter.adminId": new mongoose.Types.ObjectId(adminId)
//     }
//   },
//   {
//     $group: {
//       _id: "$date",
//       totalAdminConsumption: { $sum: "$consumption" }
//     }
//   },
//   {
//     $project: {
//       date: "$_id",
//       totalAdminConsumption: 1,
//       _id: 0
//     }
//   },
//   { $sort: { date: 1 } }
// ]);

  
//     // Save result to DB
//     for (const day of result) {
//       await AdminDailyConsumption.findOneAndUpdate(
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
//   }

//   return { message: "Admin daily stats generated and stored successfully." };
// };

// module.exports = {
//   generateAndSaveAdminDailyConsumption,
// };
