import React from 'react';
import './AboutMe.css'; // Import the associated stylesheet

function AboutMe() {
    return (
        <section className="aboutme-section">
            <img src="/path-to-your-image.jpg" alt="Developer" className="developer-photo" />
            <p className="bio"> 
                {/* Add your bio here. */}
            </p>
        </section>
    );
}

export default AboutMe;
