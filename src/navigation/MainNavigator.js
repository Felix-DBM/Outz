import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabsNavigator from '../TabsNavigator';
import AktivitaetDetailScreen from '../screens/AktivitaetDetailScreen';
import { NavigationContainer } from '@react-navigation/native';
import { DarkModeContext } from '../../DarkModeContext';
import { CustomDarkTheme, CustomLightTheme } from '../../AppTheme';

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  const { isDarkMode } = useContext(DarkModeContext);
  const theme = isDarkMode ? CustomDarkTheme : CustomLightTheme;

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Tabs"
          component={TabsNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AktivitaetDetail"
          component={AktivitaetDetailScreen}
          options={({ route }) => ({
            title: route.params.activity.title,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
