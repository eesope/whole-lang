import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, ScrollView, } from 'react-native';

const ReadMe = ({navigation, route}) => {

    useEffect(()=>{
        navigation.setOptions({
            title: 'Read me',
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
            <Text style={styles.guideText}>{`

Hello!

Thank you for using whole-lang!

In whole-lang, You can 

Add a new sentence via + button on home screen.

Swipe a sentence to edit or delete.

Long press a sentence to copy it.

And if you set a notification on a setting screen, whole-lang will send you a sentence randomly among your list once a day.

We're working on a widget function :)

Hope whole-lang could be useful!

In case if you have any inqueries, please let us know through email.
And it would be helpful if you add some informations such as... device model, OS version, etc.

Hope you stay safe and Take care!
        
            `}</Text>
        </ScrollView>
    
    );

}


const styles = StyleSheet.create({

    guideText: {
        fontSize: 15,
        marginLeft: 20
    }

});

export default ReadMe;