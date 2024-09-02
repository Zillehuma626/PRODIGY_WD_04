import React from 'react';
import './AboutPage.css';


const AboutPage = () => {
  return (
    <div className="about-page">

      <section className="intro-section">
        <h1>About Me</h1>
        <div className="divider"></div>
        <p>
          I'm a passionate web developer with expertise in HTML, CSS, JavaScript, and React. My journey began with a curiosity about how websites work, evolving into a career focused on creating responsive and user-friendly web applications.
        </p>
        <p>
          I specialize in building intuitive, visually appealing web solutions that prioritize user experience. I've worked on diverse projects, from simple landing pages to complex e-commerce platforms, always aiming to deliver high-quality results.
        </p>
        <p>
          I continuously seek to expand my knowledge and skills, staying up-to-date with the latest trends and best practices in web development. I also enjoy mentoring and contributing to the developer community.
        </p>
      </section>

      <section className="education-section">
        <h2>Education</h2>
        <div className="education-container">
          <div className="education-item">
            <div className="education-icon">🎓</div>
            <div className="education-details">
              <h3>COMSATS University Islamabad, Pakistan</h3>
              <p>Bachelor's Degree in Computer Science</p>
              <p>Graduated with honors, specializing in web development.</p>
            </div>
          </div>
          <div className="education-item">
            <div className="education-icon">📚</div>
            <div className="education-details">
              <h3>Prodigy Infotech, Software House, Pakistan</h3>
              <p>Certification in Full Stack Development</p>
              <p>Completed a rigorous bootcamp focusing on modern web technologies.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="experience-section">
        <h2>Professional Experience</h2>
        <div className="experience-container">
          <div className="experience-item">
            <h3>Internee at Prodigy InfoTech</h3>
            <p>Developed and maintained high-traffic websites, improved site performance, and collaborated with cross-functional teams to deliver impactful solutions.</p>
          </div>
          <div className="experience-item">
            <h3>Web Developer at DevWorks</h3>
            <p>Designed and implemented interactive web applications, provided technical support, and contributed to the development of new features.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
