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
                    <li>Responsibility or achievement 1.</li>
                    <li>Responsibility or achievement 2.</li>
                    <li>Responsibility or achievement 3.</li>
                </ul>
            </div>
            <div className="experience">
                <h3>Fullstack developer</h3>
                <p><strong>TUM</strong> | May 2022 - Oct. 2022</p>
                <p>Group <a href="https://www.ce.cit.tum.de/ldv/startseite/" target="_blank" rel="noopener noreferrer">
                    LDV
                </a></p>
                <ul>
                    <li>Responsibility or achievement 1.</li>
                    <li>Responsibility or achievement 2.</li>
                    <li>Responsibility or achievement 3.</li>
                </ul>
            </div>
            {/* Add more work experience as needed */}
        </section>
    );
};

export default WorkExperience;
