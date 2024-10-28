import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const DocumentCard = ({ documentName, createdOn }) => {
    return (
        
        <View style={styles.card}>
            <View style={styles.doc}>
                <Image 
                    source={require('../assets/images/Documents.png')} 
                    style={styles.image} 
                    resizeMode="contain" 
                />
            </View>
            <View>
                <Text style={styles.documentName}>{documentName}</Text>
                <Text style={styles.createdOn}>Created on {createdOn}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        height:80,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 2,
        marginVertical: 10,
        paddingHorizontal: 20,
        paddingVertical: 16,
        flexDirection: 'row',
    },
    doc: {
        backgroundColor: '#F0F3F6',
        height: 48,
        width: 48,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginRight:10,
    },
    image: {
        height: 30,
        width: 30,
    },
    documentName: {
        color:'#02111A',
        fontSize:14,
        fontFamily:'Poppins-SemiBold'
    },
    createdOn: {
        color: '#4E585E',
        fontSize:12,
        top:3
    },
});

export default DocumentCard;
