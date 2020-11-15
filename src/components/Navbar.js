import React, { useState } from 'react';
import './Navbar.css';
import logo from './logo_shawareb.png';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <img src={ logo } style={ './logo_shawareb.png' } alt="shawarebLogo" />
            </div>
        </nav>
    )
};
export default Navbar;
