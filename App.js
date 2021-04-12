import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Index from './App/Index';

export default function App() {
  return (
    <View>
     <Index/>
      <StatusBar style="auto" />
    </View>
  );
}


