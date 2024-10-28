// MembersSection.js
import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import styles from '../screens/MetanasStyles';
const MembersSection = ({title, count, toggleModal }) => {
  return (
    <TouchableOpacity onPress={toggleModal} style={[styles.card, { flexDirection: 'row', justifyContent: 'space-between' }]}>
      <Text style={[styles.tex1, { top: 9 }]}>{title}</Text>
      <View style={[styles.imageContainer, { flexDirection: 'row', marginRight: 25 }]}>
        <Image source={require('../assets/images/Boy.png')} style={{ height: 38, width: 38 }} />
        <Image source={require('../assets/images/Boy.png')} style={{ marginLeft: -5, height: 38, width: 38 }} />
        <View style={styles.counterContainer}>
          <Text style={styles.counterText}>+{count}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MembersSection;
