import React, { useEffect } from 'react';
import PropTypes, { string } from 'prop-types';

const MovieCard = (props) => {
  useEffect(() => {
  }, [props]);

  const { movie } = props;
  return (
    <div className="row mt-4" key={movie.id}>
      <div className="col-12 card pl-0">
        <div className="row no-gutters">
          <div className="col-2">
            <img src={movie.image} alt="movie banner" className="img-fluid rounded " />
          </div>
          <div className="col-10 text-left">
            <div className="card-body">
              <h3 className="card-title">
                {movie.title}
              </h3>
              <p className="card-text">
                {movie.plot}
              </p>
              <p className="card-text">
                <small className="text-muted">
                  {movie.releaseState}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MovieCard.defaultProps = {
  movie: {
    id: string,
    title: string,
    releaseState: string,
    image: string,
    plot: string,
  },
  id: string,
};

MovieCard.propTypes = {
  movie: PropTypes.objectOf(PropTypes.object),
  id: PropTypes.string,
};

export default MovieCard;
