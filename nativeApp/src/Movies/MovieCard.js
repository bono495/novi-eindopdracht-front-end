import React, { useEffect } from 'react';
import { string } from 'prop-types';
import {
  StyleSheet, Text, View, Image
} from 'react-native';

const MovieCard = (props) => {
  useEffect(() => {
  }, [props]);
  const {
    image, title, plot,
  } = props;
  return (
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={{ uri: image }}
      />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{plot}</Text>
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
  title: string,
  image: string,
  plot: string,
};

MovieCard.propTypes = {
  title: string,
  image: string,
  plot: string,
};

export default MovieCard;
