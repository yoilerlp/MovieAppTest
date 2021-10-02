import {StyleSheet} from 'react-native';

export default StyleSheet.create({
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
