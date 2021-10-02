import React, {useEffect} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {Image, Icon, Button} from 'react-native-elements';
import {useNavigation, useRoute} from '@react-navigation/native';
import styles from './styles';
import ActorsSection from '../../templates/ActorsSection';
import {useThemeContext} from '../../hooks/useThemeContext';
import Rating from '../../components/Rating';
import {MovieDetailsScreenProps} from '../../navigations/MainStack';
import Loader from '../../components/Loader';
import ErrorView from '../../components/ErrorView';
import {RootState} from '../../store/store';
import {useDispatch, useSelector} from 'react-redux';
import {
  getActorsMovieAction,
  getMovieDetailsAction,
} from '../../store/slices/movieDetails';

const hdIcon = require('../../../hdIcon.png');

const MovieDetailsScreen = () => {
  const {theme, colorTheme} = useThemeContext();
  const navigation = useNavigation();
  const route = useRoute<MovieDetailsScreenProps>();
  const {cast, movieDetails} = useSelector(
    (state: RootState) => state.movieDetails,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieDetailsAction(route.params.id));
    dispatch(getActorsMovieAction(route.params.id));
  }, [dispatch, route.params.id]);

  if (movieDetails.loading) {
    return <Loader sizeIndicator={100} />;
  }

  if (movieDetails.loading) {
    return <ErrorView msg={String(movieDetails.error)} sub="Try it again" />;
  }

  return (
    <View style={[styles.DetailsContainer, theme]}>
      <View style={styles.imgContainer}>
        <View style={[styles.iconsContainer, styles.horizontalAling]}>
          <Icon
            name="long-arrow-alt-left"
            type="font-awesome-5"
            color="white"
            size={20}
            onPress={() => {
              navigation.goBack();
            }}
          />
          <Icon name="heart" type="font-awesome-5" color="white" size={15} />
        </View>
        <Image
          source={{uri: movieDetails.data.backdrop_path}}
          style={styles.imgBanner}
        />
      </View>
      <View style={styles.movieInfContainer}>
        <View style={[styles.rowTitle, styles.horizontalAling]}>
          {/**/}
          <Text style={[styles.titleStyle, theme]}>
            {movieDetails.data?.title}
          </Text>
          <Image source={hdIcon} style={styles.iconTitle} />
        </View>
        <View style={[styles.horizontalAling, styles.rowRating]}>
          <Button
            buttonStyle={[
              styles.btnStyles,
              {
                backgroundColor:
                  colorTheme === 'light' ? 'rgba(0,0,0,0.9)' : '#b2b2b2',
              },
            ]}
            title="WATCH NOW"
            type="solid"
            titleStyle={[styles.btnTitle]}
          />
          <Rating ratingValue={movieDetails.data?.vote_average / 2} />
        </View>
        <ScrollView style={styles.textDesConatiner}>
          <Text style={[styles.movieDes, theme]}>
            {''}
            {movieDetails.data?.overview}{' '}
          </Text>
        </ScrollView>
        <View style={styles.actorsContainer}>
          {cast.loading ? (
            <Loader sizeIndicator={20} />
          ) : (
            <ActorsSection ListActors={cast.actorsList} />
          )}
        </View>
        <View style={styles.movieInf}>
          <View style={styles.movieInfSection}>
            <Text style={[styles.movieInfSectionTitle, theme]}>Studios</Text>
            <Text style={[styles.moviSectionValue, theme]}>
              {movieDetails.data?.production_companies
                .map(p => p.name + ',  ')
                .slice(0, 2)}
            </Text>
          </View>
          <View style={styles.movieInfSection}>
            <Text style={[styles.movieInfSectionTitle, theme]}>Genre</Text>
            <Text style={[styles.moviSectionValue, theme]}>
              {movieDetails.data?.genres.map(g => g.name + ',  ').slice(0, 4)}
            </Text>
          </View>
          <View style={styles.movieInfSection}>
            <Text style={[styles.movieInfSectionTitle, theme]}>Release</Text>
            <Text style={[styles.moviSectionValue, theme]}>
              {new Date(movieDetails.data?.release_date).getFullYear()}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MovieDetailsScreen;
