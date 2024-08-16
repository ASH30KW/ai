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

import begtimage1 from './projects/gsu/finetuning/beforefinetuning/gt/image1.gif';
import begtimage2 from './projects/gsu/finetuning/beforefinetuning/gt/image2.gif';
import begtimage3 from './projects/gsu/finetuning/beforefinetuning/gt/image3.gif';
import begtimage4 from './projects/gsu/finetuning/beforefinetuning/gt/image4.gif';

import berotimage1 from './projects/gsu/finetuning/beforefinetuning/rot/image1.gif';
import berotimage2 from './projects/gsu/finetuning/beforefinetuning/rot/image2.gif';
import berotimage3 from './projects/gsu/finetuning/beforefinetuning/rot/image3.gif';
import berotimage4 from './projects/gsu/finetuning/beforefinetuning/rot/image4.gif';

import conclusion from './projects/gsu/conclusion.png';

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
                    <a href="#section1" onClick={(e) => scrollToSection(e, 'section1')}>
                        Geometric Scene Understanding
                    </a>
                </ul>
                <div style={{ marginTop: '1em', marginBottom: '1em' }}></div>
                <ul>
                    <a href="#section2" onClick={(e) => scrollToSection(e, 'section2')}>
                        3-Dimensional
                        Reconstruction
                        of a Room
                        based on
                        Stereo Images
                    </a>
                </ul>
                <div style={{ marginTop: '1em', marginBottom: '1em' }}></div>
                <ul>
                    <a href="#section3" onClick={(e) => scrollToSection(e, 'section3')}>
                        MMOM System Fullstack Development
                    </a>
                </ul>
            </nav>
            <div className="project-grid">
                <div className="project" id="section1">
                    <h3>Geometric Scene Understanding (2024)</h3>
                    <p>The goal of this course is to gain practical experience with state-of-the-art computer vision models and implement innovative ideas tackling open real-world challenges.</p>
                    <p><strong>Technologies:</strong> gaussian splatter, stable diffusion, deep learning</p>
                    <p>This project investigates the generalization potential of models trained using the Gaussian Splatter Method. Two primary scenarios were explored:</p>
                    <ul>
                        <li><strong>Joint Training: </strong>The model was trained jointly on datasets including NMR_Cars, Sofa, and Bench. This training strategy resulted in strong generalization to NMR_Chairs, demonstrating the model's robustness and adaptability across similar but distinct object categories.</li>
                        <li><strong>Fine-tuning Pre-trained Models: </strong> A model pre-trained on SRN_Cars was fine-tuned on Sofa and Bench datasets. This approach also yielded good generalization on NMR_Chairs, showcasing the effectiveness of fine-tuning strategies in enhancing model performance on new categories.</li>
                        <li><strong>Dataset Source: </strong>Shapenet</li>
                    </ul>

                    <h4>Visualizations:</h4>
                    <p>The tables below compare ground truth (GT) images with the corresponding rotated (ROT) images before and after the application of the generalization techniques. These visualizations highlight the model's performance in maintaining consistency across different object categories.</p>

                    <table className="training-table">
                        <tbody>
                            <tr>
                                <td className="label-cell">GT (Joint Training)</td>
                                <td><img src={gtimage1} alt="gt img 1" /></td>
                                <td><img src={gtimage2} alt="gt img 2" /></td>
                                <td><img src={gtimage3} alt="gt img 3" /></td>
                                <td><img src={gtimage4} alt="gt img 4" /></td>
                            </tr>
                            <tr>
                                <td className="label-cell">ROT (Joint Training)</td>
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
                                <td className="label-cell">GT (Before Fine-tuning)</td>
                                <td><img src={begtimage1} alt="gt img 1" /></td>
                                <td><img src={begtimage2} alt="gt img 2" /></td>
                                <td><img src={begtimage3} alt="gt img 3" /></td>
                                <td><img src={begtimage4} alt="gt img 4" /></td>
                            </tr>
                            <tr>
                                <td className="label-cell">ROT (Before Fine-tuning)</td>
                                <td><img src={berotimage1} alt="rot img 1" /></td>
                                <td><img src={berotimage2} alt="rot img 2" /></td>
                                <td><img src={berotimage3} alt="rot img 3" /></td>
                                <td><img src={berotimage4} alt="rot img 4" /></td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="training-table">
                        <tbody>
                            <tr>
                                <td className="label-cell">GT (After Fine-tuning)</td>
                                <td><img src={afgtimage1} alt="gt img 1" /></td>
                                <td><img src={afgtimage2} alt="gt img 2" /></td>
                                <td><img src={afgtimage3} alt="gt img 3" /></td>
                                <td><img src={afgtimage4} alt="gt img 4" /></td>
                            </tr>
                            <tr>
                                <td className="label-cell">ROT (After Fine-tuning)</td>
                                <td><img src={afrotimage1} alt="rot img 1" /></td>
                                <td><img src={afrotimage2} alt="rot img 2" /></td>
                                <td><img src={afrotimage3} alt="rot img 3" /></td>
                                <td><img src={afrotimage4} alt="rot img 4" /></td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>Conclusion:</h4>
                    <ul>
                        <li>Both models (initial training and fine-tuning) struggle when trained on joint categories that are not similar. This is evident from the lower PSNR values when unrelated categories are included. </li>
                        <li>When categories are similar, the accuracy of joint training and fine-tuning improves significantly. This is observed from the higher PSNR values in the cases where related categories (such as nmr_cars, sofa & bench) are used.</li>
                        <li>Using datasets with low relevance for joint training or fine-tuning decreases model performance. For example, the inclusion of less relevant categories like airplane in the initial training set shows a slight drop in PSNR compared to more related categories.</li>
                    </ul>
                    <img src={conclusion} width="100%" height="100%" alt="" />

                </div>
                <div className="project" id="section2">
                    <h3>3-Dimensional
                        Reconstruction
                        of a Room
                        based on
                        Stereo Images (2023)</h3>
                    {/* <p>Description of your project and what you achieved.</p> */}
                    <p><strong>Technologies:</strong> Matlab, Multiview Geometric Reconstruction</p>
                    <img src={cv15} width="100%" height="100%" alt="" />
                </div>
                <div className="project" id="section3">
                    <h3>MMOM System Fullstack Development (2023 to 2024)</h3>
                </div>
            </div>
        </section>
    );
};

export default Projects;
