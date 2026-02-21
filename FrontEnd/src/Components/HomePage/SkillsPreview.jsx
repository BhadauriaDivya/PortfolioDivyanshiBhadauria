import React, { useEffect, useState } from "react";
import "./SkillsPreview.css";
import { getSkills } from "../../Api/apiCalls";

const SkillsPreview = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await getSkills();
        setSkills(response.data); // Axios wraps response in .data
      } catch (error) {
        console.error("Error fetching skills:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  if (loading) return <p>Loading skills...</p>;
  if (!Array.isArray(skills) || skills.length === 0) return <p>No skills found.</p>;

  return (
    <section className="skills-section section-alt">
      <div className="skills-wrapper">
        <h2 className="skills-heading fade-in">My Skills</h2>
        <p className="skills-subtext fade-in delay-1">
          Technologies I work with to craft elegant and responsive web applications.
        </p>

        <div className="skills-grid">
          {skills.map((skill, idx) => (
            <div
              key={skill._id || idx} 
              className="skill-badge fade-in"
              style={{ animationDelay: `${0.2 * (idx + 1)}s` }}
            >
              {skill.name} {/* Display the skill name */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsPreview;