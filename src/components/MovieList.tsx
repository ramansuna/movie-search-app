// MovieList.tsx
import React from 'react';
import { Movie } from '../types';
import './MovieList.css';

interface MovieListProps {
  movies: Movie[];
  onMovieClick: (movie: Movie) => void;
}

const MovieList: React.FC<MovieListProps> = ({ movies, onMovieClick }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-item" onClick={() => onMovieClick(movie)}>
          <h3 className="movie-title">{movie.title}</h3>
          <div className="movie-details">
            <span className="release-date">{movie.release_date}</span>
            <span className="rating">{movie.rating}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
