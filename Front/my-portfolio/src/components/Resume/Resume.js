import React from 'react';
import './Resume.css';

const proficiencies = [
    "JavaScript", 
    "React.js", 
    "Node.js", 
    // ...add other skills/proficiencies here
];


function Resume() {
    return (
        <section className="resume-section">
            <a href="/path-to-resume.pdf" download className="resume-link">Download My Resume</a>
            
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
