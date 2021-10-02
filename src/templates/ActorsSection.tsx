import React from 'react';
import {View, FlatList, ListRenderItemInfo, StyleSheet} from 'react-native';
import ActorCard from '../components/ActorCard';
import {ActorCardProp} from '../model/Actor';

type ActorSectionProps = {
  ListActors: ActorCardProp[];
};

const ActorsSection = ({ListActors}: ActorSectionProps) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        horizontal
        data={ListActors}
        renderItem={({item}: ListRenderItemInfo<ActorCardProp>) => (
          <ActorCard {...item} />
        )}
        keyExtractor={(actor: ActorCardProp) => String(actor.id)}
      />
    </View>
  );
};

export default ActorsSection;

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 10,
  },
});
