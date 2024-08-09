import React from 'react';
import './Projects.css';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>
            <div className="project-grid">
                <div className="project">
                    <h3>Project One</h3>
                    <p>Description of your project and what you achieved.</p>
                    <p><strong>Technologies:</strong> React, Node.js, MongoDB</p>
                    <a href="https://github.com/yourusername/project-one" className="btn">View Code</a>
                    <a href="https://yourproject.com" className="btn">Live Demo</a>
                </div>
                <div className="project">
                    <h3>Project Two</h3>
                    <p>Description of your project and what you achieved.</p>
                    <p><strong>Technologies:</strong> React, Firebase, Bootstrap</p>
                    <a href="https://github.com/yourusername/project-two" className="btn">View Code</a>
                    <a href="https://yourproject.com" className="btn">Live Demo</a>
                </div>
                {/* Add more projects as needed */}
            </div>
        </section>
    );
};

export default Projects;
