import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import Tts from 'react-native-tts';

const ListItems = ({ list, setList, handleTriggerEdit}) => {

    const handleDelete = (rowMap, rowKey) => {
        const newList = [...list];
        // 선택된 키와 같은 값 키를 인덱스로 찾아냄
        const listIndex = list.findIndex((line) => line.key === rowKey);
        newList.splice(listIndex, 1);

        AsyncStorage.setItem('storedList', JSON.stringify(newList)).then(() => {
            setList(newList);
        }).catch(error => console.log(error));
    }

    // const readSentence = () => {
    //     Tts.speak();
    // }

    // console.log(list)

    return (
        <>
        {list.length == 0 && <Text style={styles.nothingText}> Try + button to add a sentence you want to remember :) </Text> }
        
        {list.length !== 0 && <SwipeListView
            data={list}
            renderItem={(data) => {
                return (
                    <View style={styles.card}>
                        <>
                            <TouchableOpacity ><Text style={styles.readIcon}>🔊</Text></TouchableOpacity>

                            <Text style={styles.sentence} numberOfLines={1} selectable={true}>{data.item.sentence}</Text>
                        </>
                    </View>


                )


            }}

            renderHiddenItem={(data, rowMap) => {
                return (
                    <View style={styles.swipeHiddenItemContainer}>
                        <TouchableOpacity
                            onPress={() => {handleTriggerEdit(data.item)}}
                        ><View style={[styles.swipeHiddenItem, { backgroundColor: '#0D47A1' }]}>
                                <Text style={styles.swipeHiddenItemText}>Edit</Text>
                            </View></TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => handleDelete(rowMap, data.item.key)}
                        ><View
                            style={[styles.swipeHiddenItem, { backgroundColor: '#B71C1C' }]}>
                                <Text style={styles.swipeHiddenItemText}>Delete</Text>
                            </View></TouchableOpacity>
                    </View>
                )
            }}
            leftOpenValue={70}
            rightOpenValue={-70}
            style={{
                paddingBottom: 550, marginBottom: 100, 
            }}
        />}
        </>
    );

}

const styles = StyleSheet.create({

    card: {
        flex: 1,
        width: '100%',
        height: 50,
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomColor: "#000",
        borderBottomWidth: 0.5,
        backgroundColor: '#f6f6f6',
        paddingLeft: 20
    },

    sentence: {
        flex: 2,
        fontSize: 20,
    },

    readIcon: {
        fontSize: 20,
        marginRight: 10
    },

    swipeHiddenItemContainer: {
        // flex: 1,
        height: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f6f6f6',
        flexDirection: 'row',
    },
    swipeHiddenItem: {
        width: 70,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    swipeHiddenItemText: {
        color: '#f6f6f6',
        fontSize: 14,
    },


    swipedText: {
        color: '#000'
    },

    nothingText: {
        fontSize: 30,
        textAlign: 'center',
        color: '#607D8B'
    },

});

export default ListItems;