import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Platform } from 'react-native';

import Constants from 'expo-constants';
import * as  Notifications from 'expo-notifications';
// This refers to the function defined earlier in this guide, in Push Notifications Set Up
import registerForPushNotificationsAsync from '../RegisterForPushNotificationsAsync';



const Settings = ({navigation, route}) => {

    return (

        <ScrollView style={styles.settingContainer}>

            <TouchableOpacity onPress={()=>{navigation.navigate('ReadMe')}}><View style={styles.menuBox}>
                <Text style={styles.menuText}>👀 Read me</Text>
            </View></TouchableOpacity>

            <TouchableOpacity onPress={()=>{navigation.navigate('Notifications')}}><View style={styles.menuBox}>
                <Text style={styles.menuText}>🔔 Notifications</Text>
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