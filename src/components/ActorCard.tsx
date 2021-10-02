import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Avatar} from 'react-native-elements';
import {useThemeContext} from '../hooks/useThemeContext';
import {ActorCardProp} from '../model/Actor';

const ActorCard = ({firsName, lastName, profile_path}: ActorCardProp) => {
  const {theme} = useThemeContext();
  return (
    <View style={styles.cardContainer}>
      <Avatar rounded source={{uri: profile_path}} size={55} />
      <Text style={[styles.actorNameText, theme]}>
        {firsName}
        {'\n'}
        {lastName}
      </Text>
    </View>
  );
};

export default ActorCard;

const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginRight: 28,
  },
  actorNameText: {
    fontSize: 13,
    lineHeight: 18,
    color: 'white',
    marginTop: 5,
    textAlign: 'center',
  },
});
