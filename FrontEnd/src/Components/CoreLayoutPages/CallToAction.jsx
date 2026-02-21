import React from 'react';
import './CallToAction.css';
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="cta-section">
      <div className="cta-wrapper">
        <h2 className="cta-heading fade-in">
          Interested in working with me?
        </h2>
        <p className="cta-subtext fade-in delay-1">
          I’m currently open for web development projects and collaborations. 
          Let’s create something elegant, responsive, and timeless together.
        </p>
        <div className="cta-buttons fade-in delay-2">
          <Link to="/contactUs" className="btn-primary-x">Get in Touch</Link>
          <Link to="/projects" className="btn-secondary">View My Work</Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
