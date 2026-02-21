import React from 'react';
import './HeroSection.css';
import heroImg from '../../assets/hero.png';
import resumePDF from '../../assets/Divyanshi_Bhadauria.pdf';
import { Link } from "react-router-dom";
import { recordClick } from "../../Api/apiCalls"; // ✅ import your API function

const HeroSection = () => {

  // Function to handle resume download click
  const handleResumeClick = async () => {
    try {
      await recordClick(); // call API to record click
      console.log("Resume click recorded");
    } catch (error) {
      console.error("Error recording resume click:", error);
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="fade-in">
          Hi, I’m <span className="accent-text">Divyanshi Bhadauria</span>
        </h1>
        <p className="fade-in delay-1">
          I build responsive and user-friendly web applications using <strong>MERN Stack</strong>.
        </p>
        <div className="hero-buttons fade-in delay-2">       
          <Link to={'/projects'}>
            <button className="btn-primary">View My Work</button>
          </Link>
          <a
            href={resumePDF}
            download
            className="btn-primary btn-resume"
            onClick={handleResumeClick} // ✅ record click on download
          >
            Download Resume
          </a>
        </div>
      </div>
      <div className="hero-image fade-in delay-3">
        <div className="image-bg"></div>
        <img src={heroImg} alt="Divyanshi" />
      </div>
    </section>
  );
};

export default HeroSection;