import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { DarkModeContext } from '../../DarkModeContext';
import { useNavigation } from '@react-navigation/native';

function AktivitaetDetailScreen({ route }) {
  const { isDarkMode } = useContext(DarkModeContext);
  const navigation = useNavigation();
  const { activity } = route.params;

  const theme = {
    background: isDarkMode ? '#121212' : '#FFFFFF',
    text: isDarkMode ? '#FFFFFF' : '#000000',
    subText: isDarkMode ? '#AAAAAA' : '#555555',
    buttonBackground: isDarkMode ? '#1e88e5' : '#2196F3',
    buttonText: '#FFFFFF',
    border: isDarkMode ? '#333333' : '#DDDDDD',
    cardBackground: isDarkMode ? '#1e1e1e' : '#f9f9f9',
  };

  const handleAddToCalendar = () => {
    const newEvent = {
      title: activity.title,
      description: activity.description,
      date: new Date().toISOString(),
    };

    navigation.navigate('Kalender', { newEvent });

    Alert.alert('Hinzugefügt', 'Die Aktivität wurde in deinen Kalender eingetragen.');
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={[styles.card, { backgroundColor: theme.cardBackground, borderColor: theme.border }]}>
        <Text style={[styles.title, { color: theme.text }]}>{activity.title}</Text>
        <Text style={[styles.description, { color: theme.subText }]}>{activity.description}</Text>
      </View>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.buttonBackground }]}
        onPress={handleAddToCalendar}
      >
        <Text style={[styles.buttonText, { color: theme.buttonText }]}>In den Kalender eintragen</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  card: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    marginBottom: 30,
    elevation: 2, // leichter Schatten auf Android
    shadowColor: '#000', // Schatten für iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
  },
  button: {
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    elevation: 2,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default AktivitaetDetailScreen;
