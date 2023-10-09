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
            <a href="https://www.linkedin.com/in/chris-sills-40bb11154/" download className="resume-link">Download My Resume</a>
            
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
