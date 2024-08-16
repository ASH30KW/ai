import React from 'react';
import './Skills.css';

const Skills = () => {
    return (
        <section className="skills">
            <div className="skill">
                <h2>Skills</h2>
                <h3>Computer Vison & Deep learning</h3>
                <p><strong>Gaussian Splatter: </strong> Splatter image</p>
                <p><strong>Diffussion model: </strong>DDIM</p>
                <p><strong>Image Segmentation: </strong> U-Net, Mask R-CNN</p>
                <p><strong>Object Detection: </strong> YOLO, SSD</p>
                <p><strong>Attention: </strong>Attention</p>
                <p><strong>Others: </strong> OpenCV, Pytorch, Tensorflow</p>
            </div>
            <div className="skill">
                <h3>Fullstack Development</h3>
                <p><strong>Frontend: </strong> React, Vue, HTML, CSS, JavaScript</p>
                <p> <strong>Backend: </strong> Node.js, REST APIs</p>
                <p><strong>Others: </strong> Git, GitHub, SQL</p>
            </div>
            <div className="skill">
                <h3>Other Certifications</h3>
                <p><strong>AI Capstone Project with Deep Learning: </strong> <a href="https://www.coursera.org/account/accomplishments/certificate/YMGJS8HDUC7F" target="_blank" rel="noopener noreferrer">
                    Coursera
                </a></p>
                <p><strong>Building Deep Learning Models with TensorFlow: </strong> <a href="https://www.coursera.org/account/accomplishments/certificate/5PSKYULG2JWH" target="_blank" rel="noopener noreferrer">
                    Coursera
                </a></p>
                <p><strong>Deep Neural Networks with PyTorch: </strong> <a href="https://www.coursera.org/account/accomplishments/certificate/PXXUUAQ44LKH" target="_blank" rel="noopener noreferrer">
                    Coursera
                </a></p>
                <p><strong>Introduction to Deep Learning & Neural Networks
                    with Keras: </strong> <a href="https://www.coursera.org/account/accomplishments/certificate/TCNDF6PBB6WR" target="_blank" rel="noopener noreferrer">
                        Coursera
                    </a></p>
                <p><strong>Machine Learning with Python: </strong> <a href="https://www.coursera.org/account/accomplishments/certificate/LPHH98W3PNVW" target="_blank" rel="noopener noreferrer">
                    Coursera
                </a></p>
            </div>
        </section>
    );
};

export default Skills;