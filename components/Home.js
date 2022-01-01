import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import ListItems from './ListItems';
import InputModal from './InputModal';

import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';


const Home = ({navigation, route}) => {

  const [ready, setReady] = useState(false);

  //initial list of sentences, make array
  const [list, setList] = useState([]);

  // useEffect(() => console.log(list), [list]);

  // load list from the async storage
  const loadList = () => {
    AsyncStorage.getItem('storedList').then(data => {
      if (data !== null) {
        setList(JSON.parse(data))

        // console.log(list)
      }
    }).catch((error) => console.log(error));
  }

  // Modal visibility (default is false, when tapped it will be visible (true) -> pass the value to the inputModal.js via <InputModal/> ) & input value
  const [modalVisible, setModalVisible] = useState(false); 
  const [inputValue, setInputValue] = useState();

  // function to add a new sentence, (take a parameter which is the line coming from the input modal)
  const handleAddLine = () => {

    const newLine = {
      sentence: inputValue,
      key: `${ (list[list.length-1] && parseInt(list[list.length -1].key) + 1) || 1}`
    }

    const newList = [...list, newLine];
 
    AsyncStorage.setItem('storedList', JSON.stringify(newList)).then(() => {
      setList(newList);
      setModalVisible(false);
    }).catch(error => console.log(error));
 
  }

  // Editing

  const [lineToBeEdited, setLineToBeEdited] = useState(null);

  const handleTriggerEdit = (item) => {
    setLineToBeEdited(item);
    setModalVisible(true);
    setInputValue(item.sentence);
  }

  // editedLine is a parameter
  const handleEditLine = (editedLine) => {
    const newList = [...list];
    const lineIndex = list.findIndex((line) => line.key === editedLine.key);
    newList.splice(lineIndex, 1, editedLine);

    AsyncStorage.setItem('storedList', JSON.stringify(newList)).then(() => {
      setList(newList);
      setModalVisible(false);
      setLineToBeEdited(null);
    }).catch(error => console.log(error));

  }


  if (!ready) {
    return(
      <AppLoading
        startAsync={loadList}
        onFinish={() => setReady(true)}
        onError={console.warn}
      />
    )
  }


  return (

    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.box2}>
      
        <InputModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleAddLine={handleAddLine}
          // Adding list(pass the list) to be able to access it in the inputModal file
          list={list}
          lineToBeEdited={lineToBeEdited}
          setLineToBeEdited={setLineToBeEdited}
          handleEditLine={handleEditLine}
        />

        <TouchableOpacity style={styles.settingButton} onPress={()=>{navigation.navigate('Settings')}}>
          <Text style={styles.settingText}> * </Text>
        </TouchableOpacity>

      </View>

      <View style={styles.box3}>
        <Text style={styles.sumNumber}>  {list.length} sentences </Text>
      </View>

        <ListItems
          list={list}
          setList={setList}
          handleTriggerEdit={handleTriggerEdit}
        />



    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#f6f6f6',
  },

  box1: {
    height: 50
  },

  settingText: {
    fontSize: 70,
    fontWeight: '700',
    textAlign: 'right',
    marginRight: 20
  },

  box2: {
    height: 50,
    flexDirection: "row",
    justifyContent: 'space-between',

  },

  searchText: {
    fontSize: 40,
    fontWeight: '700',
    marginLeft: 10
  },

  addText: {
    fontSize: 40,
    fontWeight: '700',
    marginRight: 15
  },

  box3: {
    height: 40,
    marginTop: 10,
    // flexDirection: 'row',
    // justifyContent: 'space-between'
  },

  categoryText: {
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 10,
  },

  sumNumber: {
    fontSize: 20,
    fontWeight: '700',
    marginRight: 10,
    textAlign: 'right'

  },


});

export default Home;