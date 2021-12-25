import React from 'react';
import { Modal, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import ReadMe from './ReadMe';


const Settings = ({
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

                    <Text style={styles.settingTitle}>Settings</Text>
                    <TouchableOpacity style={styles.modalAction} onPress={handleCloseModal}><Text style={styles.closeButton}>🔚</Text></TouchableOpacity>

                    <TouchableOpacity onPress={ReadMe}><View style={styles.menuBox}>
                        <Text style={styles.menuText}>👀 Read me</Text>
                    </View></TouchableOpacity>

                    <TouchableOpacity><View style={styles.menuBox}>
                        <Text style={styles.menuText}>🔔 Notification Setting</Text>
                    </View></TouchableOpacity>

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
        marginTop: 10,
        marginBottom: 30
    },

    closeButton: {
        fontSize: 30,
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