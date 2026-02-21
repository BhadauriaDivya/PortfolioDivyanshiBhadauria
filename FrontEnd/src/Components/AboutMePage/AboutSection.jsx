import React, { useEffect, useState } from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { getAbout } from "../../Api/apiCalls";
import profileImg from "../../assets/about.png"; // fallback image

const AboutSection = () => {
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

  if (loading) return <p>Loading...</p>;
  if (!about) return <p>No about data found.</p>;

  return (
    <div className="about-section">
      {/* Profile Image */}
      <div className="profile-image">
        <img src={profileImg} alt={about.name} />
      </div>

      {/* About Info */}
      <div className="about-info">
        <p>
          Hello! I’m <strong>{about.name}</strong>, {about.bio}
        </p>
        <p>
          I enjoy building full-stack applications using <strong>{about.title}</strong>
          &nbsp;
          and creating clean, user-friendly designs.
        </p>

        {/* Social Links */}
        <div className="social-links">
          {about.socialLinks?.linkedin && (
            <a
              href={about.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          )}
          {about.socialLinks?.github && (
            <a
              href={about.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

