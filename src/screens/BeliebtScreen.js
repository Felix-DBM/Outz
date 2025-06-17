import React, { useContext } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { DarkModeContext } from '../../DarkModeContext';


function BeliebtScreen() {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDarkMode ? '#121212' : '#FFFFFF' }]}>
      <Text style={[styles.text, { color: isDarkMode ? '#FFFFFF' : '#000000' }]}>
        Beliebte Inhalte
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  text: {
    fontSize: 18
  }
});

export default BeliebtScreen;
