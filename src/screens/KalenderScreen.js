import React, { useContext, useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { DarkModeContext } from '../../DarkModeContext';

const lightCalendarTheme = {
  calendarBackground: '#FFFFFF',
  dayTextColor: '#2d4150',
  monthTextColor: '#000000',
  arrowColor: '#000000',
  todayTextColor: '#00adf5',
  selectedDayBackgroundColor: '#00adf5',
  selectedDayTextColor: '#FFFFFF',
};

const darkCalendarTheme = {
  calendarBackground: '#121212',
  dayTextColor: '#FFFFFF',
  monthTextColor: '#FFFFFF',
  arrowColor: '#FFFFFF',
  todayTextColor: '#ffa726',
  selectedDayBackgroundColor: '#333333',
  selectedDayTextColor: '#FFFFFF',
  textDisabledColor: '#555555',
};

function KalenderScreen() {
  const { isDarkMode } = useContext(DarkModeContext);
  const theme = isDarkMode ? darkCalendarTheme : lightCalendarTheme;

  const [selectedDate, setSelectedDate] = useState('');
  const [events, setEvents] = useState({});
  const [newEventText, setNewEventText] = useState('');
  const [newEventTime, setNewEventTime] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const addOrEditEvent = () => {
    if (selectedDate && newEventTime.trim() && newEventText.trim()) {
      const eventEntry = `${newEventTime} - ${newEventText.trim()}`;

      setEvents((prev) => {
        const updatedEvents = [...(prev[selectedDate] || [])];

        if (editingIndex !== null) {
          updatedEvents[editingIndex] = eventEntry;
        } else {
          updatedEvents.push(eventEntry);
        }

        return {
          ...prev,
          [selectedDate]: updatedEvents,
        };
      });

      setNewEventText('');
      setNewEventTime('');
      setEditingIndex(null);
    }
  };

  const deleteEvent = (index) => {
    Alert.alert('Termin löschen', 'Möchtest du diesen Termin wirklich löschen?', [
      { text: 'Abbrechen', style: 'cancel' },
      {
        text: 'Löschen',
        style: 'destructive',
        onPress: () => {
          setEvents((prev) => {
            const updatedEvents = [...prev[selectedDate]];
            updatedEvents.splice(index, 1);
            return {
              ...prev,
              [selectedDate]: updatedEvents,
            };
          });
        },
      },
    ]);
  };

  const editEvent = (index) => {
    const selectedEvent = events[selectedDate][index];
    const [time, text] = selectedEvent.split(' - ');
    setNewEventTime(time);
    setNewEventText(text);
    setEditingIndex(index);
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.calendarBackground }]}>
      <Calendar
        key={isDarkMode ? 'dark' : 'light'}
        theme={theme}
        onDayPress={(day) => {
          setSelectedDate(day.dateString);
          setNewEventText('');
          setNewEventTime('');
          setEditingIndex(null);
        }}
        markedDates={{
          ...Object.keys(events).reduce((acc, date) => {
            acc[date] = {
              marked: true,
              dotColor: isDarkMode ? '#ffa726' : '#00adf5',
            };
            return acc;
          }, {}),
          ...(selectedDate && {
            [selectedDate]: {
              selected: true,
              selectedColor: theme.selectedDayBackgroundColor,
              selectedTextColor: theme.selectedDayTextColor,
              marked: events[selectedDate]?.length > 0,
              dotColor: isDarkMode ? '#ffa726' : '#00adf5',
            },
          }),
        }}
      />

      {selectedDate ? (
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Uhrzeit (z.B. 14:00)"
            placeholderTextColor={isDarkMode ? '#AAAAAA' : '#666666'}
            value={newEventTime}
            onChangeText={setNewEventTime}
            style={[styles.input, {
              backgroundColor: isDarkMode ? '#1e1e1e' : '#f5f5f5',
              color: isDarkMode ? '#FFFFFF' : '#000000',
              borderColor: isDarkMode ? '#555555' : '#CCCCCC',
            }]}
          />
          <TextInput
            placeholder="Termintext"
            placeholderTextColor={isDarkMode ? '#AAAAAA' : '#666666'}
            value={newEventText}
            onChangeText={setNewEventText}
            style={[styles.input, {
              backgroundColor: isDarkMode ? '#1e1e1e' : '#f5f5f5',
              color: isDarkMode ? '#FFFFFF' : '#000000',
              borderColor: isDarkMode ? '#555555' : '#CCCCCC',
            }]}
          />
          <TouchableOpacity
            onPress={addOrEditEvent}
            style={[styles.addButton, { backgroundColor: isDarkMode ? '#ffa726' : '#00adf5' }]}
          >
            <Text style={{ color: isDarkMode ? '#000000' : '#FFFFFF', fontWeight: 'bold' }}>
              {editingIndex !== null ? 'Speichern' : 'Hinzufügen'}
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}

      {selectedDate && events[selectedDate]?.length > 0 && (
        <FlatList
          data={events[selectedDate]}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => editEvent(index)}
              onLongPress={() => deleteEvent(index)}
            >
              <View style={[styles.eventItem, {
                backgroundColor: isDarkMode ? '#1e1e1e' : '#f0f0f0',
              }]}
              >
                <Text style={{ color: isDarkMode ? '#FFFFFF' : '#000000' }}>{item}</Text>
              </View>
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
    padding: 10,
  },
  inputContainer: {
    flexDirection: 'column',
    marginTop: 10,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    padding: 8,
    borderRadius: 5,
    marginBottom: 8,
  },
  addButton: {
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    paddingVertical: 10,
  },
  eventItem: {
    padding: 10,
    marginVertical: 4,
    borderRadius: 5,
  },
});

export default KalenderScreen;