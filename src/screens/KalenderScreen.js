import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { DarkModeContext } from '../DarkModeContext';

const KalenderScreen = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  const calendarTheme = {
    backgroundColor: isDarkMode ? '#121212' : '#FFFFFF',
    calendarBackground: isDarkMode ? '#121212' : '#FFFFFF',
    textSectionTitleColor: isDarkMode ? '#FFFFFF' : '#000000',
    selectedDayBackgroundColor: '#00adf5',
    selectedDayTextColor: '#FFFFFF',
    todayTextColor: '#00adf5',
    dayTextColor: isDarkMode ? '#FFFFFF' : '#2d4150',
    textDisabledColor: isDarkMode ? '#555555' : '#d9e1e8',
    arrowColor: isDarkMode ? '#FFFFFF' : 'orange',
    monthTextColor: isDarkMode ? '#FFFFFF' : '#000000',
    indicatorColor: isDarkMode ? '#FFFFFF' : 'black',
    textDayFontWeight: '300',
    textMonthFontWeight: 'bold',
    textDayHeaderFontWeight: '300',
    textDayFontSize: 16,
    textMonthFontSize: 20,
    textDayHeaderFontSize: 14,
    dotColor: isDarkMode ? '#00adf5' : '#00adf5',
    selectedDotColor: '#FFFFFF',
    disabledArrowColor: isDarkMode ? '#555555' : '#d9e1e8',
  };

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#121212' : '#FFFFFF' }]}>
      <Calendar
        current={new Date().toISOString().split('T')[0]}
        markedDates={{
          '2025-04-28': { selected: true, marked: true, selectedColor: 'blue' },
        }}
        theme={calendarTheme}
        style={{
          backgroundColor: isDarkMode ? '#121212' : '#FFFFFF',
        }}
        onDayPress={day => {
          console.log('Ausgewähltes Datum:', day.dateString);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
});

export default KalenderScreen;
