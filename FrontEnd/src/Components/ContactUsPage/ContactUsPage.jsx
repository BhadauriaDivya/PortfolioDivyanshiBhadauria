import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import "./ContactUsPage.css";

const ContactUsPage = () => {
  return (
    <section className="contact-page section-alt">
      <h1 className="contact-title">Get in Touch</h1>
      <p className="contact-subtitle">
        Have a project idea or just want to say hi? I’d love to hear from you.
      </p>

      <div className="contact-wrapper">
        <ContactForm />
        <ContactInfo />
      </div>
    </section>
  );
};

export default ContactUsPage;