// App.tsx
import React, { useState, useEffect } from 'react';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';
import { Movie } from '../types';
import './App.css';
import axios from 'axios';

const API_KEY = 'f870c988c52fe5fe5bed0c55dd02db68'; // Hier den API-Schlüssel einfügen

const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`
        );
        setMovies(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  const handleMovieClick = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container"><br></br>
      <h1 className="app-title">Movie Search App</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
      </div>
      {loading ? (
        <p>Loading movies...</p>
      ) : (
        <MovieList movies={filteredMovies} onMovieClick={handleMovieClick} />
      )}
      {selectedMovie && (
        <MovieDetails movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      )}
    </div>
  );
};

export default App;
