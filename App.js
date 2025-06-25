import React from 'react';
import { DarkModeProvider } from './DarkModeContext';
import MainNavigator from './src/navigation/MainNavigator';

export default function App() {
  return (
    <DarkModeProvider>
      <MainNavigator />
    </DarkModeProvider>
  );
}
