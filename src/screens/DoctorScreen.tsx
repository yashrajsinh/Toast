import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function MovieData() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text> Doctor Data </Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
