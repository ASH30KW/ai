import React from 'react';
import './WorkExperience.css';

const WorkExperience = () => {
    return (
        <section className="work-experience">
            <h2>Work Experience</h2>
            <div className="experience">
                <h3>Job Title 1</h3>
                <p><strong>Company Name</strong> | January 2020 - Present</p>
                <ul>
                    <li>Responsibility or achievement 1.</li>
                    <li>Responsibility or achievement 2.</li>
                    <li>Responsibility or achievement 3.</li>
                </ul>
            </div>
            <div className="experience">
                <h3>Job Title 2</h3>
                <p><strong>Company Name</strong> | June 2018 - December 2019</p>
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
