import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
{
  /* ===
    Simple Next page button
    === */
}
export default function NextButton({ onClick }: any) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onClick}
        activeOpacity={0.4}
        style={styles.button}
      >
        <Text style={styles.text}>Next Page!</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  text: {
    fontWeight: '600',
  },
});
