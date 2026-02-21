import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ProjectDetails.css";
import TechStackList from "./TechStackList";
import { getProjectById } from "../../Api/apiCalls";
import { BACKEND_URL } from "../../config";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await getProjectById(id);
        setProject(response.data);
      } catch (error) {
        console.error("Error fetching project:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProject();
  }, [id]);

  if (loading) return <p>Loading project details...</p>;
  if (!project) return <p>Project not found.</p>;

  const { title, description, features, challenges, techStack, images } = project;

  return (
    <>
      <div className="breadcrumb">
        <Link to="/">Home</Link> &gt;{" "}
        <Link to="/projects">Projects</Link> &gt;{" "}
        <span>{title}</span>
      </div>
    <div className="project-details fade-in">
      
      {/* Breadcrumb */}

      <h2 className="details-title">{title}</h2>

      {/* Image Gallery */}
      {images && images.length > 0 && (
        <div className="project-gallery">
          {images.map((img, idx) => (
            <div key={idx} className="gallery-item">
              <img src={`${BACKEND_URL}${img}`} alt={`${title} ${idx + 1}`} />
            </div>
          ))}
        </div>
      )}

      <p className="details-description">
        {description || "No detailed description available."}
      </p>

      {features && features.length > 0 && (
        <div className="details-section">
          <h3>Key Features:</h3>
          <ul>
            {features.map((feat, idx) => (
              <li key={idx}>{feat}</li>
            ))}
          </ul>
        </div>
      )}

      {challenges && challenges.length > 0 && (
        <div className="details-section">
          <h3>Challenges & Solutions:</h3>
          <ul>
            {challenges.map((ch, idx) => (
              <li key={idx}>{ch}</li>
            ))}
          </ul>
        </div>
      )}

      <TechStackList techStack={techStack} />
    </div>
    </>
  );
};

export default ProjectDetails;