import React from 'react';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
//Component
import DoctorList from '../components/DoctorList/DoctorList';

export default function MovieData() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <DoctorList />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
