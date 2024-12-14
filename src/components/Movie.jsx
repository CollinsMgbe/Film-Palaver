import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import data from '../consumables/movie';
import './css/movie.css';
import StarRating from './StarRating';

const Movie = () => {
    const [movies, setMovies] = useState(data);
    const [filteredMovies, setFilteredMovies] = useState(data);
    const navigate = useNavigate();

    useEffect(() => {
       AOS.init({ duration: 1000 });
    }, [])

    const remove = (id) => {
        const newMovies = filteredMovies.filter((movie) => movie.id !== id);
        setFilteredMovies(newMovies);
    };

    const genre = (genre) => {
        const newMovies = data.filter((movie) => movie.genre === genre);
        setFilteredMovies(newMovies);
    };

    const category = (category) => {
        const newMovies = data.filter((movie) => movie.category === category);
        setFilteredMovies(newMovies);
    };

    const resetFilters = () => {
        setFilteredMovies(data);
    };

    const render = filteredMovies.map((movie, idx) => {
        return (
            <div key={idx}>
                <div className="single-container"
                     data-aos="fade-up"
                     data-aos-delay={idx * 100} >
                    <img src={movie.imageUrl} alt="movie-image" />
                    <h4>Title: {movie.title}</h4>
                    <p>Category: {movie.category}</p>
                    <p>Genre: {movie.genre}</p>
                    <StarRating   
                        initialRating={movie.rating || 5}
                        onRate={(rate) => console.log(`Rated ${movie.title}: ${rate} stars`)}/>
                    <button onClick={() => remove(movie.id)}>x</button>
                    <button onClick={() => navigate(`/download/${movie.id}`)}>Download</button>
                </div>
            </div>
        );
    });

    return (
        <div className="overall-container">
            <h1 className="movie-naming">
                <Link to="/" className='home-link'>FILM PALAVER</Link>
            </h1>
            <h1 className="movie-heading">{filteredMovies.length} Movies Available</h1>
            <div className="movie-display">
                <h4>Genres</h4>
                <button onClick={() => genre('Action')}>Action</button>
                <button onClick={() => genre('Comedy')}>Comedy</button>
                <button onClick={() => genre('Romance')}>Romance</button>
                <button onClick={() => genre('Thriller')}>Thriller</button>

                <h4>Categories</h4>
                <button onClick={() => category('Nollywood')}>Nollywood</button>
                <button onClick={() => category('Hollywood')}>Hollywood</button>
                <button onClick={() => category('Bollywood')}>Bollywood</button>
                <button onClick={() => category('K.Drama')}>K.Drama</button>

                <h4></h4>
                <button onClick={resetFilters}>All Movies</button>
            </div>
            <div className="movie-container">{render}</div>
        </div>
    );
};

export default Movie;