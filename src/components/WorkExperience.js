import React from 'react';
import './WorkExperience.css';

const WorkExperience = () => {
    return (
        <section className="work-experience">
            <div className="experience">
                <h2>Work Experience</h2>
                <h3>Fullstack developer</h3>
                <p><strong>TUM</strong> | May 2023 - Aug. 2024</p>
                <p>Group <a href="https://www.translatum.tum.de/en/translatum/research-groups/miguel-pleitez-translational-optoacoustic/" target="_blank" rel="noopener noreferrer">
                    TOA
                </a></p>
                <ul><strong>Key Responsibilities: </strong></ul>
                <ul>
                    <li><strong>Framework Development: </strong>Designed and built a real-time Microscope Scanning System framework from the ground up, enabling high-performance imaging and analysis.</li>
                    <li><strong>Frontend Implementation: </strong>Developed a user-friendly interface with features such as A-line monitoring and real-time scanning updates, utilizing React, HTML, JavaScript, and CSS.</li>
                    <li><strong>Backend Integration: </strong>Implemented and optimized scanning algorithms to align seamlessly with the frontend, using Django to ensure smooth data processing and interaction.</li>
                    <li><strong>Performance Optimization: </strong>Devised and implemented innovative solutions to significantly enhance the system’s runtime efficiency, resulting in faster and more reliable scanning operations.</li>
                </ul>
            </div>
            <div className="experience">
                <h3>Fullstack developer</h3>
                <p><strong>TUM</strong> | May 2022 - Oct. 2022</p>
                <p>Group <a href="https://www.ce.cit.tum.de/ldv/startseite/" target="_blank" rel="noopener noreferrer">
                    LDV
                </a></p>
                <ul><strong>Key Responsibilities: </strong></ul>
                <ul>
                    <li><strong>Frontend Development: </strong>Designed and developed manual gating interfaces using Vue.js, HTML, JavaScript, and CSS, ensuring a seamless user experience.                    </li>
                    <li><strong>System Integration: </strong>Integrated the frontend and backend components utilizing Docker for containerization and Axios for robust API communication, enabling a microservices architecture.</li>
                    <li><strong>Backend Development: </strong>Implemented advanced image processing algorithms based on machine learning using Python, integrated with Flask for efficient backend operations.</li>
                </ul>
            </div>
            {/* Add more work experience as needed */}
        </section>
    );
};

export default WorkExperience;
