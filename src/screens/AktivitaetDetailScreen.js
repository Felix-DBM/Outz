import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DarkModeContext } from '../../DarkModeContext';

function AktivitaetDetailScreen({ route }) {
  const { isDarkMode } = useContext(DarkModeContext);
  const { activity } = route.params;

  const theme = {
    background: isDarkMode ? '#121212' : '#FFFFFF',
    text: isDarkMode ? '#FFFFFF' : '#000000',
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.text }]}>{activity.title}</Text>
      <Text style={[styles.description, { color: theme.text }]}>{activity.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
  },
});

export default AktivitaetDetailScreen;
