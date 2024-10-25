import React, { useState } from 'react';
import { SafeAreaView, Text, View, Image, StatusBar, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import BackArrow from '../assets/icons/BackArrow';
import DownArrow from '../assets/icons/DownArrow';
import Topic from '../components/Topic';
import Checkbox from '../components/CheckBox';
import Add from '../assets/icons/Add';
import SlideModal from '../components/SlideModal';
import Send from '../assets/icons/Send';
import styles from './MetanasDetailsStyles';

const MetanasDetails = ({ route, navigation }) => {
  const { title, id, date, status } = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [expenses, setExpenses] = useState([]);
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => setExpanded(!expanded);

  const handleSave = (expenseName, expenseDate, selectedCategory, selectedCurrency, amount, description) => {
    const newExpense = { expenseName, expenseDate, selectedCategory, selectedCurrency, amount, description };
    setExpenses([...expenses, newExpense]);
    setModalVisible(false);
  };

  const toggleModal = () => setModalVisible(!modalVisible);

  const checkboxLabels = [
    { id: 1, label: 'Accept terms and conditions' },
    { id: 2, label: 'Subscribe to newsletter' },
    { id: 3, label: 'Complete profile setup' },
    { id: 4, label: 'Complete profile setup' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#f0f0f0' barStyle='dark-content' />
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackArrow />
        </TouchableOpacity>
        <Text style={styles.head}>{title}</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.tex1}>Task Info</Text>
              <Text style={styles.dot}>•</Text>
              <Text style={{ top: 2, left: 2 }}>{date}</Text>
            </View>
            <View style={styles.all}>
              <Text style={{ fontSize: 12, color: '#0C356A' }}>{status}</Text>
              <DownArrow />
            </View>
          </View>
          <Text style={styles.text1}>Description</Text>
          <Text style={styles.text} numberOfLines={expanded ? 0 : 2}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat voluptates ea impedit eos, rem sed, quasi odit, fugiat nisi quas minima error voluptatem modi et quidem alias sapiente tempora. Sed.
          </Text>
          <TouchableOpacity onPress={toggleExpanded}>
            <Text style={styles.seeMore}>{expanded ? 'See Less' : 'See More'}</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
              <Text style={styles.tex2}>ID</Text>
              <Text style={styles.text2}>ID {id}</Text>
            </View>
            <View>
              <Text style={styles.tex2}>Type</Text>
              <Text style={styles.text2}>General</Text>
            </View>
            <View>
              <Text style={styles.tex2}>Priority</Text>
              <Text style={styles.text2}>Medium</Text>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <Topic title="Check list" number={checkboxLabels.length} />
          {checkboxLabels.map((item) => (
            <View key={item.id}>
              <Checkbox label={item.label} />
              <View style={styles.separator} />
            </View>
          ))}
        </View>
        <View style={styles.card}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Topic title="Log expense" number={expenses.length} />
            <TouchableOpacity onPress={toggleModal}>
              <Add />
            </TouchableOpacity>
          </View>
          <FlatList
            data={expenses}
            renderItem={({ item, index }) => (
              <View>
                <View style={styles.expenseCard}>
                  <Text style={styles.expenseText1}>{item.expenseName}</Text>
                  <Text style={styles.dot}>•</Text>
                  <Text style={styles.expenseText}>{item.expenseDate}</Text>
                  <Text style={styles.dot}>•</Text>
                  <Text style={styles.expenseText}>{item.selectedCurrency}</Text>
                  <Text style={styles.expenseText}>{item.amount}</Text>
                </View>
                {index < expenses.length - 1 && <View style={styles.separator} />}
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <View style={[styles.card, { flexDirection: 'row', justifyContent: 'space-between' }]}>
          <Text style={[styles.tex1, { top: 9 }]}>Users</Text>
          <View style={[styles.imageContainer, { flexDirection: 'row', marginRight: 25 }]}>
            <Image source={require('../assets/images/Boy.png')} style={{ height: 38, width: 38 }} />
            <Image source={require('../assets/images/Boy.png')} style={{ marginLeft: -5, height: 38, width: 38 }} />
            <View style={styles.counterContainer}>
              <Text style={styles.counterText}>+{5}</Text>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.tex1}>Comments</Text>
          {Array(2).fill().map((_, index) => (
            <View style={{ flexDirection: 'row', marginTop: 15 }} key={index}>
              <Image source={require('../assets/images/Boy.png')} style={{ height: 38, width: 38, top: 10 }} />
              <View>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ fontSize: 14, color: '#02111A', fontWeight: '500', marginLeft: 10 }}>Hamza</Text>
                  <Text style={{ fontSize: 13, color: '#4E585E', fontWeight: '400', marginLeft: 170 }}>1 day ago</Text>
                </View>
                <Text style={{ fontSize: 13, color: '#4E585E', fontWeight: '400', marginLeft: 10, marginTop: 5 }}>hatrum guywec gycoqcwv cgiycqw ygcoqwgvc bciqwvswd v cvwcv.</Text>
              </View>
            </View>
          ))}
          <View style={styles.card2}>
            <Text style={{ color: '#6A7175', fontSize: 14, left: 10 }}>Add comments</Text>
            <Send />
          </View>
        </View>
        <SlideModal visible={modalVisible} onClose={toggleModal} onSave={handleSave} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MetanasDetails;
