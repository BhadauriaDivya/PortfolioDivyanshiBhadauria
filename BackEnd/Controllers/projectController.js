const Project = require("../models/Project");

// Get All Projects
exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: "Error fetching projects" });
  }
};

// Get Project By ID
exports.getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project)
      return res.status(404).json({ message: "Project not found" });

    res.json(project);
  } catch (error) {
    res.status(500).json({ message: "Error fetching project" });
  }
};

// Create Project
exports.createProject = async (req, res) => {
  try {
    const newProject = await Project.create(req.body);
    res.status(201).json(newProject);
  } catch (error) {
    res.status(400).json({ message: "Error creating project" });
  }
};

// Update Project
exports.updateProject = async (req, res) => {
  try {
    const updated = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated)
      return res.status(404).json({ message: "Project not found" });

    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: "Error updating project" });
  }
};

// Delete Project
exports.deleteProject = async (req, res) => {
  try {
    const deleted = await Project.findByIdAndDelete(req.params.id);

    if (!deleted)
      return res.status(404).json({ message: "Project not found" });

    res.json({ message: "Project deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting project" });
  }
};