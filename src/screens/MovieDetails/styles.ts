import {StyleSheet} from 'react-native';

export default StyleSheet.create({
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
    marginTop: 20,
    paddingHorizontal: 30,
    paddingBottom: 10,
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
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  rowRating: {
    marginBottom: 23,
  },
  rating: {
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
  textDesConatiner: {},
  actorsContainer: {},
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
    minWidth: 50,
  },
  moviSectionValue: {
    fontSize: 13,
    color: 'white',
    opacity: 0.7,
  },
});
