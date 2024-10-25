import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import BackArrow from '../assets/icons/BackArrow';
import { SafeAreaView } from 'react-native-safe-area-context';
import FolderCard from '../components/FolderCard'; 

export default function Documents() {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <BackArrow />
                    <Text style={styles.head}>Documents</Text>
                </View>
                <Text style={{ top: 10 }}>04 Folders</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <FolderCard folderName="Folder 01" documentCount={4} />
                    <FolderCard folderName="Folder 02" documentCount={4} />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    head: {
        fontSize: 18,
        fontFamily: 'Poppins-SemiBold',
        color: '#02111A',
        fontWeight: '700',
        marginTop: 5,
        paddingHorizontal: 10,
    },
    container: {
        margin: 20,
    },
});
