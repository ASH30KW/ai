import React from 'react';
import './Home.css';
import me from './me.jpeg';

const About = () => {
    return (
        <section className="about">
            <h2>About</h2>
            <div className="about-content">
                <img src={me} alt="Me" className="about-image" />
                <div className="about-text">
                    <p>He earned his undergraduate degree in Electrical Engineering and Information Technology from the Technical University of Munich (TUM) and is now pursuing graduate studies in Robotics, Cognition, and Intelligence at TUM. </p>
                    <p>He has a clear career focus on <strong>computer vision </strong> and <strong>deep learning</strong>, driven by a deep passion for these areas. His commitment is reflected in his continuous pursuit of state-of-the-art technologies and his eagerness to learn, research, and apply the latest advancements in the field.</p>
                </div>
            </div>
        </section>
    );
};

export default About;
