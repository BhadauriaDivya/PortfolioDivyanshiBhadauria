import API from "./api"; // Your axios instance

// ===== Home =====
// export const getHome = () => API.get("/");


// ===== Projects =====
export const getProjects = () => API.get("/projects");
export const getProjectById = (id) => API.get(`/projects/${id}`);

// ===== Contact =====
export const sendContactMessage = (data) =>
  API.post("/contact", data, { headers: { "Content-Type": "application/json" } });

// ===== Skills =====
export const getSkills = () => API.get("/skills");

// ===== ResumeClick =====
export const recordClick = () => API.post("/resume/click");

// ===== About =====
export const getAbout = () => API.get("/about");