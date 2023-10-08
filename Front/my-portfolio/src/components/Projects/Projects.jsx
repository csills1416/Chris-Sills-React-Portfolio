import React from 'react';
import './Projects.css';

function Projects() {
    // Sample data for projects, adjust accordingly
    const projectData = [
        {
            title: "Project 1",
            description: "A detailed description of Project 1...",
            imageUrl: "/path-to-image1.jpg",
            deployedUrl: "http://link-to-deployed-project1.com",
            githubUrl: "http://github-link-to-project1.com"
        },
        // ... Add more projects as required
    ];

    return (
        <section className="projects-section">
            {projectData.map((project, index) => (
                <div key={index} className="project-detail">
                    <img src={project.imageUrl} alt={project.title} className="project-image" />
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <div className="project-links">
                        <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer">Live</a>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default Projects;
