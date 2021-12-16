import React from "react";
import { Modal, StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Keyboard } from 'react-native';


const PushSetting = () => {

    return (

        <TouchableOpacity onPress={() => {setModalVisible(true)}}>
            <Text style={styles.pushSettingText}> * </Text>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    pushSettingText: {
        fontSize: 68,
        fontWeight: '700',

    },


});

export default PushSetting;