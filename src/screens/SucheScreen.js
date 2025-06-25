import React, { useContext, useState } from 'react';
import { SafeAreaView, Text, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { DarkModeContext } from '../../DarkModeContext';
import { useNavigation } from '@react-navigation/native';

const activities = [
  { title: 'Basketball spielen', description: 'Spiele Basketball mit Freunden auf einem öffentlichen Platz.' },
  { title: 'Biergarten besuchen', description: 'Genieße ein kühles Getränk in geselliger Runde im Biergarten.' },
  { title: 'Billard spielen', description: 'Zeige deine Treffsicherheit bei einer Partie Billard.' },
  { title: 'Boulderhalle', description: 'Teste deine Kletterfähigkeiten in einer Boulderhalle.' },
  { title: 'Bowling', description: 'Verbringe einen lustigen Abend beim Bowling.' },
  { title: 'Boot fahren', description: 'Miete ein Boot und genieße Zeit auf dem Wasser.' },
  { title: 'Escape Room', description: 'Löse spannende Rätsel und entkomme gemeinsam dem Escape Room.' },
  { title: 'Fahrradtour', description: 'Erkunde die Umgebung bei einer gemütlichen Fahrradtour.' },
  { title: 'Freizeitpark besuchen', description: 'Adrenalin und Spaß bei Achterbahnen und Shows.' },
  { title: 'Fußball spielen', description: 'Organisiere ein kleines Fußballspiel mit Freunden.' },
  { title: 'Geocaching', description: 'Gehe auf digitale Schatzsuche in deiner Umgebung.' },
  { title: 'Grillabend', description: 'Verbringe einen entspannten Grillabend im Freien.' },
  { title: 'Hallenbad besuchen', description: 'Schwimmen und entspannen im Hallenbad.' },
  { title: 'Indoor-Spielplatz', description: 'Ideal für Kinder – Spiel und Spaß in der Halle.' },
  { title: 'Joggen im Park', description: 'Starte deinen Tag mit einer Laufrunde im Grünen.' },
  { title: 'Kartfahren', description: 'Gib Gas auf der Kartbahn und fahre Bestzeiten.' },
  { title: 'Kino', description: 'Genieße aktuelle Filme auf der großen Leinwand.' },
  { title: 'Klettergarten', description: 'Abenteuer und Höhenluft im Klettergarten.' },
  { title: 'Klettern', description: 'Trainiere Kraft und Technik an der Kletterwand.' },
  { title: 'Lasertag', description: 'Taktik und Action beim Lasertag mit Freunden.' },
  { title: 'Minigolf', description: 'Teste dein Geschick auf dem Minigolfplatz.' },
  { title: 'Museum besuchen', description: 'Lerne Neues und entdecke Ausstellungen.' },
  { title: 'Open-Air-Konzert', description: 'Musik genießen unter freiem Himmel.' },
  { title: 'Paintball', description: 'Teamspaß und Action beim Paintball spielen.' },
  { title: 'Picknick im Park', description: 'Verbringe Zeit mit Freunden bei einem Picknick.' },
  { title: 'Planetarium besuchen', description: 'Sterne und Planeten hautnah erleben.' },
  { title: 'Schlittschuhlaufen', description: 'Drehe Runden auf dem Eis.' },
  { title: 'Schwimmen', description: 'Abkühlung und Spaß im Freibad oder See.' },
  { title: 'Segeln', description: 'Erlebe Wind und Wasser beim Segeln.' },
  { title: 'Skatepark besuchen', description: 'Tricks und Stunts auf dem Skateboard.' },
  { title: 'Sternwarte besuchen', description: 'Blicke durch ein Teleskop in die Sterne.' },
  { title: 'Stadtführung', description: 'Entdecke spannende Fakten über deine Stadt.' },
  { title: 'Stand Up Paddling', description: 'Balance und Spaß auf dem Wasser.' },
  { title: 'Strandbad besuchen', description: 'Sonne, Sand und Wasser genießen.' },
  { title: 'Tanzen gehen', description: 'Spaß und Bewegung beim Tanzen.' },
  { title: 'Therme', description: 'Entspannung in warmen Thermalbädern.' },
  { title: 'Trampolinhalle', description: 'Spring dich glücklich in der Trampolinhalle.' },
  { title: 'Wandern', description: 'Erkunde Wanderwege und Natur.' },
  { title: 'Weihnachtsmarkt', description: 'Glühwein und festliche Stimmung erleben.' },
  { title: 'Zoo besuchen', description: 'Tiere aus aller Welt entdecken.' }
].sort((a, b) => a.title.localeCompare(b.title));

function SucheScreen() {
  const { isDarkMode } = useContext(DarkModeContext);
  const [searchText, setSearchText] = useState('');
  const navigation = useNavigation();

  const theme = {
    background: isDarkMode ? '#121212' : '#FFFFFF',
    text: isDarkMode ? '#FFFFFF' : '#000000',
    border: isDarkMode ? '#555555' : '#CCCCCC',
    inputBackground: isDarkMode ? '#1e1e1e' : '#f0f0f0'
  };

  const filteredActivities = activities.filter(activity =>
    activity.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <TextInput
        placeholder="Suche nach Freizeitaktivitäten..."
        placeholderTextColor={isDarkMode ? '#AAAAAA' : '#888888'}
        value={searchText}
        onChangeText={setSearchText}
        style={[
          styles.input,
          {
            color: theme.text,
            backgroundColor: theme.inputBackground,
            borderColor: theme.border
          }
        ]}
      />

      {filteredActivities.length === 0 ? (
        <Text style={[styles.noResultText, { color: theme.text }]}>Keine Treffer gefunden</Text>
      ) : (
        <FlatList
          data={filteredActivities}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.item, { backgroundColor: theme.inputBackground }]}
              onPress={() => navigation.navigate('AktivitaetDetail', { activity: item })}
            >
              <Text style={{ color: theme.text, fontSize: 16 }}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  item: {
    padding: 12,
    borderRadius: 6,
    marginBottom: 8,
  },
  noResultText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
});

export default SucheScreen;
