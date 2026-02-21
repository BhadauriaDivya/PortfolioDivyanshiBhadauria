const About = require("../models/About");

// Get About Info
exports.getAbout = async (req, res) => {
  try {
    const about = await About.findOne();
    res.json(about);
  } catch (error) {
    res.status(500).json({ message: "Error fetching about info" });
  }
};

exports.createAbout = async (req, res) => {
  try {
    const about = await About.create(req.body);
    res.status(201).json(about);
  } catch (error) {
    res.status(400).json({ message: "Error creating about" });
  }
};


// Update About (Only One Document)
exports.updateAbout = async (req, res) => {
  try {
    const about = await About.findOneAndUpdate(
      {},
      req.body,
      { new: true, upsert: true }
    );

    res.json(about);
  } catch (error) {
    res.status(400).json({ message: "Error updating about info" });
  }
};