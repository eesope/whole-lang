import React, { useState, useEffect, useRef } from 'react';
import { Text, View, Button, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator';

import * as  Notifications from 'expo-notifications';
import Constants from 'expo-constants';


export default function App() {

  return (

    <NavigationContainer>
      <StatusBar style='auto' />
      <StackNavigator/>
    </NavigationContainer>

  );

}