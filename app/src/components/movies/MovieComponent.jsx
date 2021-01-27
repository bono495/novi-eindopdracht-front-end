import React, { useEffect } from 'react';
import { string } from 'prop-types';
import style from './Movies.module.scss';

const MovieCard = (props) => {
  const {
    image, title, plot, releaseState,
  } = props;

  useEffect(() => {
  }, [props]);

  return (
    <div className={style.card}>
      <img src={image} alt="movie banner" className={style.movieImage} />
      <div className={style.text}>
        <h3 className={style.title}>
          {title}
        </h3>
        <p className={style.plot}>
          {plot}
        </p>
        <p className={style.releaseState}>
          <small className="">
            {releaseState}
          </small>
        </p>
      </div>
    </div>
  );
};

MovieCard.defaultProps = {
  title: string,
  releaseState: string,
  image: string,
  plot: string,
};

MovieCard.propTypes = {
  title: string,
  releaseState: string,
  image: string,
  plot: string,
};

export default MovieCard;
