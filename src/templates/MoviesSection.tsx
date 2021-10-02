import React, {useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ListRenderItemInfo,
} from 'react-native';
import {ThemeContext, themeContextType} from '../../App';
import Loader from '../components/Loader';
import MovieCard from '../components/MovieCard';
import {Movie} from '../model/Movie';

type MoviesSectionProps = {
  sectionName: string;
  subTitle: string;
  movieState: {
    loading: boolean;
    error: undefined | string;
    movies: Movie[];
  };
};

const MoviesSection = ({
  sectionName,
  subTitle = 'See all',
  movieState,
}: MoviesSectionProps) => {
  const {theme} = useContext<themeContextType>(ThemeContext);
  return (
    <View style={styles.sectionContainer}>
      <View style={styles.sectionTitle}>
        <Text style={[styles.sectionName, theme]}>{sectionName}</Text>
        <Text style={[styles.subTitle, theme]}>{subTitle}</Text>
      </View>
      {movieState.loading ? (
        <Loader sizeIndicator={40} />
      ) : (
        <FlatList
          horizontal
          data={movieState.movies}
          renderItem={({item}: ListRenderItemInfo<Movie>) => (
            <MovieCard movie={item} />
          )}
          keyExtractor={item => String(item.id)}
        />
      )}
    </View>
  );
};

export default MoviesSection;

const styles = StyleSheet.create({
  sectionContainer: {
    borderWidth: 0,
    paddingLeft: 15,
    marginBottom: 20,
  },
  sectionTitle: {
    height: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 8.5,
  },
  sectionName: {
    fontSize: 13,
    color: 'white',
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 13,
    color: 'white',
    opacity: 0.5,
    marginRight: 15,
    alignSelf: 'flex-end',
  },
});
