import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
{
  /* ===
  This shows the scroll view to the user rendering data from data.js
  === */
}
export default function DoctorList() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Doctor List</Text>
        <Text style={styles.subtitle}>Available doctors will appear here</Text>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    flexGrow: 1,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
  subtitle: {
    marginTop: 6,
    color: '#666',
  },
});
