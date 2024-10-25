import {  StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'flex-end', 
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    body: {
      paddingHorizontal: 20,
      paddingVertical: 15,
    },
    line: {
      height: 1,
      backgroundColor: '#D1D1D1',
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: 8,
      marginVertical: 6,
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderColor: '#D9DBDD',
      borderWidth: 1,
    },
    head: {
      fontSize: 18,
      fontFamily: 'Poppins-SemiBold',
      color: '#02111A',
      fontWeight: '700',
      marginBottom: 25,
    },
    name: {
      fontSize: 14,
      fontFamily: 'Poppins-SemiBold',
      color: '#02111A',
      fontWeight: '600',
    },
    modalContent: {
      backgroundColor: '#fff',
      borderTopEndRadius: 30,
      borderTopLeftRadius: 30,
      width: '100%',
    },
    closeButton: {
      width: '90%',
      paddingHorizontal: 20,
      paddingVertical: 10,
      backgroundColor: 'white',
      borderRadius: 7,
      borderColor: '#0C356A',
      borderWidth: 1,
      alignItems: 'center',
      marginLeft: 20,
      marginTop:15
    },
    closeButtonText: {
      color: '#0C356A',
      fontWeight: '600',
      fontSize: 16,
    },
  });

export default styles;