import React from 'react';
import {StyleSheet} from 'react-native';
import {Rating} from 'react-native-elements';
import {useThemeContext} from '../hooks/useThemeContext';

type RatingComponentProps = {
  ratingValue: number;
};

const RatingComponent = ({ratingValue}: RatingComponentProps) => {
  const {colorTheme} = useThemeContext();
  return (
    <Rating
      type="custom"
      imageSize={22}
      readonly
      startingValue={ratingValue}
      tintColor={colorTheme === 'light' ? 'white' : '#2c3848'}
      ratingColor={colorTheme === 'light' ? '#FCD307' : 'orange'}
      style={styles.rating}
      ratingBackgroundColor={colorTheme === 'light' ? 'rgba(0,0,0,.1)' : 'gray'}
    />
  );
};

export default RatingComponent;

const styles = StyleSheet.create({
  rating: {
    margin: 0,
    padding: 0,
    alignItems: 'flex-start',
  },
});
