import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Image, SafeAreaView } from 'react-native';
import styles  from './MemdersModalStyles';
const MembersModal = ({ isVisible, onClose }) => {
  const members = [
    {
      id: 1,
      name: 'Mohammed',
      email: 'abdul_metanas@gmail.com',
      image: require('../assets/images/Boy.png'),
    },
    {
      id: 2,
      name: 'Sarah',
      email: 'sarah@example.com',
      image: require('../assets/images/Boy.png'),
    },
    {
      id: 3,
      name: 'John',
      email: 'john@example.com',
      image: require('../assets/images/Boy.png'),
    }
  ];

  return (
    <SafeAreaView>
    <Modal transparent={true} visible={isVisible} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.body}>
            <Text style={styles.head}>Members</Text>
            <Text style={{bottom:10}}>0{members.length} Members</Text>
            {members.map((member) => (
              <View key={member.id} style={[styles.card, { flexDirection: 'row' }]}>
                <Image source={member.image} style={{ height: 40, width: 40 }} />
                <View style={{ marginLeft: 20 }}>
                  <Text style={styles.name}>{member.name}</Text>
                  <Text>{member.email}</Text>
                </View>
              </View>
            ))}
          </View>
          <View style={styles.line}></View>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
    </SafeAreaView>
  );
};

export default MembersModal;
