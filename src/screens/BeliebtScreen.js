import React, { useContext } from 'react';
import { SafeAreaView, Text, StyleSheet, FlatList, View, TouchableOpacity } from 'react-native';
import { DarkModeContext } from '../../DarkModeContext';
import { useNavigation } from '@react-navigation/native';

const popularActivities = [
  {
    title: 'Kino',
    description: 'Genieße aktuelle Filme auf großer Leinwand.',
  },
  {
    title: 'Bowling',
    description: 'Spaß und Wettbewerb auf der Bowlingbahn.',
  },
  {
    title: 'Freizeitpark besuchen',
    description: 'Adrenalin pur auf Achterbahnen und Fahrgeschäften.',
  },
  {
    title: 'Escape Room',
    description: 'Gemeinsam Rätsel lösen und den Ausgang finden.',
  },
  {
    title: 'Lasertag',
    description: 'Actionreiche Teamspiele mit Laserwaffen.',
  },
  {
    title: 'Schwimmen',
    description: 'Entspannung oder Training im Wasser.',
  },
  {
    title: 'Minigolf',
    description: 'Freizeitspaß für Groß und Klein auf dem Minigolfplatz.',
  },
  {
    title: 'Kartfahren',
    description: 'Rasante Runden auf der Kartbahn drehen.',
  },
  {
    title: 'Therme',
    description: 'Wellness und Erholung in warmem Thermalwasser.',
  },
  {
    title: 'Fußball spielen',
    description: 'Organisiere ein Fußballspiel mit Freunden im Park oder auf dem Bolzplatz.',
  },
];

function BeliebtScreen() {
  const { isDarkMode } = useContext(DarkModeContext);
  const navigation = useNavigation();

  const theme = {
    background: isDarkMode ? '#121212' : '#FFFFFF',
    text: isDarkMode ? '#FFFFFF' : '#000000',
    itemBackground: isDarkMode ? '#1e1e1e' : '#f0f0f0',
    border: isDarkMode ? '#555555' : '#CCCCCC',
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.item, { backgroundColor: theme.itemBackground, borderColor: theme.border }]}
      onPress={() => navigation.navigate('AktivitaetDetail', { activity: item })}
    >
      <Text style={[styles.itemTitle, { color: theme.text }]}>{item.title}</Text>
      <Text style={[styles.itemDescription, { color: theme.text }]}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.header, { color: theme.text }]}>Beliebte Aktivitäten</Text>
      <FlatList
        data={popularActivities}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  item: {
    padding: 14,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 12,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  itemDescription: {
    fontSize: 14,
  },
});

export default BeliebtScreen;
