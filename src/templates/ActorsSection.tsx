import React from 'react';
import {View, FlatList, ListRenderItemInfo, StyleSheet} from 'react-native';
import ActorCard, {ActorCardProp} from '../components/ActorCard';

const ListActors: Array<ActorCardProp> = [
  {
    firsName: 'Jason',
    lastName: 'Momoa',
  },
  {
    firsName: 'Amber',
    lastName: 'Heard',
  },
  {
    firsName: 'Patrick',
    lastName: 'Wilson',
  },
  {
    firsName: 'Nikole',
    lastName: 'Kidman',
  },
];

const ActorsSection = () => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        horizontal
        data={ListActors}
        renderItem={({item}: ListRenderItemInfo<ActorCardProp>) => (
          <ActorCard {...item} />
        )}
        keyExtractor={(actor: ActorCardProp) => actor.firsName}
      />
    </View>
  );
};

export default ActorsSection;

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 13,
  },
});
