import React from 'react';
import './Resume.css';

const proficiencies = [
    "JavaScript", 
    "React.js", 
    "Node.js", 
    "Express.js", 
    "MongoDB", 
    "HTML", 
    "CSS", 
    "Bootstrap",
    "Git",
    "Heroku"
];

function Resume() {
    return (
        <section className="resume-section">
            <iframe 
                src="/Resume-Chris-Sills.pdf" 
                width="100%" 
                height="500px" 
                title="Chris Sills Resume"
                style={{ border: 'none' }}
            >
            </iframe>

            <a href="/Resume-Chris-Sills.pdf" download className="resume-link">Download My Resume</a>

            <h2>Proficiencies</h2>
            <ul className="proficiency-list">
                {proficiencies.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </section>
    );
}

export default Resume;
