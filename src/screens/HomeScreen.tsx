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
      <ButtonToast text={'Show Toast!'} content={'No way !'} />
      {/* === Next BTN with onClick prop === */}
      <NextButton onClick={() => navigation.navigate('Details')} />
    </SafeAreaView>
  );
}
