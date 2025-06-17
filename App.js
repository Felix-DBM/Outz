import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { DarkModeProvider } from './DarkModeContext';
import KalenderScreen from './src/screens/KalenderScreen';
import ChatsScreen from './src/screens/ChatsScreen';
import BeliebtScreen from './src/screens/BeliebtScreen';
import SucheScreen from './src/screens/SucheScreen';
import EinstellungenScreen from './src/screens/EinstellungenScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <DarkModeProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Kalender" component={KalenderScreen} />
          <Tab.Screen name="Chats" component={ChatsScreen} />
          <Tab.Screen name="Beliebt" component={BeliebtScreen} />
          <Tab.Screen name="Suche" component={SucheScreen} />
          <Tab.Screen name="Einstellungen" component={EinstellungenScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </DarkModeProvider>
  );
}
