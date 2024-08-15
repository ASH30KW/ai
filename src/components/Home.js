import React from 'react';
import './Home.css';
import me from './me.jpeg';

const About = () => {
    return (
        <section className="about">
            <h2>About Me</h2>
            <div className="about-content">
                <img src={me} alt="Me" className="about-image" />
                <div className="about-text">
                    <p>I am a passionate [Your Profession] with a background in [Your Background]. I love solving problems and creating impactful solutions. With a strong foundation in [Your Skills/Field], I am eager to contribute to [Industry/Field] and continue growing in this exciting field.</p>
                </div>
            </div>
        </section>
    );
};

export default About;
