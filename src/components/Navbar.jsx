import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Logo */}
                <h1 className="navbar-logo"></h1>

                {/* Hamburger Menu */}
                <div className="hamburger" onClick={toggleMenu}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
            </div>

            {/* Navigation Links */}
            <div className={`nav-overlay ${isOpen ? 'open' : ''}`}>
            {/* Close button */}
                <button className='close-button' onClick={toggleMenu}>x</button>
                <ul className="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;