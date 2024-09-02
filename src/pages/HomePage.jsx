import React from 'react';
import './HomePage.css'; // Make sure this is the correct path
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import profileImage from '../assets/profile.jpg';
import { Link } from 'react-router-dom'; // Add this line
// Register components needed for the chart
ChartJS.register(ArcElement, Tooltip, Legend);

const HomePage = () => {
  // Data for the doughnut chart
  const data = {
    labels: ['HTML', 'CSS', 'JavaScript', 'React'],
    datasets: [
      {
        label: 'Skills Distribution',
        data: [25, 25, 25, 25], // Example data for each skill
        backgroundColor: [
          '#FF6384', // Color for HTML
          '#36A2EB', // Color for CSS
          '#FFCE56', // Color for JavaScript
          '#4BC0C0', // Color for React
        ],
        borderColor: 'transparent',
        borderWidth:2,
  
      },
    ],
  };

  // Options for the doughnut chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}%`;
          },
        },
      },
    },
    cutout: '70%', // Adjust the size of the hole in the center
  };
  
  return (
    <div className="home-page">
     <section className="hero-section">
        <div className="hero-text">
          <h1>I'm a Web Developer</h1>
          <p>
            I am a passionate web developer skilled in creating modern, user-friendly websites and applications.
          </p>
          <Link to="/projects" className="cta-button">View My Work</Link>
        </div>
        <img src={profileImage} classsName='rounded-image' alt="Profile" style={{ width: '400px' }} />
      </section>

      <section className="skills-doughnut">
        <h2 style={{ textAlign: 'center', fontSize: '2.2rem' }}>My Skills</h2>
        <div className="doughnut-chart">
          <Doughnut data={data} options={options} />
        </div>
        <div className="skill-descriptions">
          <div className="skill-item">
            <div className="icon">🛠️</div>
            <h3>HTML</h3>
            <p>Proficient in building structured and semantic web pages using HTML5.</p>
          </div>
          <div className="skill-item">
            <div className="icon">🎨</div>
            <h3>CSS</h3>
            <p>Experienced in styling and designing responsive layouts with CSS3.</p>
          </div>
          <div className="skill-item">
            <div className="icon">📝</div>
            <h3>JavaScript</h3>
            <p>Skilled in creating interactive and dynamic web using JavaScript.</p>
          </div>
          <div className="skill-item">
            <div className="icon">⚛️</div>
            <h3>React</h3>
            <p>Proficient in building modern web applications using React.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
