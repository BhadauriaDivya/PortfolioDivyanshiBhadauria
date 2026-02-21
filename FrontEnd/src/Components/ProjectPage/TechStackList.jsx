import React from "react";
import "./TechStackList.css";

const TechStackList = ({ techStack = [] }) => {
  if (techStack.length === 0) return null;

  return (
    <div className="techstack-list fade-in">
      <h3 className="techstack-title">Tech Stack:</h3>
      <div className="techstack-items">
        {techStack.map((tech, idx) => (
          <span key={idx} className="techstack-item">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechStackList;