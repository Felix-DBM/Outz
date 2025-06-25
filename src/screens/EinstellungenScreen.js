import React, { useContext, useState } from 'react';
import { SafeAreaView, Text, StyleSheet, Switch, View, TouchableOpacity, Alert } from 'react-native';
import { DarkModeContext } from '../../DarkModeContext';

function EinstellungenScreen() {
  const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const theme = {
    background: isDarkMode ? '#121212' : '#FFFFFF',
    card: isDarkMode ? '#1E1E1E' : '#F7F7F7',
    text: isDarkMode ? '#FFFFFF' : '#000000',
    subText: isDarkMode ? '#AAAAAA' : '#555555',
    border: isDarkMode ? '#333333' : '#DDDDDD',
    switchThumb: isDarkMode ? '#f5dd4b' : '#FFFFFF',
    switchTrackOff: isDarkMode ? '#555555' : '#CCCCCC',
    switchTrackOn: isDarkMode ? '#81b0ff' : '#4CAF50',
    buttonBackground: isDarkMode ? '#FF5252' : '#FF3B30',
    buttonText: '#FFFFFF',
  };

  const handleLogout = () => {
    Alert.alert(
      'Abmelden',
      'Möchtest du dich wirklich abmelden?',
      [
        { text: 'Abbrechen', style: 'cancel' },
        { text: 'Abmelden', onPress: () => console.log('User logged out') },
      ],
      { cancelable: true }
    );
  };

  const handleAccountSettings = () => {
    Alert.alert('Account-Einstellungen', 'Hier würden die Account-Details bearbeitet.');
  };

  const handlePrivacy = () => {
    Alert.alert('Datenschutz', 'Hier würden Datenschutz-Einstellungen erscheinen.');
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.header, { color: theme.text }]}>Einstellungen</Text>

      {/* Dark Mode */}
      <View style={[styles.settingCard, { backgroundColor: theme.card, borderColor: theme.border }]}>
        <View style={styles.settingRow}>
          <View style={styles.textContainer}>
            <Text style={[styles.settingTitle, { color: theme.text }]}>Dark Mode</Text>
            <Text style={[styles.settingDescription, { color: theme.subText }]}>
              Aktiviere den dunklen Modus für die App
            </Text>
          </View>
          <Switch
            value={isDarkMode}
            onValueChange={setIsDarkMode}
            thumbColor={theme.switchThumb}
            trackColor={{
              false: theme.switchTrackOff,
              true: theme.switchTrackOn,
            }}
          />
        </View>
      </View>

      {/* Benachrichtigungen */}
      <View style={[styles.settingCard, { backgroundColor: theme.card, borderColor: theme.border }]}>
        <View style={styles.settingRow}>
          <View style={styles.textContainer}>
            <Text style={[styles.settingTitle, { color: theme.text }]}>Benachrichtigungen</Text>
            <Text style={[styles.settingDescription, { color: theme.subText }]}>
              Push-Benachrichtigungen aktivieren oder deaktivieren
            </Text>
          </View>
          <Switch
            value={notificationsEnabled}
            onValueChange={setNotificationsEnabled}
            thumbColor={theme.switchThumb}
            trackColor={{
              false: theme.switchTrackOff,
              true: theme.switchTrackOn,
            }}
          />
        </View>
      </View>

      {/* Account Einstellungen */}
      <TouchableOpacity
        onPress={handleAccountSettings}
        style={[styles.settingCard, { backgroundColor: theme.card, borderColor: theme.border }]}
      >
        <Text style={[styles.settingTitle, { color: theme.text }]}>Account-Einstellungen</Text>
        <Text style={[styles.settingDescription, { color: theme.subText }]}>Passwort, E-Mail, Profil</Text>
      </TouchableOpacity>

      {/* Datenschutz */}
      <TouchableOpacity
        onPress={handlePrivacy}
        style={[styles.settingCard, { backgroundColor: theme.card, borderColor: theme.border }]}
      >
        <Text style={[styles.settingTitle, { color: theme.text }]}>Datenschutz</Text>
        <Text style={[styles.settingDescription, { color: theme.subText }]}>Datenzugriffe verwalten</Text>
      </TouchableOpacity>

      {/* Abmelden */}
      <TouchableOpacity
        onPress={handleLogout}
        style={[styles.logoutButton, { backgroundColor: theme.buttonBackground }]}
      >
        <Text style={[styles.logoutButtonText, { color: theme.buttonText }]}>Abmelden</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  settingCard: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    flexShrink: 1,
    paddingRight: 10,
  },
  settingTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  settingDescription: {
    fontSize: 14,
    marginTop: 4,
  },
  logoutButton: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
  },
  logoutButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EinstellungenScreen;
