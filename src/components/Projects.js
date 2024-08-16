import React from 'react';
import './Projects.css';
import gtimage1 from './projects/gsu/jointtraining/gt/image1.gif';
import gtimage2 from './projects/gsu/jointtraining/gt/image2.gif';
import gtimage3 from './projects/gsu/jointtraining/gt/image3.gif';
import gtimage4 from './projects/gsu/jointtraining/gt/image4.gif';

import rotimage1 from './projects/gsu/jointtraining/rot/image1.gif';
import rotimage2 from './projects/gsu/jointtraining/rot/image2.gif';
import rotimage3 from './projects/gsu/jointtraining/rot/image3.gif';
import rotimage4 from './projects/gsu/jointtraining/rot/image4.gif';

import afgtimage1 from './projects/gsu/finetuning/aferfinetuning/gt/image1.gif';
import afgtimage2 from './projects/gsu/finetuning/aferfinetuning/gt/image2.gif';
import afgtimage3 from './projects/gsu/finetuning/aferfinetuning/gt/image3.gif';
import afgtimage4 from './projects/gsu/finetuning/aferfinetuning/gt/image4.gif';

import afrotimage1 from './projects/gsu/finetuning/aferfinetuning/rot/image1.gif';
import afrotimage2 from './projects/gsu/finetuning/aferfinetuning/rot/image2.gif';
import afrotimage3 from './projects/gsu/finetuning/aferfinetuning/rot/image3.gif';
import afrotimage4 from './projects/gsu/finetuning/aferfinetuning/rot/image4.gif';

import cv15 from './projects/cv15/group_15_poster_3D_reconstruction.png';

const Projects = () => {
    const scrollToSection = (e, sectionId) => {
        e.preventDefault(); // Prevent the default anchor behavior
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <section className="projects-container">
            <nav className="toc">
                <ul>
                    <li>
                        <a href="#section1" onClick={(e) => scrollToSection(e, 'section1')}>
                            Geometric Scene Understanding
                        </a>
                    </li>
                    <li>
                        <a href="#section2" onClick={(e) => scrollToSection(e, 'section2')}>
                            3-Dimensional
                            Reconstruction
                            of a Room
                            based on
                            Stereo Images
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="project-grid">
                <div className="project" id="section1">
                    <h3>Geometric Scene Understanding</h3>
                    <p>The goal of this course is to gain practical experience with state-of-the-art computer vision models and implement innovative ideas tackling open real-world challenges.</p>
                    <p><strong>Technologies:</strong> Gaussian splatter, stable diffusion, deep learning</p>
                    <a href="https://github.com/yourusername/project-one" className="btn">View Code</a>
                    <a href="https://yourproject.com" className="btn">Live Demo</a>
                    <table className="training-table">
                        <tbody>
                            <tr>
                                <td className="label-cell">gt</td>
                                <td><img src={gtimage1} alt="gt img 1" /></td>
                                <td><img src={gtimage2} alt="gt img 2" /></td>
                                <td><img src={gtimage3} alt="gt img 3" /></td>
                                <td><img src={gtimage4} alt="gt img 4" /></td>
                            </tr>
                            <tr>
                                <td className="label-cell">rot</td>
                                <td><img src={rotimage1} alt="rot img 1" /></td>
                                <td><img src={rotimage2} alt="rot img 2" /></td>
                                <td><img src={rotimage3} alt="rot img 3" /></td>
                                <td><img src={rotimage4} alt="rot img 4" /></td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="training-table">
                        <tbody>
                            <tr>
                                <td className="label-cell">gt</td>
                                <td><img src={afgtimage1} alt="gt img 1" /></td>
                                <td><img src={afgtimage2} alt="gt img 2" /></td>
                                <td><img src={afgtimage3} alt="gt img 3" /></td>
                                <td><img src={afgtimage4} alt="gt img 4" /></td>
                            </tr>
                            <tr>
                                <td className="label-cell">rot</td>
                                <td><img src={afrotimage1} alt="rot img 1" /></td>
                                <td><img src={afrotimage2} alt="rot img 2" /></td>
                                <td><img src={afrotimage3} alt="rot img 3" /></td>
                                <td><img src={afrotimage4} alt="rot img 4" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="project" id="section2">
                    <h3>Project Two</h3>
                    <p>Description of your project and what you achieved.</p>
                    <p><strong>Technologies:</strong> React, Firebase, Bootstrap</p>
                    <img src={cv15} width="100%" height="100%" />
                </div>
            </div>
        </section>
    );
};

export default Projects;
