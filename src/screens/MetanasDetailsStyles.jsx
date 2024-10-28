import {  StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f0f0f0',
      padding: 10,
      margin: 10,
    },
    text: {
      fontSize: 14,
      color: '#4E585E',
      fontFamily:'Poppins-Medium'
    },
    text1: {
      
      fontSize: 12,
      color: '#6A7175',
      fontFamily:'Poppins-Regular'
    },
    seeMore: {
      color: '#D68200',
      fontSize: 14,
      fontWeight: 'bold',
      marginBottom:5
    },
    expenseCountText: { 
      fontSize: 14,
      fontWeight: 'bold',
      marginVertical: 10,
    },
    expenseCard: {
      padding: 10,
      marginTop: 10,
      flexDirection: 'row',
    },
    horizontalLine: {
      height: 1,
      backgroundColor: '#ddd',
      marginVertical: 5,
    },
    expenseText: {
      fontSize: 12,
      color: '#6A7175',
      fontWeight: '400',
      top:2.5
    },
    expenseText1: {
      fontSize: 14,
      color: '#4E585E',
      fontWeight: '600',
    },
    head: {
      fontSize: 18,
      fontWeight: 'bold',
      marginLeft: 10,
      top: 3,
      color: '#02111A',
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 15,
      marginVertical: 10,
      elevation: 0.5,
    },
    
    card2: {
      backgroundColor: '#F0F3F6',
      borderRadius: 30,
      flexDirection:'row',
      paddingHorizontal:10,
      justifyContent:'space-between',
      color: '#6A7175',
       fontSize: 14,
       zIndex:1,
       paddingHorizontal:20
       
    },
    tex1: {
      fontSize: 16,
      fontWeight: 'bold',
      color:'#02111A'
    },
    dot: {
      fontSize: 16,
      marginHorizontal: 5,
    },
    text: {
      fontSize: 14,
      marginVertical: 10,
      fontFamily:'Poppins-Medium'
    },
    tex2: {
      fontSize: 12,
      color: '#6A7175',
      fontFamily:'Poppins-Regular'
    },
    text2: {
      fontSize: 12,
     color: '#4E585E',
     marginTop:5,
     fontFamily:'Poppins-Regular'
    },
    all: {
      width: 100,
      height: 29,
      padding:4,
      borderRadius: 5,
      borderColor: '#0C356A',
      borderWidth: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
    },
    separator: {
      height: 1,
      backgroundColor: '#ddd',
      marginVertical: 1,
    },
    imageContainer: {
      alignItems: 'center',
    },
    counterContainer: {
      position: 'absolute',
      right: -25,
      backgroundColor: '#F0F3F6',
      borderRadius: 20,
      height: 38,
      width: 38,
      justifyContent: 'center',
      alignItems: 'center',
    },
    counterText: {
      color: '#02111A',
      fontSize: 14,
      fontWeight: 'bold',
    },
  });
  export default styles;
  