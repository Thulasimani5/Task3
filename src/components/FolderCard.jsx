import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const FolderCard = ({ folderName, documentCount }) => {
    return (
        <View style={styles.card}>
            <Image 
                source={require('../assets/images/Folder.png')} 
                style={styles.image} 
                resizeMode="contain" 
            /> 
            <Text>{folderName}</Text>
            <Text>{documentCount} Documents</Text>
        </View>
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
        marginVertical: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    image: {
        height: 25,
        width: 25,
    },
});

export default FolderCard;
