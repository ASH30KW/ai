import React from 'react';
import './Home.css';
import logo192 from './logo192.png';

const Home = () => {
    return (
        <div className="home" style={{ backgroundImage: `url(${logo192})` }}>
            <div className="home-content">
                <h1>Hi, I'm Jinxin Ai</h1>
                <p>Aspiring [Your Profession]</p>
                <a href="/resume.pdf" className="btn">Download Resume</a>
            </div>
        </div>
    );
};

export default Home;
