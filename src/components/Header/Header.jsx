import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';
function Header() {
    return (
        <div className="header">
            <h1>Chris Sills</h1>
            <Navigation />
        </div>
    );
}

export default Header;