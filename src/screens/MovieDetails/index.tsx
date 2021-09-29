import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Image, Icon, Button, Rating} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import ActorsSection from '../../templates/ActorsSection';

const imgTest = require('../../../imgTest.png');
const hdIcon = require('../../../hdIcon.png');

const MovieDetailsScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.DetailsContainer}>
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
        <Image source={imgTest} style={styles.imgBanner} />
      </View>
      <View style={styles.movieInfContainer}>
        <View style={[styles.rowTitle, styles.horizontalAling]}>
          {/**/}
          <Text style={styles.titleStyle}>Aquaman</Text>
          <Image source={hdIcon} style={styles.iconTitle} />
        </View>
        <View style={[styles.horizontalAling, styles.rowRating]}>
          <Button
            buttonStyle={styles.btnStyles}
            title="WATCH NOW"
            type="solid"
            titleStyle={styles.btnTitle}
          />
          <Rating
            type="custom"
            imageSize={22}
            readonly
            startingValue={3.5}
            tintColor="#2c3848"
            style={styles.rating}
          />
        </View>
        <View>
          <Text style={styles.movieDes}>
            {''}
            In 1985 Maine, lighthouse keeper Thomas Curry rescues Atlanna, the
            queen of the underwater nation of Atlantis, during a storm. They
            eventually fall in love and have a son named Arthur, who is born
            with the power to communicate with marine lifeforms.{' '}
          </Text>
        </View>
        <ActorsSection />
        <View style={styles.movieInf}>
          <View style={styles.movieInfSection}>
            <Text style={styles.movieInfSectionTitle}>Studio</Text>
            <Text style={styles.moviSectionValue}>Warner Bros.</Text>
          </View>
          <View style={styles.movieInfSection}>
            <Text style={styles.movieInfSectionTitle}>Genre</Text>
            <Text style={styles.moviSectionValue}>
              Action, Adventure, Fantasy
            </Text>
          </View>
          <View style={styles.movieInfSection}>
            <Text style={styles.movieInfSectionTitle}>Release</Text>
            <Text style={styles.moviSectionValue}>2018</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MovieDetailsScreen;

const styles = StyleSheet.create({
  DetailsContainer: {
    flex: 1,
    backgroundColor: '#2c3848',
  },
  imgContainer: {
    flex: 0.4,
  },
  imgBanner: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderBottomRightRadius: 17,
    borderBottomLeftRadius: 17,
    //opacity: 0.7,
  },
  iconsContainer: {
    position: 'absolute',
    top: 20,
    width: '100%',
    paddingHorizontal: 30,
    //borderWidth: 1,
    borderColor: 'red',
    opacity: 0.8,
    zIndex: 10,
  },
  horizontalAling: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  movieInfContainer: {
    flex: 0.6,
    padding: 30,
  },
  rowTitle: {},
  iconTitle: {width: 20, height: 20, borderRadius: 5},
  btnStyles: {
    backgroundColor: '#b2b2b2',
    borderRadius: 20,
  },
  btnTitle: {
    fontSize: 11,
    fontWeight: 'bold',
  },
  titleStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  rowRating: {
    marginBottom: 30,
  },
  rating: {
    backgroundColor: 'red',
    margin: 0,
    padding: 0,
    alignItems: 'flex-start',
  },
  movieDes: {
    fontSize: 13,
    lineHeight: 24,
    color: 'white',
    opacity: 0.7,
  },
  movieInf: {
    marginTop: 15,
  },
  movieInfSection: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  movieInfSectionTitle: {
    fontSize: 13,
    color: 'white',
    fontWeight: '900',
    marginRight: 24,
  },
  moviSectionValue: {
    fontSize: 13,
    color: 'white',
    opacity: 0.7,
  },
});
