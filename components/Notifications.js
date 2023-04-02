import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, ScrollView, View} from 'react-native';

const Notifications = ({navigation, route}) => {

    useEffect(()=>{
        navigation.setOptions({
            title: 'Notifications',
            headerStyle: {
                backgroundColor: '#f6f6f6',
                height:100
            },
            headerTintColor: '#000',
    
        })
    }, [])

    return (
        <ScrollView>
            <StatusBar style='auto'/>
            <Text style={styles.notiText}>{`
If you set a day and time, 
wholelang will randomly pick a sentence from your list and delivery the sentence a day!
            `}
            </Text>
            <View style={styles.menuBar}><Text style={styles.menuText}>Notifications On/Off</Text></View>
            <View style={styles.menuBar}><Text style={styles.menuText}>Set a day</Text></View>
            <View style={styles.menuBar}><Text style={styles.menuText}>Set a time</Text></View>
        </ScrollView>
    
    );

}


const styles = StyleSheet.create({

    notiText: {
        fontSize: 20,
        marginLeft: 20
    },

    menuBar: {
        padding: 10,
        marginLeft: 10,
    },

    menuText: {
        fontSize: 20
    },

});

export default Notifications;