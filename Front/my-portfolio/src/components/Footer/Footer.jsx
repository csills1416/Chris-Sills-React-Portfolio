import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <a href="https://github.com/YourUsername" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/YourProfile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://stackoverflow.com/users/YourID" target="_blank" rel="noopener noreferrer">Stack Overflow</a>
            {/* Add other social links if necessary */}
        </footer>
    );
}

export default Footer;
