import React from 'react';
import './Projects.css';


    // Sample data for projects, adjust accordingly
 export const projectData = [
        {
            title: "What 2 Watch",
            description: "A website that provides the user with a list of movies to watch.",
            imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/012/657/549/small/illustration-negative-film-reel-roll-tapes-for-movie-cinema-video-logo-vector.jpg",
            deployedUrl: "http://link-to-deployed-project1.com",
            githubUrl: "https://github.com/jonesmatr/What-2-Watch"
        },
        {
            title: "Homeless Animal Shelter",
            description: "A website for a homeless animal shelter.",
            imageUrl: "https://assets-global.website-files.com/5fce4d055c2d34363bd1d1b4/620196078c189523e74998de_New%20Logo.jpg",
            deployedUrl: "https://rocky-fortress-05253-ca50dfe67020.herokuapp.com/",
            githubUrl: "https://github.com/KClarkDev/homeless-animal-rescue-team"
        },
        {
            title: "Weather Dashboard",
            description: "A weather dashboard that allows the user to search for a city and see the weather for that city.",
            imageUrl: "https://cdn-icons-png.flaticon.com/512/1779/1779940.png",
            deployedUrl: "https://csills1416.github.io/WeatherDashboardAppProject/",
            githubUrl: "https://github.com/csills1416/WeatherDashboardAppProject"
        }
    ];

    function Projects() {
        return (
            <section className="projects-section">
                {projectData.map((project, index) => (
                    <div key={index} className="project-card">
                        <img src={project.imageUrl} alt={project.title} className="project-image" />
                        <h2 className="project-title">{project.title}</h2>
                        <div className="project-links">
                            <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer" className="live-link">Live</a>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="github-link">GitHub</a>
                        </div>
                    </div>
                ))}
            </section>
        );
    }
export default Projects;