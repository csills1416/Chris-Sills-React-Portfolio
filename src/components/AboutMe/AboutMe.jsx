import React from 'react';
import './AboutMe.css'; // Import the associated stylesheet

function AboutMe() {
    return (
        <section className="aboutme-section">
            <img src="/path-to-your-image.jpg" alt="Chris Sills" className="developer-photo" />
            <p className="bio"> 
                {"Hello! I'm Chris Sills, a passionate full-stack web developer based out of Richmond, Virginia. With a strong foundation in both front-end and back-end technologies, I strive to create responsive and user-friendly websites. I have a keen interest in modern web technologies and love to stay updated with the latest trends. When I'm not coding, you can find me exploring the outdoors or diving into a new book."}
            </p>
        </section>
    );
}

export default AboutMe;
