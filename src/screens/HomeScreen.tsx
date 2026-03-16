import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

//Component
import ButtonToast from '../components/ButtonToast/ButtonToast';
import ExitApp from '../components/ExitApp/ExitApp';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ExitApp />
      <ButtonToast />
    </SafeAreaView>
  );
}
