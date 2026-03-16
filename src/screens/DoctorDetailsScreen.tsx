// DoctorDetailsScreen.tsx
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
//Component
import DoctorDetails from '../components/DoctorDetails/DoctorDetails';

export default function DoctorDetailsScreen({ route }: any) {
  const doctor = route?.params?.doctor;

  if (!doctor) return null; // or show fallback UI

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <DoctorDetails doctor={doctor} />
    </SafeAreaView>
  );
}
