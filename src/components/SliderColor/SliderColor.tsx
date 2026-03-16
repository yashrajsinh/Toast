import Slider from '@react-native-community/slider';
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SliderColor() {
  const [value, setValue] = useState(50); // initial slider value

  // Simple color change: light blue → dark blue
  const getBackgroundColor = () => {
    if (value < 50) return '#87CEFA'; // light blue
    if (value < 80) return '#1E90FF'; // medium blue
    return '#00008B'; // dark blue
  };

  return (
    <View style={[styles.container, { backgroundColor: getBackgroundColor() }]}>
      <Text style={styles.text}>Selected Value: {value}</Text>
      <Slider
        style={{ width: 300, height: 40 }}
        minimumValue={0}
        maximumValue={100}
        step={5}
        value={value}
        minimumTrackTintColor="#1EB1FC"
        maximumTrackTintColor="#d3d3d3"
        thumbTintColor="#1EB1FC"
        onValueChange={val => setValue(val)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
    color: '#fff', // text visible on background
  },
});
