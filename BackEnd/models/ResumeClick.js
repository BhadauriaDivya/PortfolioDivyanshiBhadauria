// models/ResumeClick.js
const mongoose = require("mongoose");

const resumeClickSchema = new mongoose.Schema(
  {
    downloaded: {
      type: Boolean,
      default: true, 
    },
    timestamp: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ResumeClick", resumeClickSchema);