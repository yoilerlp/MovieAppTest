import React from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Image} from 'react-native-elements';
import {MoviesStackProp} from '../navigations/MainStack';
import {useThemeContext} from '../hooks/useThemeContext';
import Rating from '../components/Rating';
import {Movie} from '../model/Movie';

type MovieCardProps = {
  movie: Movie;
};

const MovieCard = ({movie}: MovieCardProps) => {
  const {theme} = useThemeContext();
  const navigation = useNavigation<MoviesStackProp>();
  return (
    <View style={styles.cardContainer}>
      <Image
        source={{uri: movie.poster_path}}
        PlaceholderContent={<ActivityIndicator />}
        style={styles.imgStyle}
        onPress={() => {
          navigation.navigate('MovieDetails', {id: movie.id});
        }}
      />
      <Text style={[styles.titleCard, theme]}>{movie.title.slice(0, 18)}</Text>
      <Rating ratingValue={movie.vote_average / 2} />
    </View>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  cardContainer: {
    marginRight: 20,
  },
  imgStyle: {
    width: 140,
    height: 160,
    borderRadius: 25,
    marginBottom: 10,
    resizeMode: 'stretch',
  },
  titleCard: {
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
