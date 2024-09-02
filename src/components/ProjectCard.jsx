
// ProjectCard.jsx
import React from 'react';
import './ProjectCard.css';

function ProjectCard({ title, description, imageUrl, link }) {
  return (
    <div className="project-card">
      <img src={imageUrl} alt={title} />
      <div className="content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} className="project-link" target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
