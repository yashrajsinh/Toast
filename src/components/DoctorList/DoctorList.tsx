import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  PixelRatio,
  Image,
} from 'react-native';
import React from 'react';

//Data
import data from '../../data/DoctorData';
{
  /* ===
  This shows the scroll view to the user rendering data from data.js
  === */
}
export default function DoctorList() {
  //use of API (PixelRatio)
  const imageSize = PixelRatio.getPixelSizeForLayoutSize(30);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        {data.map((doctor, index) => (
          <View key={index} style={styles.doctorItem}>
            {/* === Resize image using pixel ratio === */}
            <Image
              source={{ uri: doctor.image }}
              style={{
                width: imageSize,
                height: imageSize,
                borderRadius: imageSize / 2,
                marginRight: 12,
              }}
            />
            {/* Text Container */}
            <View>
              <Text style={styles.doctorName}>{doctor.name}</Text>
              <Text style={styles.doctorSpeciality}>{doctor.type}</Text>
            </View>
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
  doctorItem: {
    flexDirection: 'row', // image + text side by side
    alignItems: 'center',
    marginTop: 15,
    paddingBottom: 10,
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
