// MovieDetails.tsx
import React from 'react';
import { Movie } from '../types';
import './MovieDetails.css';

interface MovieDetailsProps {
  movie: Movie;
  onClose: () => void;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ movie, onClose }) => {
  const cast = movie.cast || []; // Sichergehen, dass cast definiert ist

  return (
    <div className="movie-details-container">
      <button className="close-button" onClick={onClose}>Close</button>
      <h2 className="movie-title">{movie.title}</h2>
      <div className="movie-info">
        <p><strong>Director:</strong> {movie.director}</p>
        <p><strong>Release Date:</strong> {movie.release_date}</p>
        <p><strong>Rating:</strong> {movie.rating}</p>
        <p><strong>Cast:</strong> {cast.join(', ')}</p> {/* Zugriff auf cast sicherstellen */}
        <p><strong>Description:</strong> {movie.description}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
