import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from "aos"
import  "aos/dist/aos.css"
import './css/movie.css';

const About = () => {
    useEffect (() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="about-page">
            <h1 className="about-naming">
                <Link to="/" className='home-link'>FILM PALAVER</Link>
            </h1>
            <header className="about-header" data-aos="fade-down">
                <h1>About FILM PALAVER</h1>
                <p>Your ultimate destination for movies, reviews, and downloads!</p>
            </header>

            <section className="about-content">
                <div className="about-description" data-aos="fade-right" data-aos-delay="200">
                    <h2>Who We Are</h2>
                    <p>
                        FILM PALAVER is your one-stop platform for exploring a vast collection
                        of movies from various genres and categories. Whether you’re a fan of
                        thrilling action, heartwarming romance, hilarious comedies, or edge-of-your-seat
                        thrillers, we have something for everyone.
                    </p>
                </div>

                <div className="about-features" data-aos="fade-left" data-aos-delay="400">
                    <h2>What We Offer</h2>
                    <ul>
                        <li>Curated lists of top-rated movies from Hollywood, Bollywood, Nollywood, and K-Dramas.</li>
                        <li>Download your favorite movies directly with just a click.</li>
                        <li>Filter movies by genre and category to find exactly what you’re looking for.</li>
                        <li>Stay up-to-date with the latest movie reviews and trends.</li>
                    </ul>
                </div>
            </section>

            <section className="about-cta" data-aos="zoom-in" data-aos-delay="600">
                <h2>Join the FILM PALAVER Community</h2>
                <p>
                    Discover, review, and download movies that match your taste. Start your journey with us today and make movie nights unforgettable!
                </p>
                <button onClick={() => window.location.href = '/'}>Explore Movies</button>
            </section>
        </div>
    );
};

export default About;