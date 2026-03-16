import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';

//Data
import data from '../../data/DoctorData';
{
  /* ===
  This shows the scroll view to the user rendering data from data.js
  === */
}
export default function DoctorList() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        {data.map((doctor, index) => (
          <View key={index} style={styles.doctorItem}>
            <Text style={styles.doctorName}> {doctor.name}</Text>
            <Text style={styles.doctorSpeciality}>{doctor.type}</Text>
          </View>
        ))}
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
  doctorItem: {
    marginTop: 15,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  doctorName: {
    fontSize: 16,
    fontWeight: '500',
  },
  doctorSpeciality: {
    color: '#777',
  },
});
