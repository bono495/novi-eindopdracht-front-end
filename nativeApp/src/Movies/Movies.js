import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MovieCard from './MovieCard';

const Movies = () => {
  const [movies, setMovies] = React.useState();

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    fetch('https://imdb-api.com/nl/API/InTheaters/k_oovbykn6')
      .then((response) => response.json())
      .then((res) => {
        setMovies(res.items);
      })
      .catch((res) => {
        console.log(res);
      });
  };

  return (
    <View style={styles.container}>
      <Text>Laatste films</Text>
      {movies
        && movies.map((movie) => (
          <MovieCard
            key={movie.id}
            image={movie.image}
            title={movie.title}
            plot={movie.plot}
          />
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Movies;
