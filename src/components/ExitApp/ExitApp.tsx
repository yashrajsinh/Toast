import { View, Text, Alert, BackHandler } from 'react-native';
import React, { useEffect } from 'react';

export default function ExitApp() {
  //use Effect to show back button effect
  useEffect(() => {
    const backAction = () => {
      //Show alert while user tries to exit
      Alert.alert('Hold on!', 'Do you want to exit the app?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {
          //Exit app when yes presed
          text: 'YES',
          onPress: () => BackHandler.exitApp(),
        },
      ]);
      return true;
    };
    //add listener on BackHandler
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
  });
  return <View></View>;
}
