import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Tick from '../assets/icons/Tick'; 

const Checkbox = ({ label }) => {
  const [checked, setChecked] = useState(false);

  const toggleCheckbox = () => {
    setChecked(!checked);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.checkbox} onPress={toggleCheckbox}>
        {checked ? (
          <View style={styles.checked}>
            <Tick width={16} height={16} color="#fff" /> 
          </View>
        ) : (
          <View style={styles.unchecked} />
        )}
      </TouchableOpacity>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',marginVertical:13
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#D9DBDD',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    borderRadius:5
  },
  checked: {
    width: 20,
    height: 20,
    backgroundColor: '#0C356A',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:5
  },
  unchecked: {
    width: 20,
    height: 20, 
    backgroundColor: 'transparent',
  },
  label: {
    fontSize: 14,
    color:'#4E585E'
  },
});

export default Checkbox;
