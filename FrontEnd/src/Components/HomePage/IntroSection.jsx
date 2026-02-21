import React from 'react';
import './IntroSection.css';

const highlights = [
  {
    title: 'Web Development',
    description: 'Currently working as a Web Developer, building responsive and scalable web applications using MERN Stack.',
  },
  {
    title: 'Education',
    description: 'Completed Master in Computer Applications (MCA) and Bachelor in Mathematics, combining analytical skills with tech expertise.',
  },
  {
    title: 'Passion & Growth',
    description: 'Always exploring new technologies and best practices to deliver elegant and efficient digital solutions.',
  },
];

const IntroSection = () => {
  return (
    <section className="intro-section section-alt">
      <div className="intro-wrapper">
        <h2 className="intro-heading fade-in">Who I Am</h2>
        <p className="intro-subtext fade-in delay-1">
          I’m Divyanshi Bhadauria, a professional Web Developer passionate about creating clean, 
          responsive, and intuitive web applications. My background in Computer and Mathematics helps me 
          combine logic with creativity for effective solutions.
        </p>

        <div className="intro-highlights">
          {highlights.map((item, idx) => (
            <div key={idx} className="highlight-card fade-in" style={{ animationDelay: `${0.3 * (idx+1)}s` }}>
              <div className="highlight-line"></div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroSection;