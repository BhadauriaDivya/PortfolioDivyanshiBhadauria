import React from "react";
import SkillList from "./SkillList";
import "./SkillPage.css";

const SkillPage = () => {
  return (
    <section className="skills-page">
      <h1 className="page-title">My Skills</h1>
      <p className="page-subtitle">
        A curated set of technologies and tools I use to craft elegant web solutions.
      </p>

      <SkillList />
    </section>
  );
};

export default SkillPage;