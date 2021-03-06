import React, { useState } from "react";
import { Modal, StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Keyboard } from 'react-native';

// React-navigation 의 ModalScreen 을 쓰면 더 깔끔한지 고민 중

const InputModal = ({
    modalVisible, 
    setModalVisible, 
    inputValue, 
    setInputValue,
    handleAddLine,
    lineToBeEdited,
    setLineToBeEdited,
    handleEditLine,
    list
}) => {

    const handleCloseModal = () => {
        setModalVisible(false);
        setInputValue('');
        setLineToBeEdited(null);
    }

    const handleSubmit = () => {
        if (!lineToBeEdited) {
            handleAddLine({
                sentence: inputValue,
                // to make a string use `${}`
                // if the array is not empty(a key(index) count start with 0, so put -1) && check the key of the last element
                // convert it to an integer, +1 to it, return the new value as a string for the new key
                // if the array is empty, current inputValue will be the first line -> () || 1
                key: `${ (list[list.length-1] && parseInt(list[list.length -1].key) + 1) || 1}`
            });
            
            setInputValue('');

        } else {
            handleEditLine({
                sentence: inputValue,
                key: lineToBeEdited.key
            })
        }
        setInputValue('');
    };

    // onChangeText 에 (text) => {setInputValue(text)} 로 함수를 그대로 넣었으나
    // input 이 잘 들어오는지 console.log 로 테스트하기 위해 함수 뺴서 만듬
    const inputText = inputValue => {
        setInputValue(inputValue)
    }


    return (

        <>
            <TouchableOpacity onPress={() => {setModalVisible(true)}}>
                <Text style={styles.addText}> + </Text>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={handleCloseModal}
            >
                <ScrollView style={styles.modalContainer} keyboardShouldPersistTaps={'never'}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalTitle}> Tap ✔️ to add a new sentence. </Text>

                        <TextInput 
                            style={styles.InputBox}
                            placeholder='Type here...'
                            placeholderTextColor={'#f6f6f6'}
                            selectionColor={'#f6f6f6'}
                            autoFocus={true}
                            
                            // onChangeText 에서 setInputValue의 함수 미지정 오류가 있었으나 이중 뷰로 한층 더 감싸니 갑자기 사라짐
                            onChangeText={inputText}
                            value={inputValue}
                            onSubmitEditing={handleSubmit}
                        ></TextInput>

                        <View style={styles.modalActionGroup}>
                            <TouchableOpacity style={styles.modalAction} onPress={handleCloseModal}>
                                <Text style={styles.closeButton}>🔙</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.modalAction} onPress={handleSubmit}>
                                <Text style={styles.closeButton}>✔️</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </ScrollView>

            </Modal>

        </>

    );
}

const styles = StyleSheet.create({
    addText: {
        fontSize: 45,
        fontWeight: '700',
    },

    modalTitle: {
        fontSize: 20,
        fontWeight: '700',
        marginTop: 50
    },

    modalContainer: {
        padding: 20,
        flex: 1,
        backgroundColor: '#f6f6f6'

    },

    modalView: {
        borderRadius: 20,
        justifyContent: 'center',
        padding: 20
    },

    InputBox: {
        width: 300,
        height: 100,
        backgroundColor: '#004dcf',
        marginTop: 50,
        padding: 10,
        fontSize: 16,
        color: '#f6f6f6',
        borderRadius: 10,
        letterSpacing: 1
    
    },

    modalActionGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30
    },

    modalAction: {
        width: 60,
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',

    },

    closeButton: {
        fontSize: 30
    },


});

export default InputModal;