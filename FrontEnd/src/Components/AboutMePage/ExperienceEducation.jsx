import React, { useEffect, useState } from "react";
import { getAbout } from "../../Api/apiCalls";

const ExperienceEducation = () => {
  const [about, setAbout] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const response = await getAbout();
        setAbout(response.data);
      } catch (error) {
        console.error("Error fetching About data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAbout();
  }, []);

  if (loading) return <p>Loading experience & education...</p>;
  if (!about) return <p>No data found.</p>;

  return (
    <div className="experience-education">

      {/* Experience Timeline */}
      <div className="experience-timeline">
        <h2>Experience</h2>
        <ul>
          {about.experience?.length ? (
            about.experience.map((exp, idx) => (
              <li key={idx}>
                <strong>{exp.role}</strong> – {exp.company} ({exp.startYear} - {exp.endYear})
                {exp.description && <p>{exp.description}</p>}
              </li>
            ))
          ) : (
            <li>No experience available.</li>
          )}
        </ul>
      </div>

      {/* Education Section */}
      <div className="education-section">
        <h2>Education</h2>
        <ul>
          {about.education?.length ? (
            about.education.map((edu, idx) => (
              <li key={idx}>
                <strong>{edu.degree}</strong> – {edu.institution} ({edu.startYear} - {edu.endYear})
                {edu.description && <p>{edu.description}</p>}
              </li>
            ))
          ) : (
            <li>No education data available.</li>
          )}
        </ul>
      </div>

    </div>
  );
};

export default ExperienceEducation;