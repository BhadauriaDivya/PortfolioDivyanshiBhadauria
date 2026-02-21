import React, { useEffect, useState } from "react";
import SkillCategory from "./SkillCategory";
import { getSkills } from "../../Api/apiCalls";

const SkillList = () => {
  const [skillsData, setSkillsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await getSkills();
        const skills = response.data;

        // Group skills by category
        const grouped = skills.reduce((acc, skill) => {
          const category = skill.category || "Others";
          if (!acc[category]) acc[category] = [];
          acc[category].push({
            name: skill.name,
            level: skill.level,
            icon: skill.icon,
          });
          return acc;
        }, {});

        // Convert object to array with desired order
        const order = [
          "Frontend",
          "Backend",
          "Database",
          "Programming Language",
          "Others"
        ];
        const groupedArray = order
          .filter((cat) => grouped[cat])
          .map((category) => ({
            category,
            skills: grouped[category],
          }));

        setSkillsData(groupedArray);
      } catch (error) {
        console.error("Error fetching skills:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  if (loading) return <p>Loading skills...</p>;
  if (!skillsData.length) return <p>No skills found.</p>;

  return (
    <div className="skill-list">
      {skillsData.map((cat, idx) => (
        <SkillCategory key={idx} category={cat.category} skills={cat.skills} />
      ))}
    </div>
  );
};

export default SkillList;