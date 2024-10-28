import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import React from 'react';
import BackArrow from '../assets/icons/BackArrow';
import { SafeAreaView } from 'react-native-safe-area-context';
import FolderCard from '../components/FolderCard'; 
import DocumentCard from '../components/DocumentCard'; 
import { useNavigation } from '@react-navigation/native';

export default function Documents( ) {
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackArrow />
        </TouchableOpacity>
                    <Text style={styles.head}>Documents</Text>
                </View>
                <Text style={{ top: 10,marginBottom:12 }}>04 Folders</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <FolderCard folderName="Folder 01" documentCount={4} />
                    <FolderCard folderName="Folder 02" documentCount={4} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <FolderCard folderName="Folder 03" documentCount={4} />
                    <FolderCard folderName="Folder 04" documentCount={4} />
                </View>
                
                <Text style={{ top: 10,marginBottom:12 }}> 04 Documents</Text>
                
                <DocumentCard documentName="Document 02" createdOn="12/02/23" />
                <DocumentCard documentName="Document 02" createdOn="12/02/23" />
                <DocumentCard documentName="Document 02" createdOn="12/02/23" />
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
