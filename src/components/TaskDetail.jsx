import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FrontArrow from '../assets/icons/FrontArrow'; 

const TaskDetail = ({ title, id, date, status }) => {

  const statusStyles = getStatusStyles(status);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.row}>
          <Text style={styles.id}>ID {id}</Text>
          <Text style={styles.dot}>•</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
      <View style={{flexDirection:'row',top:10}}>
        <View style={[styles.statusBox, statusStyles.box]}>
          <Text style={[styles.statusText, statusStyles.text]}>{status}</Text>
        </View>
        <FrontArrow style={{top:5.5,left:8}} />
      </View>
    </View>
  );
};

const getStatusStyles = (status) => {
  switch (status) {
    case 'Yet to start':
      return {
        box: { backgroundColor: '#FFCCCC' }, 
        text: { color: 'red' },
      };
    case 'In-Progress':
      return {
        box: { backgroundColor: '#FFE0B2' },
        text: { color: 'orange' },
      };
    case 'Completed':
      return {
        box: { backgroundColor: '#C8E6C9' },
        text: { color: 'green' },
      };
    default:
      return {
        box: {},
        text: {},
      };
  }
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: '600',
    fontSize: 14,
    fontFamily:'Poppins-SemiBold'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  id: {
    marginRight: 5,
    fontSize:12,
    fontFamily:'Poppins-Regular',
  },
  dot: {
    marginHorizontal: 3,
    fontSize: 20,
    bottom:2
  },
  date: {
    marginLeft: 4,
    fontSize:12,
    fontFamily:'Poppins-Regular',
  },
  statusBox: {
    paddingHorizontal: 10,
    borderRadius: 7,
    paddingVertical:4.5,
    height:27
  },
  statusText: {
    textAlign: 'center', 
    fontSize:12,
    fontFamily:'Poppins-Regular'
  },
});

export default TaskDetail;
