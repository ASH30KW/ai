import React from 'react';
import './Education.css';

const Education = () => {
    return (
        <section className="education">
            <h2>Education</h2>
            <div className="school">
                <h3>M.Sc Robotics, Cognition, Intelligence</h3>
                <p><strong>TUM</strong> | Oct. 2023 - Present</p>
                <p><strong>Intership:</strong> Geometric Scene Understanding</p>
                <p><strong>Seminar:</strong> Neural Network Design Patterns in Computer Vision</p>
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
