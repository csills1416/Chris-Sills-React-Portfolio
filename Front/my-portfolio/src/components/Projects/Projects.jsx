import React from 'react';
import './Projects.css';

function Projects() {
    // Sample data for projects, adjust accordingly
    const projectData = [
        {
            title: "What 2 Watch",
            description: "A website that provides the user with a list of movies to watch.",
            imageUrl: "/path-to-image1.jpg",
            deployedUrl: "http://link-to-deployed-project1.com",
            githubUrl: "https://github.com/jonesmatr/What-2-Watch"
        },
        {
            title: "Homeless Animal Shelter",
            description: "A website for a homeless animal shelter.",
            imageUrl: "/path-to-image2.jpg",
            deployedUrl: "https://rocky-fortress-05253-ca50dfe67020.herokuapp.com/",
            githubUrl: "https://github.com/KClarkDev/homeless-animal-rescue-team"
        },
        {
            title: "Weather Dashboard",
            description: "A weather dashboard that allows the user to search for a city and see the weather for that city.",
            imageUrl: "/path-to-image3.jpg",
            deployedUrl: "https://csills1416.github.io/WeatherDashboardAppProject/",
            githubUrl: "https://github.com/csills1416/WeatherDashboardAppProject"
        }
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
