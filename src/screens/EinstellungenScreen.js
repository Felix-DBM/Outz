import React, { useContext } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { DarkModeContext } from '../DarkModeContext';

const EinstellungenScreen = () => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#121212' : '#FFFFFF' }]}>
      <Text style={[styles.text, { color: isDarkMode ? '#FFFFFF' : '#000000' }]}>
        {isDarkMode ? 'Dark Mode' : 'Light Mode'}
      </Text>
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleDarkMode}
        value={isDarkMode}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default EinstellungenScreen;
