import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact">
            <h2>Contact Me</h2>
            <form action="https://formspree.io/f/yourformid" method="POST">
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <textarea name="message" placeholder="Your Message" required></textarea>
                <button type="submit" className="btn">Send Message</button>
            </form>
        </section>
    );
};

export default Contact;
