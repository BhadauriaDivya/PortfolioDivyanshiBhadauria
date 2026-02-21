import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard"; // Project card component
import "./ProjectList.css";
import { getProjects } from "../../Api/apiCalls"; // API service

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await getProjects(); // fetch from backend
        setProjects(response.data); // Axios wraps data inside .data
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <p>Loading projects...</p>; // optional loading state

  return (
    <section className="project-list-section section-alt">
      <div className="project-list-wrapper">
        <h2 className="project-list-heading fade-in">Featured Projects</h2>
        <p className="project-list-subtext fade-in delay-1">
          A curated collection of web applications I’ve built using modern
          technologies.
        </p>

        <div className="project-grid">
          {Array.isArray(projects) && projects.length > 0 ? (
            projects.map((project) => (
              <ProjectCard
                key={project._id} // backend projects use _id
                project={{
                  id: project._id,
                  title: project.title,
                  description: project.description,
                  techStack: project.techStack || [],
                  images:
                    project.images && project.images.length > 0
                      ? project.images
                      : ["/uploads/project3_1.png"], // default as an array
                }}
              />
            ))
          ) : (
            <p>No projects found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectList;
