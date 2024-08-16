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
                <ul>
                    <ul>
                        <li>Designed and developed a custom framework from scratch, ensuring scalability and robustness for complex research applications.</li>
                        <li>Spearheaded the development of the entire frontend, creating a highly efficient and user-friendly interface tailored to researchers' needs.</li>
                        <li>Integrated and optimized backend code from multiple contributors, enhancing system performance and aligning it with project goals.</li>
                        <li>Implemented creative solutions to significantly boost the system's runtime speed, improving overall efficiency and user experience.</li>
                    </ul>
                </ul>
            </div>
            <div className="experience">
                <h3>Fullstack developer</h3>
                <p><strong>TUM</strong> | May 2022 - Oct. 2022</p>
                <p>Group <a href="https://www.ce.cit.tum.de/ldv/startseite/" target="_blank" rel="noopener noreferrer">
                    LDV
                </a></p>
                <ul>
                    <ul>
                        <li>Developed a custom gating method for a web-based platform, optimizing data filtering and selection processes.</li>
                        <li>Implemented seamless data transmission from the backend to the frontend, enabling real-time visualization and plotting of selected data.</li>
                    </ul>
                </ul>
            </div>
            {/* Add more work experience as needed */}
        </section>
    );
};

export default WorkExperience;
