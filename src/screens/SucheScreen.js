import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DarkModeContext } from '../DarkModeContext';

const SucheScreen = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#121212' : '#FFFFFF' }]}>
      <Text style={[styles.text, { color: isDarkMode ? '#FFFFFF' : '#000000' }]}>
        Suche Screen
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});

export default SucheScreen;
