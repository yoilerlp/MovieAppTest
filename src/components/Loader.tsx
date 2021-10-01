import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
type LoaderProps = {
  sizeIndicator: number;
};

const Loader = ({sizeIndicator = 100}: LoaderProps) => {
  return (
    <View style={styles.loaderContainer}>
      <ActivityIndicator size={sizeIndicator} />
    </View>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
export default Loader;
