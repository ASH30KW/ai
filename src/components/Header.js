import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header>
            <div className="logo">
                <h1 style={{ color: 'black' }}>Jinxin Ai</h1>
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/skills">Skills</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/work-experience">Work Experience</Link></li>
                    <li><Link to="/education">Education</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
