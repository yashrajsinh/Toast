import { View, Alert, BackHandler } from 'react-native';
import React, { useEffect } from 'react';
{
  /* === 
  This component is responsible for hadning user exit button when user tries to exit the app 
  It'll prompt with 2 buttons asking if they want to exit the app 
  1. Yes 
  2. Cancel 
  === */
}
export default function ExitApp() {
  //use Effect to show back button effect
  useEffect(() => {
    const handleBackPress = () => {
      Alert.alert('Hold on!', 'Do you want to exit the app?', [
        { text: 'Cancel', style: 'cancel' },
        { text: 'YES', onPress: () => BackHandler.exitApp() },
      ]);
      return true; // stop default back action
    };
    BackHandler.addEventListener('hardwareBackPress', handleBackPress);
  }, []);

  return <View />;
}
