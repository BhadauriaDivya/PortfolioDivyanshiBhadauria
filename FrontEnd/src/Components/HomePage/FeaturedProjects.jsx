import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // import Link
import './FeaturedProjects.css';
import { getProjects } from "../../Api/apiCalls";
import { VITE_BACKEND_URL } from "../../config";

const FeaturedProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await getProjects();
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <p>Loading projects...</p>;

  return (
    <section className="projects-section">
      <div className="projects-wrapper">
        <h2 className="projects-heading fade-in">Featured Projects</h2>
        <p className="projects-subtext fade-in delay-1">
          A selection of my latest work showcasing my skills in web development and design.
        </p>

        <div className="projects-grid">
          {Array.isArray(projects) && projects.length > 0 ? (
            projects.map((project, idx) => (
              <div
                key={project._id || idx}
                className="project-card fade-in"
                style={{ animationDelay: `${0.2 * (idx + 1)}s` }}
              >
                <div className="project-image">
                  <img
                    src={`${VITE_BACKEND_URL}${project.images && project.images.length > 0 ? project.images[0] : "/uploads/default.png"}`}
                    alt={project.title}
                  />
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.techStack ? project.techStack.join(", ") : "No tech info"}</p>

                  {/* Product Details Link */}
                  <Link to={`/projects/${project._id}`} className="view-details">
                    View Details
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p>No projects found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
