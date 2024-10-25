import {  StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'flex-end',
    },
    Shareicon1: {
      backgroundColor: '#d7e3ff',
      padding: 10,
      borderRadius: 10,
      marginRight: 20,
    },
    container1: {
      borderWidth: 1.5,
      borderColor: '#0C356A',
      borderStyle: 'dotted',
      padding: 10,
      borderRadius: 10,
      marginVertical: 20, 
      height: 62,
      width: '100%',
      flexDirection:'row'
    },
    uploadText: {
      fontSize: 16, 
      color: '#02111A', 
      top:10
    },
    receiptBox: {
      height: 100,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f9f9f9',
      marginTop: 5,
    },
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      zIndex:-1
    },
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    checkbox: {
      width: 20,
      height: 20,
      borderRadius: 12, 
      borderWidth: 1.5,
      borderColor: '#D9DBDD',
      marginRight: 10,
    },
    checked: {
      backgroundColor: '#0C356A',
    },
    label: {
      fontSize: 16,
      color: '#02111A'
    },
    modalContainer: {
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 20,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#02111A',
    },
    input:{
      bottom:8
    },
  
    inputContainer: {
      height: 62,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      backgroundColor: '#f9f9f9',
      marginTop: 15,
    },
    
    inputContainer3: {
      height: 60,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      backgroundColor: '#f9f9f9',width:'48%'
    },
     thickLine: {
      height: 0.8, // Thickness of the line
      backgroundColor: '#D9DBDD', 
    },
    inputContainer1: {
      height: 90,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      backgroundColor: '#f9f9f9',
      marginTop: 5,
      zIndex:-1
    },
    rowContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginTop: 20,
    },
    label1: {
      fontSize: 13,
      top:5,
      color: '#4E585E',
    },
    
    label2: {
      fontSize: 13,
      color: '#4E585E',
    },
    required: {
      color: 'red',
    },
    currencyDropdown: {
      justifyContent: 'space-between',
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
      height:60,
      backgroundColor: '#f9f9f9',
      width: '45%', 
    },
    dropdownMenu: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      top:30,
      left:150,
      backgroundColor: '#fff',
      position: 'absolute',
      width: '50%', 
      zIndex: 100,
    },
    dropdownItem: {
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
    },
    button: {
      backgroundColor: '#0C356A',
      padding: 10,
      borderRadius: 5,
      flex: 1,
      marginLeft: 10,
    },
    cancelButton: {
      backgroundColor: '#fff',
      borderColor:'#0C356A',
      borderWidth:1
    },
    buttonText: {
      color: '#fff',
      textAlign: 'center',
    },
    buttonText1: {
      color: '#02111A',
      textAlign: 'center',
    },
    amountInput: {
      width: '48%', 
    },
  });
  
export default styles;