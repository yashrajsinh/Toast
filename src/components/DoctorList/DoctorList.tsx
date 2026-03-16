import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  PixelRatio,
  Image,
  RefreshControl,
  StatusBar,
} from 'react-native';
import React, { useState } from 'react';

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
  //for refresh control
  const [refreshing, setRefreshing] = useState(false);
  //use State for refreshing data
  const [doctors, setDoctors] = useState(data);

  //function to handle API
  const onRefresh = () => {
    setRefreshing(true);
    //call API
    setTimeout(() => {
      //refresh DRs here
      setDoctors(data);
      setRefreshing(false);
    }, 2000); // 2 seconds
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.card}>
        {doctors.map((doctor, index) => (
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
