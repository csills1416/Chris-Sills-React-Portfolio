import React from 'react';
import './Portfolio.css';
import { projectData } from '../Projects/Projects'; // Update the import path

function Portfolio() {
    return (
        <section className="portfolio-section">
            {projectData.map((project, index) => (
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
