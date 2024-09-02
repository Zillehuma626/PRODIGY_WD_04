import React from 'react';
import './ProjectsPage.css';

const ProjectsPage = () => {
  const projects = [
    {
      title: 'Stopwatch Web App',
      description:
        'A sleek and functional stopwatch application with features like lap tracking and a modern UI.',
      image: 'https://images.unsplash.com/photo-1704265586142-db3e17d0dea0?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Tic-Tac-Toe Game',
      description:
        'An interactive Tic-Tac-Toe game with AI opponent, victory animation, and a modern design.',
      image: 'https://plus.unsplash.com/premium_photo-1673735396428-d51dc2a7a62d?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'TechSolutions Website',
      description:
        'A comprehensive website providing tech solutions and information, built with a clean and responsive design.',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Weather API Web App',
      description:
        'A dynamic weather application that provides real-time weather data using a Weather API, with a sleek user interface.',
      image: 'https://cdn.pixabay.com/photo/2019/03/11/00/15/rainbow-4047523_1280.jpg',
    },
    {
      title: 'Portfolio Website',
      description:
        'A personal portfolio website showcasing my skills, projects, and accomplishments as a web developer, built using modern web technologies.',
      image: 'https://cdn.pixabay.com/photo/2023/09/27/10/48/portfolio-8279357_1280.jpg',
    },
    {
      title: 'E-commerce Platform',
      description:
        'A responsive e-commerce platform featuring a product listing, shopping cart, and checkout system, with a focus on user experience.',
      image: 'https://cdn.pixabay.com/photo/2017/08/07/19/45/ecommerce-2607114_1280.jpg',
    },
  ];

  return (
    <div className="projects-page">
      <div className="projects-header">
        <h1>My Web Development Projects</h1>
        <p>
          Here are some of the web development projects I've worked on,
          showcasing my skills in HTML, CSS, JavaScript and React.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;

