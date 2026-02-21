const express = require("express");
const router = express.Router();

// ===== Import Controllers =====
const {getProjects, getProjectById, createProject, updateProject, deleteProject} = require("../controllers/projectController");
const { sendContactMessage, getAllMessages, deleteMessage} = require("../controllers/contactController");
const { getSkills, createSkill, updateSkill, deleteSkill} = require("../controllers/skillController");
const { getAbout,createAbout , updateAbout} = require("../controllers/aboutController");
const { recordClick, getStats} = require("../Controllers/resumeController");


// ===== Routes =====

// Projects
router.get("/projects", getProjects);
router.get("/projects/:id", getProjectById);
router.post("/projects", createProject);
router.put("/projects/:id", updateProject);
router.delete("/projects/:id", deleteProject);

// Contact
router.post("/contact", sendContactMessage);
router.get("/contact", getAllMessages);
router.delete("/contact/:id", deleteMessage);

// Skills
router.get("/skills", getSkills);
router.post("/skills", createSkill);
router.put("/skills/:id", updateSkill);
router.delete("/skills/:id", deleteSkill);

// Resume clicks
router.post("/resume/click", recordClick); // call this when user clicks resume
router.get("/resume/stats", getStats);      // view stats in Postman

// About
router.get("/about", getAbout);
router.post("/about", createAbout);
router.put("/about", updateAbout);

module.exports = router;
