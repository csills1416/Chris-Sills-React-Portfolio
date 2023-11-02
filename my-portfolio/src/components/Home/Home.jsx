import React from 'react';
import './Home.css';
import AboutMe from '../AboutMe/AboutMe'; // Assuming AboutMe is in the same directory

function Home() {
    return (
        <section className="home-section">
            <h1>Welcome to My Portfolio</h1>
            <AboutMe />
            {/* Any other introductory content you want to add */}
        </section>
    );
}

export default Home;
