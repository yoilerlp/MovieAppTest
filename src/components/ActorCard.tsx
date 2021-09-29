import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Avatar} from 'react-native-elements';

export type ActorCardProp = {
  firsName: string;
  lastName: string;
};
const actorImg = require('../../actorTest.png');

const ActorCard = ({firsName, lastName}: ActorCardProp) => {
  return (
    <View style={styles.cardContainer}>
      <Avatar rounded source={actorImg} size={60} />
      <Text style={styles.actorNameText}>
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
