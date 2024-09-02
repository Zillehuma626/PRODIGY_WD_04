import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import profile from './assets/profile.jpg'
import '@fortawesome/fontawesome-free/css/all.min.css';

// Import page components
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="layout">
        <aside className="sidebar">
          <div className="profile-container">
            <img src={profile} alt="Profile" className="profile-picture" />
            <h1 className="name">Zill e Huma</h1>
            <p className="profession">Web Developer | Designer | Creator</p>
          </div>
          <div className="contact-container">
            <div className="contact-item email-container">
              <p className="contact-info">
                <strong>EMAIL:</strong><br />
                <a href="mailto:zillehuma@example.com" className="email-link">zille626@gmail.com</a>
              </p>
            </div>
            <div className="contact-item phone-container">
              <p className="contact-info">
                <strong>PHONE:</strong><br />
                +92 133 456 7890
              </p>
            </div>
            <div className="contact-item address-container">
              <p className="contact-info">
                <strong>ADDRESS:</strong><br />
                123 Main St, Karachi, Pakistan
              </p>
            </div>
            <div className="contact-item birthday-container">
              <p className="contact-info">
                <strong>BIRTHDAY:</strong><br />
                June 11, 2003
              </p>
            </div>
          </div>
          <div className="contact-item social-media-container">
            <p className="contact-info">
              <a href="https://facebook.com/zillehuma" target="_blank" rel="noopener noreferrer" className="social-link"><i class="fab fa-facebook-f"></i></a>
              <a href="https://linkedin.com/in/zillehuma" target="_blank" rel="noopener noreferrer" className="social-link"><i class="fab fa-linkedin-in"></i></a>
              <a href="https://instagram.com/zillehuma" target="_blank" rel="noopener noreferrer" className="social-link"><i class="fab fa-instagram"></i></a>
              <a href="https://twitter.com/zillehuma" target="_blank" rel="noopener noreferrer" className="social-link"><i class="fab fa-twitter"></i></a>
            </p>
          </div>
        </aside>
        <div className="main-content">
          <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          <section className="page-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </section>
        </div>
      </div>
    </Router>
  );
}

export default App;


