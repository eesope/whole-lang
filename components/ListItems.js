import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import AsyncStorage from '@react-native-async-storage/async-storage';


const ListItems = ({ list, setList, handleTriggerEdit }) => {

    const handleDelete = (rowMap, rowKey) => {
        const newList = [...list];
        // 선택된 키와 같은 값 키를 인덱스로 찾아냄
        const listIndex = list.findIndex((line) => line.key === rowKey);
        newList.splice(listIndex, 1);

        AsyncStorage.setItem('storedList', JSON.stringify(newList)).then(() => {
            setList(newList);
        }).catch(error => console.log(error));

    }

    return (
        <>
        {list.length == 0 && <Text style={styles.nothingText}> Try + button to add a sentence you want to remember :) </Text> }
        {list.length !== 0 && <SwipeListView
            data={list}
            renderItem={(data) => {

                // console.log(data)

                return (
                    <View style={styles.card}>
                        <>
                            {/* <Text style={styles.cardCategory}>{data.item.category}</Text> */}
                            <Text style={styles.cardDesc} numberOfLines={1}>{data.item.sentence}</Text>
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
            previewRowKey={'1'}
            previewOpenValue={70}
            previewOpenDelay={3000}
            style={{
                flex: 1, paddingBottom: 550, marginBottom: 100, 
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

        // 보더 스타일 적용이 안됨
        // borderStyle: 'dashed',
        backgroundColor: '#fff',
        paddingLeft: 20

    },

    cardCategory: {
        flex: 0.5,
        marginLeft: 15,
        fontSize: 20,

    },

    cardDesc: {
        flex: 2,
        // flexDirection: 'column',
        fontSize: 20,


    },

    swipeHiddenItemContainer: {
        // flex: 1,
        height: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        flexDirection: 'row',
    },
    swipeHiddenItem: {
        width: 70,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    swipeHiddenItemText: {
        color: '#fff',
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