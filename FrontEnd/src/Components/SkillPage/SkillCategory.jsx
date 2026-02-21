import React from "react";
import "./SkillPage.css";
import { SiReact, SiNodedotjs, SiMongodb, SiMysql, SiJavascript, SiHtml5, SiCss3, SiBootstrap, SiPython, SiCplusplus } from "react-icons/si";

const SkillCategory = ({ category, skills }) => {

  const skillIcons = {
    "React.js": <SiReact color="#61DAFB" />,
    "Node.js": <SiNodedotjs color="#339933" />,
    "MongoDB": <SiMongodb color="#4DB33D" />,
    "MySQL": <SiMysql color="#4479A1" />,
    "JavaScript": <SiJavascript color="#F7DF1E" />,
    "HTML": <SiHtml5 color="#E34F26" />,
    "CSS": <SiCss3 color="#1572B6" />,
    "Bootstrap": <SiBootstrap color="#7952B3" />,
    "Python": <SiPython color="#3776AB" />,
    "C++": <SiCplusplus color="#3776AB" />,
  };

  return (
    <div className="skill-category fade-in">
      <h2 className="category-title">{category}</h2>
      <div className="skill-cards">
        {skills.map((skill, idx) => (
          <div key={idx} className="skill-card fade-in">
            <h3 className="skill-name">
              {/* Render React Icon if exists in mapping */}
              {skill.icon && skillIcons[skill.icon]}

              {/* Otherwise assume it's an image URL */}
              {skill.icon && !skillIcons[skill.icon] && (
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="skill-icon"
                />
              )}

              {/* Skill Name */}
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;