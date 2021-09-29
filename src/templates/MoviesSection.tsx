import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import MovieCard from '../components/MovieCard';

type MoviesSectionProps = {
  sectionName: string;
  subTitle: string;
};

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];


const renderItem = ({item}) => <MovieCard title={item.title} />;

const MoviesSection = ({
  sectionName,
  subTitle = 'See all',
}: MoviesSectionProps) => {
  return (
    <View style={styles.sectionContainer}>
      <View style={styles.sectionTitle}>
        <Text style={styles.sectionName}>{sectionName}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
      <FlatList
        horizontal
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
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
