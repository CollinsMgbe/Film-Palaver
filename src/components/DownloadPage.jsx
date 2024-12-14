import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import data from '../consumables/movie';

const DownloadPage = () => {
    const { id } = useParams(); // Get the movie ID from the URL
    const navigate = useNavigate(); // Hook for programmatic navigation
    const movie = data.find((movie) => movie.id === parseInt(id)); // Find the movie by ID

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id])

    if (!movie) {
        return (
            <div className='not-found-page'>
                <h1>Movie not found</h1>
                <button onClick={() => navigate('/')}>Return to Home</button>
            </div>
        )
    }

    // Get related movies (by genre or category)
    const relatedMovies = data.filter(
        (item) => item.genre === movie.genre && item.id !== movie.id);

   

    return (
        <div className="download-page">
            <h1 className="movie-naming">
                <Link to="/" className='home-link'>FILM PALAVER</Link>
            </h1>

                <div className='download-container'>
                    <img 
                        src={movie.imageUrl} 
                        alt={movie.title}
                        className="movie-image animate-fade"
                     />
                <div className='movie-details animate-slide'>
                    <h2>{movie.title}</h2>
                    <p className='movie-description'>{movie.description}</p>
                    <p><strong>Category:</strong> {movie.category}</p>
                    <p><strong>Genre:</strong> {movie.genre}</p>
                    <p><strong>Release Date:</strong> {movie.release_date}</p>
                    <p><strong>Director:</strong> {movie.director}</p>
                    <p><strong>Distributed:</strong> {movie.distributed}</p>
                    <p><strong>Starring:</strong> {movie.starring}</p>
                </div>
            </div>

            {/* Download Button */}
            <button className='download-button animate-bounce'>Start Download</button>
            
            {/* Return to Home Button */}
            <button className='return-home-button' onClick={() => navigate('/')}>Return to Home</button>

            {/* Related Movies Section */}
            <div className='related-movies'>
            <h3>Related Movies</h3>
            <div className='related-container'>
                {relatedMovies.map((relatedMovie) => (
                    <div key={relatedMovie.id} className='related-item animate-zoom'>
                        <img 
                            onClick={() => navigate(`/download/${relatedMovie.id}`)}
                            src={relatedMovie.imageUrl} 
                            alt={relatedMovie.title}
                            className="related-image"
                         />
                            <h3>{relatedMovie.title}</h3>
                            <p><strong>Genre:</strong> {relatedMovie.genre}</p>
                        </div>
                ))}
            </div>
            </div>
        </div>
    );
};

export default DownloadPage;