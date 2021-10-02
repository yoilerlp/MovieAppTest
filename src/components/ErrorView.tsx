import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
type ErorComponentProps = {
  msg: string;
  sub: string;
};

const ErrorView = ({msg, sub}: ErorComponentProps) => {
  return (
    <View style={styles.errorContainer}>
      <Text style={styles.textError}>{msg}</Text>
      <Text style={styles.sub}>{sub}</Text>
    </View>
  );
};

export default ErrorView;

const styles = StyleSheet.create({
  errorContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  textError: {
    fontSize: 25,
    lineHeight: 24,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 15,
  },
  sub: {
    fontSize: 15,
    color: 'red',
  },
});
