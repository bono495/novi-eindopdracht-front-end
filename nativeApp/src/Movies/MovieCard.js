import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, Text, View, Image
} from 'react-native';

const MovieCard = (props) => {
  useEffect(() => {
    console.log(props);
    return () => {
      console.log('unmount');
      return null;
    };
  });
  const { movie } = props;
  return (
    <View style={styles.card} key={movie.id.toString()}>
      <Image
        style={styles.image}
        source={{ uri: movie.image }}
      />
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.text}>{movie.plot}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 12,
    width: '80%',
    height: 100,
    padding: 12,
    borderRadius: 8,
    color: '#666',
    backgroundColor: '#eaeaea',
  },
  image: {
    width: 50,
    height: 80,
  },
  title: {
    top: -80,
    left: 60
  },
  text: {
    top: -70,
    left: 60,
    width: '85%',
    height: 40
  }
});

MovieCard.defaultProps = {
  movie: {},
};

MovieCard.propTypes = {
  movie: PropTypes.objectOf(PropTypes.object),
};

export default MovieCard;
