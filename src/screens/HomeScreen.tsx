import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

//Component
import ButtonToast from '../components/ButtonToast/ButtonToast';
import ExitApp from '../components/ExitApp/ExitApp';
import NextButton from '../components/NextButton/NextButton';

export default function HomeScreen({ navigation }: any) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ExitApp />
      <ButtonToast />
      <NextButton onClick={() => navigation.navigate('Details')} />
    </SafeAreaView>
  );
}
