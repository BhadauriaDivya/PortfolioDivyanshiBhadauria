import React from "react";
import AboutSection from "./AboutSection";
import ExperienceEducation from "./ExperienceEducation";
import "./AboutMePage.css";

const AboutMePage = () => {
  return (
    <section className="about-page section-alt">
      <h1 className="about-title">About Me</h1>
      <AboutSection />
      <ExperienceEducation />
    </section>
  );
};

export default AboutMePage;