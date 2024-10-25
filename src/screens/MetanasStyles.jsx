import {  StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  head: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: '#02111A',
    fontWeight: '700',
    marginTop: 5,
    paddingHorizontal: 10,
  },
    text6:{
      fontSize: 14,
      color: '#4E585E',
      fontFamily:'Poppins-Medium'
    },
    img: {
      height: 80,
      width: 80,
      backgroundColor: '#F0F3F6',
      justifyContent: 'center',
      borderRadius: 5
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
    tex1: {
      fontFamily: 'Poppins-Bold',
      color: '#02111A',
      fontSize: 14,
    },
    all: {
      width: 48,
      height: 24,
      borderRadius: 5,
      borderColor: '#0C356A',
      borderWidth: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
    },
    text: {
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
    text3: {
      fontFamily: 'Poppins-SemiBold',
      color: '#000000',
      fontSize: 12,
      fontWeight: '600',
      marginTop: 10,
    },
    tex2: {
      fontFamily: 'Poppins-Medium',
      color: '#4E585E',
      fontSize: 14,
      fontWeight: '500',
      marginVertical: 10,
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 2,
      marginVertical: 10,
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
    },
    statusContainer: {
      marginTop: 5,
      alignItems: 'flex-start',
    },
    statusRow: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    percentageText: {
      fontSize: 14,
      marginLeft: 10,
      fontWeight: 'bold',
    },
    statusBarBackground: {
      width: 69,
      height: 6,
      backgroundColor: '#CBF2E0',
      borderRadius: 5,
      overflow: 'hidden',
    },
    statusBarFill: {
      height: '100%',
      backgroundColor: '#008545',
      borderRadius: 5,
    },
    line: {
      height: 1,
      backgroundColor: '#E6E6E6',
      marginVertical: 10,
    },
    scrollContainer: {
      paddingVertical: 10,
    },
    text: {
      fontSize: 14,
      color: '#333',
      lineHeight: 20,
    },
    seeMore: {
      color: '#D68200',
      marginTop: 1,
      fontSize: 14,
      fontWeight: 'bold',
    },
    memberImage: {
      height: 80,
      width: 80,
      padding:10,
      resizeMode:'contain',
      borderRadius: 5,
      backgroundColor: '#F0F3F6', 
      alignSelf: 'center',
    },
  });
  
  export default styles;