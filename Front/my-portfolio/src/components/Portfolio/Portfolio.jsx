import React from 'react';
import './Portfolio.css';

const projects = [
    {
        title: "Project 1",
        imageUrl: "/path-to-image1.jpg",
        deployedUrl: "http://link-to-deployed-project1.com",
        githubUrl: "http://github-link-to-project1.com"
    },
    // ... Add more projects (up to six or however many you want)
];


function Portfolio() {
    return (
        <section className="portfolio-section">
            {projects.map((project, index) => (
                <div key={index} className="project-card">
                    <img src={project.imageUrl} alt={project.title} className="project-image" />
                    <h3>{project.title}</h3>
                    <div className="project-links">
                        <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer">Live</a>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default Portfolio;
