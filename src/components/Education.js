import React from 'react';
import './Education.css';

const Education = () => {
    return (
        <section className="education">
            <h2>Education</h2>
            <div className="school">
                <h3>M.Sc Robotics, Cognition, Intelligence</h3>
                <p><strong>TUM</strong> | Oct. 2023 - Present</p>
                <p>
                    <strong>Internship: </strong>
                    <a href="https://cvg.cit.tum.de/teaching/ss2024/gsu" target="_blank" rel="noopener noreferrer">
                        Geometric Scene Understanding
                    </a>
                </p>

                <p><strong>Seminar: </strong>
                    <a href="https://cvg.cit.tum.de/teaching/ss2024/patterns" target="_blank" rel="noopener noreferrer">
                        Neural Network Design Patterns in Computer Vision
                    </a>
                </p>
            </div>
            <div className="school">
                <h3>B.Sc Electrical Engineering
                    and Information Technology</h3>
                <p><strong>TUM</strong> | Oct. 2019 - Apr. 2023</p>
                <p> <strong>Bachelor Thesis:</strong> Machine Learning Induced Web Interface for Image-Based Cytometry Gating</p>
            </div>
            {/* Add more education details as needed */}
        </section>
    );
};

export default Education;
