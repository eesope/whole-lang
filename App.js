import React, { useState, useEffect, useRef } from 'react';
import { Text, View, Button, Platform } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';
import * as  Notifications from 'expo-notifications';
import Constants from 'expo-constants';

import Home from './components/Home';



export default function App() {

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

  <Home 
  list={list}
  setList={setList}
  />

  );

}