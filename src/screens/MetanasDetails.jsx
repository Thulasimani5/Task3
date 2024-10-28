import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  StatusBar,
  FlatList,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import BackArrow from '../assets/icons/BackArrow';
import DownArrow from '../assets/icons/DownArrow';
import Topic from '../components/Topic';
import Checkbox from '../components/CheckBox';
import Add from '../assets/icons/Add';
import SlideModal from '../components/SlideModal';
import Send from '../assets/icons/Send';
import MembersModal from '../components/MembersModal';
import MembersSection from '../components/MemberSection';
import {addExpense} from '../store/reducers/ExpenseSlice';
import useCommentStore from '../store/CommentStore';
import styles from './MetanasDetailsStyles';
import {useDispatch, useSelector} from 'react-redux';

const MetanasDetails = ({route, navigation}) => {
  const {title, id, date, status} = route.params;

  const dispatch = useDispatch();
  const expenses = useSelector(state => state.expenses?.expenses || []);
  const {comments, addComment} = useCommentStore();

  const [modalVisible, setModalVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [isModalVisible1, setModalVisible1] = useState(false);
  const [comment, setComment] = useState('');

  const defaultComments = [
    {
      username: 'Alice',
      text: 'This is a default comment wedgyqdw uwedg',
      time: '2h ago',
    },
    {username: 'Bob', text: 'This is a default comment 2', time: '1h ago'},
  ];

  React.useEffect(() => {
    if (comments.length === 0) {
      defaultComments.forEach(defaultComment => addComment(defaultComment));
    }
  }, [comments, addComment]);

  const toggleExpanded = () => setExpanded(!expanded);
  const toggleModal = () => setModalVisible(!modalVisible);
  const toggleModal1 = () => setModalVisible1(!isModalVisible1);

  const checkboxLabels = [
    {id: 1, label: 'Accept terms and conditions'},
    {id: 2, label: 'Subscribe to newsletter'},
    {id: 3, label: 'Complete profile setup'},
  ];

  const handleSave = (
    expenseName,
    expenseDate,
    selectedCategory,
    selectedCurrency,
    amount,
    description,
  ) => {
    const newExpense = {
      expenseName,
      expenseDate,
      selectedCategory,
      selectedCurrency,
      amount: Number(amount),
      description,
    };
    dispatch(addExpense(newExpense));
    setModalVisible(false);
  };

  const handleAddComment = () => {
    if (comment.trim()) {
      const newComment = {username: 'User', text: comment, time: 'Just now'};
      addComment(newComment);
      setComment('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#f0f0f0" barStyle="dark-content" />
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackArrow />
        </TouchableOpacity>
        <Text style={styles.head}>{title}</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.tex1}>Task Info</Text>
              <Text style={styles.dot}>•</Text>
              <Text style={{top: 2, left: 2}}>{date}</Text>
            </View>
            <View style={styles.all}>
              <Text style={{fontSize: 12, color: '#0C356A'}}>{status}</Text>
              <DownArrow />
            </View>
          </View>
          <Text style={styles.text1}>Description</Text>
          <Text style={styles.text} numberOfLines={expanded ? 0 : 2}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
            voluptates ea impedit eos, rem sed, quasi odit, fugiat nisi quas
            minima error voluptatem modi et quidem alias sapiente tempora. Sed.
          </Text>
          <TouchableOpacity onPress={toggleExpanded}>
            <Text style={styles.seeMore}>
              {expanded ? 'See Less' : 'See More'}
            </Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
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
          {checkboxLabels.map(item => (
            <View key={item.id}>
              <Checkbox label={item.label} />
              <View style={styles.separator} />
            </View>
          ))}
        </View>
        <View style={styles.card}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Topic title="Log expense" number={expenses.length} />
            <TouchableOpacity onPress={toggleModal}>
              <Add />
            </TouchableOpacity>
          </View>
          <FlatList
            data={expenses}
            renderItem={({item, index}) => (
              <View>
                <View style={styles.expenseCard}>
                  <Text style={styles.expenseText1}>{item.expenseName}</Text>
                  <Text style={styles.dot}>•</Text>
                  <Text style={styles.expenseText}>{item.expenseDate}</Text>
                  <Text style={styles.dot}>•</Text>
                  <Text style={styles.expenseText}>
                    {item.selectedCurrency}
                  </Text>
                  <Text style={styles.expenseText}> {item.amount}</Text>
                </View>
                {index < expenses.length - 1 && (
                  <View style={styles.separator} />
                )}
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <MembersSection title="Users" count="5" toggleModal={toggleModal1} />
        <MembersModal isVisible={isModalVisible1} onClose={toggleModal1} />
        <View style={styles.card}>
          <Text style={styles.tex1}>Comments</Text>
          {comments.map((item, index) => (
            <View style={{flexDirection: 'row', marginTop: 15}} key={index}>
              <Image
                source={require('../assets/images/Boy.png')}
                style={{height: 38, width: 38, top: 4}}
              />
              <View style={{flex: 1, marginLeft: 10}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{fontSize: 14, color: '#02111A', fontWeight: '500'}}>
                    {item.username}
                  </Text>
                  <Text
                    style={{fontSize: 13, color: '#4E585E', fontWeight: '400'}}>
                    {item.time}
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: 13,
                    color: '#4E585E',
                    fontWeight: '400',
                    marginTop: 5,
                  }}>
                  {item.text}
                </Text>
              </View>
            </View>
          ))}
          <TouchableOpacity
            onPress={handleAddComment}
            style={{top: 37, zIndex: 100, left: 280}}>
            <Send />
          </TouchableOpacity>
          <TextInput
            style={styles.card2}
            value={comment}
            onChangeText={setComment}
            placeholder="Add comments"
          />
        </View>

        <SlideModal
          visible={modalVisible}
          onClose={toggleModal}
          onSave={handleSave}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MetanasDetails;
