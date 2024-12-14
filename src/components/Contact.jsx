import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './css/movie.css';

const Contact = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS
    }, []);

    return (
        <div className="contact-page">
            <h1 className="contact-naming">
                <Link to="/" className='home-link'>FILM PALAVER</Link>
            </h1>
            <header className="contact-header" data-aos="fade-down">
                <h1>Contact Us</h1>
                <p>We'd love to hear from you! Reach out to us using the form below.</p>
            </header>

            <section className="contact-container">
                <div className="contact-info" data-aos="fade-right">
                    <h2>Get in Touch</h2>
                    <p>
                        Have questions, suggestions, or just want to chat about movies? Feel free to contact us. Our team is ready to help!
                    </p>
                    <ul>
                        <li><strong>Email:</strong> support@filmpalaver.com</li>
                        <li><strong>Phone:</strong> +123-456-7890</li>
                        <li><strong>Address:</strong> 123 Movie Street, Film City, FC 12345</li>
                    </ul>
                </div>

                <div className="contact-form" data-aos="fade-left">
                    <h2>Send Us a Message</h2>
                    <form>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="Your Name" required />

                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Your Email" required />

                        <label htmlFor="message">Message</label>
                        <textarea id="message" placeholder="Your Message" rows="5" required></textarea>

                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contact;