import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import style from './Movies.module.scss';

import MovieCard from './MovieComponent';

const Movies = () => {
  const [movies, setMovies] = useState();
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
    <div className={style.movies}>
      <div className={style.homeButton}>
        <Link to="home"><h3>Terug naar Home</h3></Link>
      </div>
      <h1 className={style.title}>
        Laatste films
      </h1>
      <div className={style.moviesDiv}>
        {
            movies !== undefined
              ? movies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  releaseState={movie.releaseState}
                  image={movie.image}
                  title={movie.title}
                  plot={movie.plot}
                />
              ))
              : error
          }
      </div>
    </div>
  );
};

export default Movies;
