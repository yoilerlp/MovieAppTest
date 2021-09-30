import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Input} from 'react-native-elements';
import MoviesSection from '../../templates/MoviesSection';
import {useThemeContext} from '../../hooks/useThemeContext';

const HomeScreen = () => {
  const {theme, colorTheme} = useThemeContext();
  console.log(theme);
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
        <MoviesSection sectionName="RECOMMENDED FOR YOU" subTitle="See all" />
        <MoviesSection sectionName="TOP RATE" subTitle="See all" />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  HomeContainer: {
    backgroundColor: '#5ca0d3',
    flex: 1,
  },
  searchSection: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontFamily: 'Open Sans',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 26,
    marginBottom: 20,
  },
  moviesSections: {
    flex: 0.7,
    backgroundColor: '#2c3848',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    paddingTop: 20,
  },
  inputStyle: {
    //borderRadius: 60,
    fontSize: 14,
  },
  inputContainerStyle: {
    borderBottomWidth: 0,
    width: '88%',
    height: 40,
    borderRadius: 60,
    //borderWidth: 1.5,
    borderColor: '#707070',
    backgroundColor: 'white',
    opacity: 0.4,
    padding: 15,
  },
  containerStyle: {
    position: 'relative',
    left: 30,
  },
  searchContainer: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
