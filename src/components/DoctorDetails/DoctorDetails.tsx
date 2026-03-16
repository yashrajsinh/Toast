import {
  View,
  Text,
  Image,
  StyleSheet,
  PixelRatio,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, { useState } from 'react';

export default function DoctorDetails({ doctor }: any) {
  const [loading, setLoading] = useState(false);
  const imageSize = PixelRatio.getPixelSizeForLayoutSize(120);

  const handleBooking = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Alert.alert('Booked! Check your email'); // simple feedback for testing
    }, 1000);
  };

  return (
    <View style={styles.container}>
      {/* Doctor Info */}
      <Image
        source={{ uri: doctor.image }}
        style={[
          styles.image,
          {
            width: imageSize,
            height: imageSize,
            borderRadius: imageSize / 2,
          },
        ]}
      />
      <Text style={styles.name}>{doctor.name}</Text>
      <Text style={styles.type}>{doctor.type}</Text>

      <TouchableOpacity onPress={handleBooking} style={styles.button}>
        <Text style={styles.buttonText}>Book an appointment</Text>
      </TouchableOpacity>

      {/* Full-screen Loader */}
      {loading && (
        <View style={styles.loaderOverlay}>
          <ActivityIndicator size="large" color="#007BFF" />
          <Text style={styles.loaderText}>Loading...</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 60,
  },
  image: {
    borderWidth: 3,
    borderColor: '#fff',
    marginBottom: 20,
  },
  name: {
    fontSize: 26,
    fontWeight: '700',
    color: '#333',
  },
  type: {
    fontSize: 20,
    color: '#777',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  loaderOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderText: {
    color: '#fff',
    marginTop: 10,
    fontSize: 18,
  },
});
