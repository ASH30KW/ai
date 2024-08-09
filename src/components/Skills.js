import React from 'react';
import './Skills.css';

const Skills = () => {
    return (
        <section className="skills">
            <h2>My Skills</h2>
            <div className="skill-set">
                <div className="skill">
                    <h3>Frontend</h3>
                    <ul>
                        <li>React</li>
                        <li>HTML & CSS</li>
                        <li>JavaScript</li>
                    </ul>
                </div>
                <div className="skill">
                    <h3>Backend</h3>
                    <ul>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>REST APIs</li>
                    </ul>
                </div>
                <div className="skill">
                    <h3>Others</h3>
                    <ul>
                        <li>Git & GitHub</li>
                        <li>SQL & NoSQL</li>
                        <li>Agile Methodologies</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Skills;
