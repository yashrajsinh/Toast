import { StyleSheet, StatusBar, Platform, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import HomeScreen from './src/screens/HomeScreen';
import DoctorScreen from './src/screens/DoctorScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {/* iOS colored status bar workaround */}
        {Platform.OS === 'ios' && (
          <View style={{ height: 44, backgroundColor: 'white' }} />
        )}
        <StatusBar
          barStyle="dark-content"
          translucent={true} // true to show content under
          animated={true}
        />
        <Stack.Navigator>
          {/* Home Screen */}
          <Stack.Screen name="Home" component={HomeScreen} />
          {/* Doctor Screen */}
          <Stack.Screen name="Details" component={DoctorScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
