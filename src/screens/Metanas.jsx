import React, { useState } from 'react';
import { SafeAreaView, Text, View, ScrollView, StatusBar, TouchableOpacity, Image } from 'react-native';
import BackArrow from '../assets/icons/BackArrow';
import Topic from '../components/Topic';
import { useNavigation } from '@react-navigation/native';
import TaskDetail from '../components/TaskDetail';
import DownArrow from '../assets/icons/DownArrow';
import MembersModal from '../components/MembersModal';
import FrontArrow from '../assets/icons/FrontArrow';
import DefaultIcon from '../assets/icons/DefaultIcon';
import styles from './MetanasStyles'; 

const Metanas = () => {
  const [count] = useState(5);
  const [expanded, setExpanded] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation(); 
  const percentage = 78;

  const members = [
    { id: 1, name: 'JCB', image: require('../assets/images/Jcb.png') },
    { id: 2, name: 'Asset Name', image: null },
    { id: 3, name: 'John Doe', image: require('../assets/images/Jcb.png') },
    { id: 4, name: 'Another Member', image: null },
  ];

  const tasks = [
    { title: "Wireframes", id: "0212", date: "04/09/23", status: "Yet to start" },
    { title: "Inspection", id: "0213", date: "04/10/23", status: "In-Progress" },
    { title: "Base Layout", id: "0214", date: "04/11/23", status: "Completed" },
  ];

  const toggleExpanded = () => setExpanded(!expanded);
  const toggleModal = () => setModalVisible(!isModalVisible);

  return (
    <SafeAreaView style={{ backgroundColor: '#F0F3F6', flex: 1 }}>
      <StatusBar backgroundColor='#f0f0f0' barStyle={'dark-content'} />
      
      <View style={{ margin: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <BackArrow />
          <Text style={styles.head}>Metanas UI Design</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.card}>
            <Text style={styles.tex1}>Project Info</Text>
            <Text style={[styles.text, { marginVertical: 7 }]}>Description</Text>
            <View>
              <Text style={styles.text6} numberOfLines={expanded ? 0 : 2}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat voluptates ea impedit eos, rem sed, quasi odit, fugiat nisi quas minima error voluptatem modi et quidem alias sapiente tempora. Sed.
              </Text>
              <TouchableOpacity onPress={toggleExpanded}>
                <Text style={styles.seeMore}>{expanded ? "See Less" : "See More"}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <View>
                <Text style={styles.text}>Start date</Text>
                <Text style={styles.text2}>01/09/23</Text>
              </View>
              <View>
                <Text style={styles.text}>End date</Text>
                <Text style={styles.text2}>01/09/23</Text>
              </View>
              <View>
                <Text style={styles.text}>Status</Text>
                <View style={styles.statusContainer}>
                  <View style={styles.statusRow}>
                    <View style={styles.statusBarBackground}>
                      <View style={[styles.statusBarFill, { width: `${percentage}%` }]} />
                    </View>
                    <Text style={styles.percentageText}>{percentage}%</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.card}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Topic title="Task details" number={tasks.length} />
              <View style={styles.all}>
                <Text style={{ fontSize: 12, color: '#0C356A', textAlignVertical: 'center' }}>All</Text>
                <DownArrow />
              </View>
            </View>

            {tasks.map((task, index) => (
              <View key={index}>
                <TouchableOpacity onPress={() => navigation.navigate('MetanasDetails', task)}>
                  <TaskDetail title={task.title} id={task.id} date={task.date} status={task.status} />
                </TouchableOpacity>
                {index < tasks.length - 1 && <View style={styles.line} />}
              </View>
            ))}
          </View>
          
          <TouchableOpacity onPress={toggleModal}>
            <View style={[styles.card, { flexDirection: 'row', justifyContent: 'space-between' }]}>
              <Text style={[styles.tex1, { top: 9 }]}>Members</Text>
              <View style={[styles.imageContainer, { flexDirection: 'row', marginRight: 25 }]}>
                <Image source={require('../assets/images/Boy.png')} style={{ height: 38, width: 38 }} />
                <Image source={require('../assets/images/Boy.png')} style={{ marginLeft: -5, height: 38, width: 38 }} />
                <View style={styles.counterContainer}>
                  <Text style={styles.counterText}>+{count}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <MembersModal isVisible={isModalVisible} onClose={toggleModal} />
          <View style={styles.card}>
            <Text style={styles.tex1}>Assets</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
              {members.map((member) => (
                <View key={member.id} style={{ paddingRight: 12 }}>
                  <View style={styles.img}>
                    {member.image ?  
                      <Image source={member.image} style={styles.memberImage} resizeMode="contain" /> : 
                      <DefaultIcon style={{ left: 29 }} />
                    }
                  </View>
                  <Text style={styles.text3}>{member.name}</Text>
                </View>
              ))}
            </ScrollView>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Documents')}>
          <View style={[styles.card, { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10, marginBottom: 30 }]}>
            <Topic title="Documents" number={26} />
            <FrontArrow style={{ top: 5 }} />
          </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Metanas;
