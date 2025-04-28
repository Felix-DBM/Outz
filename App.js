import React, { useContext } from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import TabsNavigator from './src/TabsNavigator';
import { DarkModeProvider, DarkModeContext } from './src/DarkModeContext';

const MainApp = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
      <TabsNavigator />
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <DarkModeProvider>
      <MainApp />
    </DarkModeProvider>
  );
}
