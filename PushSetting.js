import React from "react";
import { Modal, StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Keyboard } from 'react-native';


const PushSetting = ({
    settingModalVisible, 
    setSettingModalVisible, 
}) => {

    const handleCloseModal = () => {
        setSettingModalVisible(false);
    }

    return (
        <>

            <TouchableOpacity onPress={() => {setSettingModalVisible(true)}}>
                <Text style={styles.pushSettingText}> * </Text>
            </TouchableOpacity>

            <Modal
            animationType="slide"
            transparent={true}
            visible={settingModalVisible}
            onRequestClose={handleCloseModal}
            >
                <ScrollView style={styles.settingContainer}>

                    <Text style={styles.settingTitle}>Notification Settings</Text>
                    <TouchableOpacity style={styles.modalAction} onPress={handleCloseModal}><Text style={styles.closeButton}>🔚</Text></TouchableOpacity>




                </ScrollView>

            </Modal>

        </>

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


    settingTitle: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '700',
        marginTop: 50
    },

    modalAction: {
        width: 60,
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        marginTop: 10
    },

    closeButton: {
        fontSize: 30
    },



});

export default PushSetting;