import React from 'react';
import {StyleSheet, Text} from 'react-native';

type counterProps = {
  value: number;
};

const Counter: React.FC<counterProps> = ({value}) => {
  return <Text style={styles.counter}>{value}</Text>;
};
const styles = StyleSheet.create({
  counter: {
    fontSize: 55,
    color: '#dff9fb',
    marginBottom: 20,
  },
});

export default Counter;
