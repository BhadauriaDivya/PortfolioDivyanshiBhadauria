import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer section-alt">
      <div className="footer-inner">

        <div className="footer-left">
          <h2>Divyanshi Bhadauria</h2>
          <p className="freelance-note">
            Open for freelance projects – let’s build something amazing together!
          </p>


          <div className="footer-socials">
            <a
              href="https://www.linkedin.com/in/divyanshi-bhadauria/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        <div className="footer-right-section">
          <div className="footer-right">
            <a href="/">Home</a>
            <a href="/projects">Projects</a>
            <a href="/skill">Skills</a>
            <a href="/about">About</a>
            <a href="/contactUs">Contact</a>
          </div>
          {/* <p className="thank-you">Thank you for visiting!</p> */}
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Divyanshi. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
