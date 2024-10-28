import React from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FolderCard = ({ folderName, documentCount }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Folder')} style={styles.card}>
        <View >
            <Image 
                source={require('../assets/images/Folder.png')} 
                style={styles.image} 
                resizeMode="contain" 
            /> 
            <Text style={styles.foldername}>{folderName}</Text>
            <Text>{documentCount} Documents</Text>
        </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 2,
        width: '47%',
        height:104,
        marginVertical: 10,
        paddingHorizontal: 20,
        paddingVertical: 16,
    },
    foldername:{
        color:'#02111A',
        fontWeight:'700',
        fontSize:12,
        marginBottom:4,
    },
    documentname:{
        color:'#4E585E',
        fontSize:12,
        fontWeight:'400'
    },
    image: {
        height: 25,
        width: 25,
        marginBottom:12,
    },
});

export default FolderCard;
