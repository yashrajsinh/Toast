import { View, Text, Button, Share, StyleSheet } from 'react-native';
import React from 'react';

export default function ShareContent() {
  const handleShare = async () => {
    try {
      const result = await Share.share({
        message: 'https://www.logisticinfotech.com/',
        title: 'Awesome company ',
      });

      if (result.action === Share.sharedAction) {
        console.log('Content shared successfully');
      } else if (result.action === Share.dismissedAction) {
        console.log('Share dismissed');
      }
    } catch (error: any) {
      console.error('Error sharing content:', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Share This App</Text>
      <Button title="Share" onPress={handleShare} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
});
