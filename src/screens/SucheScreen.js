import React, { useContext } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { DarkModeContext } from '../../DarkModeContext';


function SucheScreen() {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDarkMode ? '#121212' : '#FFFFFF' }]}>
      <Text style={[styles.text, { color: isDarkMode ? '#FFFFFF' : '#000000' }]}>
        Suche Screen
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  text: {
    fontSize: 18
  }
});

export default SucheScreen;
