import React, {useContext} from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Image, Rating} from 'react-native-elements';

import {MoviesStackProp} from '../navigations/MainStack';
import {ThemeContext, themeContextType} from '../../App';
type MovieCardProps = {
  imgURL: string;
  title: string;
  rating: number;
};

const uri =
  'https://ichef.bbci.co.uk/news/640/cpsprodpb/BF0D/production/_106090984_2e39b218-c369-452e-b5be-d2476f9d8728.jpg';

const MovieCard = () => {
  const {theme, colorTheme} = useContext<themeContextType>(ThemeContext);
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
      <Rating
        type="custom"
        imageSize={22}
        readonly
        startingValue={3.5}
        tintColor={colorTheme === 'light' ? 'rgba(0,0,0,.9)' : '#2c3848'}
        style={styles.rating}
        containerStyle={styles.containerRating}
      />
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
  rating: {
    width: '100%',
    margin: 0,
    padding: 0,
    alignItems: 'flex-start',
  },
  containerRating: {},
});