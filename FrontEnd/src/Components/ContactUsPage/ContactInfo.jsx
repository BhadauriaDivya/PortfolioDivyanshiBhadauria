import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <h3>Contact Info</h3>
      <p><FaEnvelope /> bdivyanshi11.11@gmail.com</p>
      <p><FaMapMarkerAlt /> New Delhi, India</p>
    </div>
  );
};

export default ContactInfo;