import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Topic = ({ title, number }) => 
  {
  const formattedNumber = number < 10 ? `0${number}` : number;

  return (
    <View style={{ flexDirection: 'row' }}>
      <Text style={styles.tex1}>{title}</Text>
      <View style={styles.round}>
        <Text style={styles.tex}>{formattedNumber}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tex1: {
    fontFamily: 'Poppins-Bold',
    color: '#02111A',
    fontSize: 14,
  },
  tex: {
    padding: 2,
    fontSize: 12,
    fontWeight: '600',
    color: '#0C356A',
  },
  round: {
    backgroundColor: '#D7E3FF',
    width: 26,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center', 
    marginLeft: 5,
  },
});

export default Topic;
