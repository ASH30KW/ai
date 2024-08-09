import React from 'react';
import './Education.css';

const Education = () => {
    return (
        <section className="education">
            <h2>Education</h2>
            <div className="school">
                <h3>Degree Name</h3>
                <p><strong>University Name</strong> | September 2015 - June 2019</p>
                <p>Key coursework or achievements.</p>
            </div>
            <div className="school">
                <h3>Degree Name</h3>
                <p><strong>University Name</strong> | September 2011 - June 2015</p>
                <p>Key coursework or achievements.</p>
            </div>
            {/* Add more education details as needed */}
        </section>
    );
};

export default Education;
