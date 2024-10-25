import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import Calender from '../assets/icons/Calender';
import DownArrow from '../assets/icons/DownArrow';
import Shareicon1 from '../assets/icons/Download';
import styles from './SlideModalStyles';

const entertainmentCategories = ['Movies', 'Games', 'Concerts', 'Events'];
const currencies = ['USD', 'EUR', 'GBP', 'INR'];

const SlideModal = ({ visible, onClose, onSave }) => {
  const [expenseName, setExpenseName] = useState('');
  const [expenseDate, setExpenseDate] = useState('');
  const [selectedEntertainment, setSelectedEntertainment] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [isCategoryDropdownVisible, setCategoryDropdownVisible] = useState(false);
  const [isEntertainmentDropdownVisible, setEntertainmentDropdownVisible] = useState(false);
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [checked, setChecked] = useState(false);

  const resetFields = () => {
    setExpenseName('');
    setExpenseDate('');
    setSelectedEntertainment('');
    setSelectedCurrency('USD');
    setAmount('');
    setDescription('');
    setChecked(false);
  };

  const handleSave = () => {
    if (
      expenseName.trim() !== '' &&
      expenseDate.trim() !== '' &&
      selectedEntertainment !== '' &&
      amount.trim() !== ''
    ) {
      onSave(expenseName, expenseDate, selectedEntertainment, selectedCurrency, amount, description, checked);
      resetFields();
      onClose();
      Alert.alert("Success", "Expense saved successfully!");
    } else {
      Alert.alert("Validation Error", "Please fill in all fields.");
    }
  };

  const handleEntertainmentSelect = (entertainment) => {
    setSelectedEntertainment(entertainment);
    setEntertainmentDropdownVisible(false);
  };

  return (
    <Modal transparent={true} animationType="slide" visible={visible} onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>Create Expense</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.label1}>
              Expense Name <Text style={styles.required}>*</Text>
            </Text>
            <TextInput
              style={styles.input}
              value={expenseName}
              onChangeText={setExpenseName}
              placeholder='Enter your name'
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label1}>
              Date <Text style={styles.required}>*</Text>
            </Text>
            <TextInput
              style={styles.input}
              value={expenseDate}
              onChangeText={setExpenseDate}
            />
            <Calender style={{ bottom: 50, left: 300 }} />
          </View>

          <View style={styles.rowContainer}>
            <TouchableOpacity style={styles.currencyDropdown} onPress={() => setCategoryDropdownVisible(!isCategoryDropdownVisible)}>
              <Text style={styles.label2}>
                Currency <Text style={styles.required}>*</Text>
              </Text>
              <Text>{selectedCurrency}</Text>
              <DownArrow width={34} style={{ left: 110, bottom:30 }} />
            </TouchableOpacity>

            {isCategoryDropdownVisible && (
              <View style={styles.dropdownMenu}>
                {currencies.map((currency, index) => (
                  <TouchableOpacity key={index} onPress={() => { setSelectedCurrency(currency); setCategoryDropdownVisible(false); }} style={styles.dropdownItem}>
                    <Text>{currency}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}

            <View style={styles.inputContainer3}>
              <Text style={styles.label1}>Amount</Text>
              <TextInput
                style={{ bottom: 3 }}
                value={amount}
                onChangeText={setAmount}
                placeholder="Enter Amount"
                keyboardType="numeric"
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label1}>
              Entertainment Category <Text style={styles.required}>*</Text>
            </Text>
            <TouchableOpacity onPress={() => setEntertainmentDropdownVisible(!isEntertainmentDropdownVisible)}>
              <Text>{selectedEntertainment || "Select Category"}</Text>
              <DownArrow width={34} style={{ left: 280, bottom: 20 }} />
            </TouchableOpacity>

            {isEntertainmentDropdownVisible && (
              <View style={styles.dropdownMenu}>
                {entertainmentCategories.map((entertainment, index) => (
                  <TouchableOpacity key={index} onPress={() => handleEntertainmentSelect(entertainment)} style={styles.dropdownItem}>
                    <Text>{entertainment}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>

          <View style={styles.container}>
            <TouchableOpacity onPress={() => setChecked(!checked)} style={styles.checkboxContainer}>
              <View style={[styles.checkbox, checked && styles.checked]} />
              <Text style={styles.label}>Billable</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.inputContainer1}>
            <Text style={styles.label1}>Description</Text>
            <TextInput
              style={styles.input}
              value={description}
              onChangeText={setDescription}
            />
          </View>
          
          <View style={styles.container1}>
            <View style={styles.Shareicon1}>
              <Shareicon1 />
            </View>
            <Text style={styles.uploadText}>Upload Receipt</Text>
          </View>

          <View style={styles.thickLine} />
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={onClose} style={[styles.button, styles.cancelButton]}>
              <Text style={styles.buttonText1}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSave} style={styles.button}>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SlideModal;
