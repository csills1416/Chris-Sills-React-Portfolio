import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // from react-router-dom
import './Navigation.css';
function Navigation() {
    const location = useLocation(); // This helps determine the current route

    return (
        <nav className="navigation">
            <Link 
                to="/" 
                className={location.pathname === "/" ? "active" : ""}
            >
                About Me
            </Link>
            <Link 
                to="/portfolio" 
                className={location.pathname === "/portfolio" ? "active" : ""}
            >
                Portfolio
            </Link>
            <Link 
                to="/contact" 
                className={location.pathname === "/contact" ? "active" : ""}
            >
                Contact
            </Link>
            <Link 
                to="/resume" 
                className={location.pathname === "/resume" ? "active" : ""}
            >
                Resume
            </Link>
        </nav>
    );
}

export default Navigation;
