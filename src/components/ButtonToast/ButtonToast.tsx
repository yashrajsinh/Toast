import { View, Text, TouchableOpacity, ToastAndroid } from 'react-native';
import React from 'react';
{
  /* === This component is responsible for showing a toast msg on the screen
  NOTE: Only works on android devices  */
}
export default function ButtonToast() {
  //Toast message on android
  function showToast() {
    ToastAndroid.show('You are old bro... 🎉', ToastAndroid.LONG);
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TouchableOpacity
        onPress={showToast}
        activeOpacity={0.4}
        style={{
          backgroundColor: '#2196F3',
          paddingVertical: 12,
          paddingHorizontal: 25,
          borderRadius: 8,
        }}
      >
        <Text> Surprise Me !</Text>
      </TouchableOpacity>
    </View>
  );
}
