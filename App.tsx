/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

//Component
import ExitApp from './src/components/ExitApp/ExitApp';

function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        {/* === Back Button Component === */}
        <ExitApp />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
