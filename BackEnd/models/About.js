const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
    },
    bio: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    location: {
      type: String,
    },
    resumeLink: {
      type: String,
    },
    socialLinks: {
      github: String,
      linkedin: String,
    },
    experience: [
      {
        role: { type: String, required: true },
        company: { type: String, required: true },
        startYear: String,
        endYear: String,
      },
    ],
    education: [
      {
        degree: { type: String, required: true },
        institution: { type: String, required: true },
        startYear: String,
        endYear: String,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("About", aboutSchema);