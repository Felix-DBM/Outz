import React, { useContext } from 'react';
import { SafeAreaView, Text, StyleSheet, Switch } from 'react-native';
import { DarkModeContext } from '../../DarkModeContext';


function EinstellungenScreen() {
  const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDarkMode ? '#121212' : '#FFFFFF' }]}>
      <Text style={[styles.label, { color: isDarkMode ? '#FFFFFF' : '#000000' }]}>
        Dark Mode {isDarkMode ? 'An' : 'Aus'}
      </Text>
      <Switch
        value={isDarkMode}
        onValueChange={(value) => setIsDarkMode(value)}
        thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
        trackColor={{ false: '#767577', true: '#81b0ff' }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  label: {
    fontSize: 18, 
    marginBottom: 8
  }
});

export default EinstellungenScreen;
