import React, { useContext } from 'react';
import { SafeAreaView, FlatList, Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { DarkModeContext } from '../../DarkModeContext';

const dummyChats = [
  {
    id: '1',
    name: 'Anna Müller',
    lastMessage: 'Hey, bist du später da?',
    time: '14:32',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    id: '2',
    name: 'Max Mustermann',
    lastMessage: 'Okay, bis später!',
    time: '13:20',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    id: '3',
    name: 'Lisa Schmidt',
    lastMessage: 'Kannst du das bitte noch machen?',
    time: '13:12',
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
  },
  {
    id: '4',
    name: 'Tom Becker',
    lastMessage: 'Ich ruf dich später an.',
    time: '12:05',
    avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
  },
  {
    id: '5',
    name: 'Sophia Klein',
    lastMessage: 'Alles klar, danke!',
    time: '11:45',
    avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
  },
  {
    id: '6',
    name: 'Felix Bauer',
    lastMessage: 'Wo treffen wir uns?',
    time: '09:31',
    avatar: 'https://randomuser.me/api/portraits/men/6.jpg',
  },
  {
    id: '7',
    name: 'Laura Fischer',
    lastMessage: 'Gib mir bitte Bescheid.',
    time: '08:30',
    avatar: 'https://randomuser.me/api/portraits/women/7.jpg',
  },
  {
    id: '8',
    name: 'Daniel Weber',
    lastMessage: 'Bin unterwegs!',
    time: '07:15',
    avatar: 'https://randomuser.me/api/portraits/men/8.jpg',
  },
  {
    id: '9',
    name: 'Mia Hoffmann',
    lastMessage: 'Schicke dir gleich die Infos.',
    time: 'Gestern',
    avatar: 'https://randomuser.me/api/portraits/women/9.jpg',
  },
  {
    id: '10',
    name: 'Jonas Wolf',
    lastMessage: 'Danke für alles',
    time: 'Montag',
    avatar: 'https://randomuser.me/api/portraits/men/10.jpg',
  },
];

function ChatsScreen({ navigation }) {
  const { isDarkMode } = useContext(DarkModeContext);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.chatItem}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.chatContent}>
        <View style={styles.chatHeader}>
          <Text style={[styles.name, { color: isDarkMode ? '#fff' : '#000' }]}>{item.name}</Text>
          <Text style={[styles.time, { color: isDarkMode ? '#aaa' : '#555' }]}>{item.time}</Text>
        </View>
        <Text numberOfLines={1} style={[styles.lastMessage, { color: isDarkMode ? '#ccc' : '#777' }]}>
          {item.lastMessage}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDarkMode ? '#121212' : '#fff' }]}>
      <FlatList
        data={dummyChats}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chatItem: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  chatContent: {
    flex: 1,
    justifyContent: 'center',
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 3,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  time: {
    fontSize: 12,
  },
  lastMessage: {
    fontSize: 14,
  },
});

export default ChatsScreen;
