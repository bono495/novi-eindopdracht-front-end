import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

import './Movies.css';

import MovieCard from './MovieComponent';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    const source = axios.CancelToken.source();

    axios.get('https://imdb-api.com/nl/API/InTheaters/k_oovbykn6', {
      cancelToken: source.token,
    }).then((response) => {
      setMovies(response.data.items);
    }).catch((err) => {
      setError(err.message);
    });

    return () => {
      source.cancel('Component got unmounted');
    };
  }, []);

  return (
    <div className="background h-100 text-center">
      <div className="position-absolute ml-2 mt-2">
        <Button variant="outline-primary" type="button">
          <Link to="home"><h3>Terug naar Home</h3></Link>
        </Button>
      </div>
      <h1 className="pt-5 w-75 mx-auto">
        Laatste films
      </h1>
      <div className="container mt-5 movies-div">
        {
            movies.length > 0
              ? movies.map((movie) => (
                <div key={movie.id.toString()}>
                  <MovieCard movie={movie} />
                </div>
              ))
              : error
          }
      </div>
    </div>
  );
};

export default Movies;
