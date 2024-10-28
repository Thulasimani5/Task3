import { SafeAreaView, StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react';
import DocumentCard from '../components/DocumentCard';
import BackArrow from '../assets/icons/BackArrow';
import { useNavigation } from '@react-navigation/native';
export default function Folder( ) {
    const navigation = useNavigation();
  return (
    <SafeAreaView>
        <View style={{margin:20}}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackArrow />
        </TouchableOpacity>
                    <Text style={styles.head}>Folder 01</Text>
                </View>
        <Text style={{ top: 10,marginBottom:12 }}> 04 Documents</Text>
                
                <DocumentCard documentName="Document 02" createdOn="12/02/23" />
                <DocumentCard documentName="Document 02" createdOn="12/02/23" />
                <DocumentCard documentName="Document 02" createdOn="12/02/23" />
                <DocumentCard documentName="Document 02" createdOn="12/02/23" />
        </View>
    </SafeAreaView>
  )
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
})