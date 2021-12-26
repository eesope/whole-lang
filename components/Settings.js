import React from 'react';
import { Modal, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

const Settings = ({navigation, route}) => {

    return (

        <ScrollView style={styles.settingContainer}>

            <TouchableOpacity onPress={()=>{navigation.navigate('ReadMe')}}><View style={styles.menuBox}>
                <Text style={styles.menuText}>👀 Read me</Text>
            </View></TouchableOpacity>

            <TouchableOpacity><View style={styles.menuBox}>
                <Text style={styles.menuText}>🔔 Notification Setting</Text>
            </View></TouchableOpacity>

        </ScrollView>

    );
}

const styles = StyleSheet.create({
    pushSettingText: {
        fontSize: 65,
        fontWeight: '700',
    },

    settingContainer: {
        backgroundColor: '#f6f6f6'
    },

    menuBox: {
        marginTop: 20,
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomColor: "#000",
        borderBottomWidth: 0.5,

    },

    menuText: {
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 10
    },



});

export default Settings;