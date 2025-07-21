const mongoose = require("mongoose");

// const adminConsumptionSchema = new mongoose.Schema(
//   {
//     adminId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },
//     date: {
//       type: String, // Format: "YYYY-MM-DD"
//       required: true,
//     },
//     totalAdminConsumption: {
//       type: Number,
//       required: true,
//     },
//   },
//   {
//     timestamps: true, // Adds createdAt and updatedAt fields
//   }
// );

// module.exports = mongoose.model("AdminConsumption", adminConsumptionSchema);



const adminConsumptionSchema = new mongoose.Schema({
  adminId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Admin",
    required: true
  },
  date: {
    type: String, // or Date (if you prefer)
    required: true
  },
  totalAdminConsumption: {
    type: Number,
    required: true
  }
}, { timestamps: true });

// adminConsumptionSchema.index({ adminId: 1, date: 1 }, { unique: true }); 

module.exports = mongoose.model("AdminConsumption", adminConsumptionSchema);

// const mongoose = require("mongoose");

// const adminConsumptionSchema = new mongoose.Schema({
//   adminId: {
//     type: mongoose.Schema.Types.ObjectId,
//     required: true,
//     ref: "User"
//   },
//   totalAdminConsumption: {
//     type: Number,
//     required: true
//   },
//    timestamp: {
//     type: String, // formatted as minute string: "YYYY-MM-DDTHH:mm:00"
//     required: true
//   },
  
// },{timestamps: true});

// module.exports = mongoose.model("AdminConsumption", adminConsumptionSchema);


// // Optional index to avoid duplicate records for same day and admin
// // adminDailyConsumptionSchema.index({ adminId: 1, date: 1 }, { unique: true });

// module.exports = mongoose.model("AdminConsumption", adminConsumptionSchema);


// const mongoose = require("mongoose");

// const adminConsumptionSchema = new mongoose.Schema({
//   adminId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Admin",
//     required: true
//   },
//   totalAdminConsumption: {
//     type: Number,
//     required: true
//   }
// }, { timestamps: true });

// // 🛡️ Ensure uniqueness to prevent duplicates
// // adminConsumptionSchema.index({ adminId: 1, timestamp: 1 }, { unique: true });

// module.exports = mongoose.model("AdminConsumption", adminConsumptionSchema);
