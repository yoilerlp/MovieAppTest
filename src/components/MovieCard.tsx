import React from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Image} from 'react-native-elements';
import {MoviesStackProp} from '../navigations/MainStack';
import {useThemeContext} from '../hooks/useThemeContext';
import Rating from '../components/Rating';
type MovieCardProps = {
  imgURL: string;
  title: string;
  rating: number;
};

const uri =
  'https://ichef.bbci.co.uk/news/640/cpsprodpb/BF0D/production/_106090984_2e39b218-c369-452e-b5be-d2476f9d8728.jpg';

const MovieCard = () => {
  const {theme} = useThemeContext();
  const navigation = useNavigation<MoviesStackProp>();
  return (
    <View style={styles.cardContainer}>
      <Image
        source={{uri: uri}}
        PlaceholderContent={<ActivityIndicator />}
        style={styles.imgStyle}
        onPress={() => {
          navigation.navigate('MovieDetails');
        }}
      />
      <Text style={[styles.titleCard, theme]}>Avenger ENDGAME</Text>
      <Rating ratingValue={3.8} />
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
  },
  titleCard: {
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
