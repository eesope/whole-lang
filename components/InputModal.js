import React, { useState } from "react";
import { Modal, StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Keyboard } from 'react-native';


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
                // category: ,
                sentence: inputValue,
                // to make a string use `${}`
                // if the array is not empty(a key(index) count start with 0, so put -1) && check the key of the last element
                // convert it to an integer, +1 to it, return the new value as a string for the new key
                // if the array is empty, current inputValue will be the first line -> () || 1
                key: `${ (list[list.length-1] && parseInt(list[list.length -1].key) + 1) || 1}`
            });
            
            console.log(inputValue)
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
        // console.log(inputValue)
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
                            placeholderTextColor={'#fff'}
                            selectionColor={'#673AB7'}
                            autoFocus={true}
                            
                            // onChangeText 에서 setInputValue의 함수 미지정 오류가 있었으나 이중 뷰로 한층 더 감싸니 갑자기 사라짐
                            onChangeText={inputText}
                            value={inputValue}
                            onSubmitEditing={handleSubmit}
                        ></TextInput>

                        <View style={styles.modalActionGroup}>
                            <TouchableOpacity style={styles.modalAction} onPress={handleCloseModal}>
                                <Text>🔙</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.modalAction} onPress={handleSubmit}>
                                <Text>✔️</Text>
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
        // justifyContent: 'center',
        // alignItems: 'center',
        flex: 1,
        backgroundColor: '#D1C4E9'

    },

    modalView: {
        // backgroundColor: '#fff',
        borderRadius: 20,
        justifyContent: 'center',
        padding: 20
    },

    InputBox: {
        width: 300,
        height: 100,
        backgroundColor: '#9575CD',
        marginTop: 50,
        padding: 10,
        fontSize: 16,
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


});

export default InputModal;