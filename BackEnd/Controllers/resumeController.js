const ResumeClick = require("../models/ResumeClick");

// Record a new resume click with IST timestamp
exports.recordClick = async (req, res) => {
  try {
    // Get current UTC time
    const now = new Date();

    // Convert to IST (+5:30)
    const istOffset = 5.5 * 60; // 5 hours 30 minutes in minutes
    const istTime = new Date(now.getTime() + istOffset * 60 * 1000);

    const click = new ResumeClick({
      timestamp: istTime, // save IST time
    });

    await click.save();

    res.status(201).json({ 
      message: "Resume click recorded",
      timestamp: istTime.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }) // optional display format
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to record click" });
  }
};

// Get total clicks with IST timestamps
exports.getStats = async (req, res) => {
  try {
    const clicks = await ResumeClick.find().sort({ createdAt: -1 });

    // Map each click to IST display format
    const clicksIST = clicks.map((c) => ({
      id: c._id,
      timestamp: c.timestamp.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
    }));

    res.json({ 
      totalClicks: clicks.length, 
      clicks: clicksIST 
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch clicks" });
  }
};