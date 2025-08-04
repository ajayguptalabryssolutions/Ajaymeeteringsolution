const mongoose = require("mongoose");

const moduleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  path: { type: String },
  status: { type: Boolean, default: true },
  is_sidebar: { type: Boolean, default: false },

  created_at: { type: Date, default: Date.now },
  created_by: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  updated_at: { type: Date },
  updated_by: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

  parent_id: { type: mongoose.Schema.Types.ObjectId, ref: "Module", default: null },
});

module.exports = mongoose.model("Module", moduleSchema);
