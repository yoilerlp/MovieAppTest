import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {Input} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';
import MoviesSection from '../../templates/MoviesSection';
import {useThemeContext} from '../../hooks/useThemeContext';
import {RootState} from '../../store/store';
import {
  getPopularMoviesAction,
  getTopRatedMoviesAction,
} from '../../store/slices/moviesSlice';

const HomeScreen = () => {
  const {theme, colorTheme} = useThemeContext();
  const {popularMovies, topRatedMovies} = useSelector(
    (state: RootState) => state.movies,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopRatedMoviesAction());
    dispatch(getPopularMoviesAction());
  }, [dispatch]);

  return (
    <View style={styles.HomeContainer}>
      <View style={styles.searchSection}>
        <View style={styles.searchContainer}>
          <Text style={styles.titleText}>
            Hello, what do you {'\n'}want to watch ?
          </Text>
          <Input
            containerStyle={styles.containerStyle}
            inputStyle={styles.inputStyle}
            inputContainerStyle={styles.inputContainerStyle}
            placeholder="Search"
            leftIcon={{
              type: 'font-awesome5',
              name: 'search',
              color: 'white',
              size: 25,
            }}
          />
          <Text>Theme - {String(colorTheme)}</Text>
        </View>
      </View>
      <View style={[styles.moviesSections, theme]}>
        <MoviesSection
          movieState={popularMovies}
          sectionName="RECOMMENDED FOR YOU"
          subTitle="See all"
        />
        <MoviesSection
          movieState={topRatedMovies}
          sectionName="TOP RATE"
          subTitle="See all"
        />
      </View>
    </View>
  );
};

export default HomeScreen;
