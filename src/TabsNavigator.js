import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens importieren
import ChatsScreen from './screens/ChatsScreen';
import KalenderScreen from './screens/KalenderScreen';
import SucheScreen from './screens/SucheScreen';
import BeliebtScreen from './screens/BeliebtScreen';
import EinstellungenScreen from './screens/EinstellungenScreen';

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Chats" component={ChatsScreen} />
      <Tab.Screen name="Kalender" component={KalenderScreen} />
      <Tab.Screen name="Suche" component={SucheScreen} />
      <Tab.Screen name="Beliebt" component={BeliebtScreen} />
      <Tab.Screen name="Einstellungen" component={EinstellungenScreen} />
    </Tab.Navigator>
  );
};

export default TabsNavigator;
