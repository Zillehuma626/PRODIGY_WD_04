import React from 'react';
import './ContactPage.css';

const ContactPage = () => (
  <section id="contact" className="contact-page">
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093747!2d144.95373531550457!3d-37.81621897975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577f50fae645c23!2sFlinders%20St%20Station!5e0!3m2!1sen!2sau!4v1618911410806!5m2!1sen!2sau"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="Google Map"
      ></iframe>
    </div>
    <div className="form-container">
      <h2>Contact Me</h2>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit"><i className="fas fa-paper-plane"></i>Send Message </button>
      </form>
    </div>
  </section>
);

export default ContactPage;
