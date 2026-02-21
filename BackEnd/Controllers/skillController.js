const Skill = require("../models/Skill");

// Get Skills
exports.getSkills = async (req, res) => {
  try {
    const skills = await Skill.find().sort({ createdAt: -1 });
    res.json(skills);
  } catch (error) {
    res.status(500).json({ message: "Error fetching skills" });
  }
};

// Create Skill
exports.createSkill = async (req, res) => {
  try {
    const skill = await Skill.create(req.body);
    res.status(201).json(skill);
  } catch (error) {
    res.status(400).json({ message: "Error creating skill" });
  }
};

// Update Skill
exports.updateSkill = async (req, res) => {
  try {
    const updated = await Skill.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated)
      return res.status(404).json({ message: "Skill not found" });

    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: "Error updating skill" });
  }
};

// Delete Skill
exports.deleteSkill = async (req, res) => {
  try {
    const deleted = await Skill.findByIdAndDelete(req.params.id);

    if (!deleted)
      return res.status(404).json({ message: "Skill not found" });

    res.json({ message: "Skill deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting skill" });
  }
};