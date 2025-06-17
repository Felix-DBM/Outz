import React, { useContext } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { DarkModeContext } from '../../DarkModeContext';


// Vordefinierte Farb-Themes für den Kalender
const lightCalendarTheme = {
  calendarBackground: '#FFFFFF',
  dayTextColor: '#2d4150',        // Standard dunkle Schrift auf hellem Hintergrund
  monthTextColor: '#000000',      // Monatsüberschrift in Schwarz
  arrowColor: '#000000',          // Pfeile in Schwarz
  todayTextColor: '#00adf5',      // Heutiges Datum in Blau (Standard)
  selectedDayBackgroundColor: '#00adf5', // Markierter Tag in Blau
  selectedDayTextColor: '#FFFFFF'
};
const darkCalendarTheme = {
  calendarBackground: '#121212',
  dayTextColor: '#FFFFFF',        // Helle Schrift auf dunklem Hintergrund
  monthTextColor: '#FFFFFF',      // Monatsüberschrift in Weiß
  arrowColor: '#FFFFFF',          // Pfeile in Weiß
  todayTextColor: '#ffa726',      // Heutiges Datum in auffälligem Orange im Dark Mode
  selectedDayBackgroundColor: '#333333', // Markierter Tag in Grau
  selectedDayTextColor: '#FFFFFF',
  textDisabledColor: '#555555'    // Deaktivierte Tage abgedunkelt
};

function KalenderScreen() {
  const { isDarkMode } = useContext(DarkModeContext);
  const theme = isDarkMode ? darkCalendarTheme : lightCalendarTheme;

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.calendarBackground }]}>
      <Calendar
        // Key wechselt mit Modus, um vollständiges Re-Rendering zu erzwingen (falls nötig)
        key={isDarkMode ? 'dark' : 'light'} 
        theme={theme}
        // Weitere Calendar-Props können hier hinzugefügt werden (z.B. onDayPress, markedDates, etc.)
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default KalenderScreen;
