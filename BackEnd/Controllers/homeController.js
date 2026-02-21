exports.getHome = async (req, res) => {
  try {
    res.json({
      message: "Welcome to My Portfolio API 🚀",
      status: "Success",
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};