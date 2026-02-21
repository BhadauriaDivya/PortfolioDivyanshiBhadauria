const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    category: {
      type: String, // e.g., Frontend, Backend, Database
    },
    icon: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Skill", skillSchema);