import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import './Header.css';

const Header = () => {
    return (
        <header>
            <div className="logo">
                <h1>Jinxin Ai</h1>
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/skills">Skills</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
            <div className="social-icons">
                <a href="https://linkedin.com/in/yourprofile"><FaLinkedin /></a>
                <a href="https://github.com/yourusername"><FaGithub /></a>
                <a href="https://twitter.com/yourusername"><FaTwitter /></a>
            </div>
        </header>
    );
};

export default Header;
