import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";
import { VITE_BACKEND_URL } from "../../config";

const ProjectCard = ({ project }) => {
  const { id, title, description, techStack, images } = project;

  // Take the first image from the images array
  const firstImage = images && images.length > 0 ? images[0] : "";

  return (
    <div className="project-card fade-in">

      {/* Project Image */}
      <div className="project-image">
        {firstImage && <img src={`${VITE_BACKEND_URL}${firstImage}`} alt={title} />}
      </div>

{/* View Details Link */}
<Link className="view-details" to={`/projects/${id}`}>
          View Details
        </Link>

      {/* Project Content */}
      <div className="project-content">

        <h3 className="project-title">{title}</h3>

        {/* Tech Stack */}
        <div className="project-techstack">
          {techStack.map((tech, idx) => (
            <span key={idx} className="tech-item">
              {tech}
            </span>
          ))}
        </div>
                
      </div>
    </div>
  );
};

export default ProjectCard;
