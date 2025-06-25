import { DefaultTheme as NavigationDefaultTheme, DarkTheme as NavigationDarkTheme } from '@react-navigation/native';

export const CustomLightTheme = {
  ...NavigationDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    background: '#FFFFFF',  // Light Mode = weiß
    card: '#FFFFFF',        // Tab-Leiste = weiß
    text: '#000000',
  },
};

export const CustomDarkTheme = {
  ...NavigationDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    background: '#121212',  // Dark Mode = schwarz
    card: '#121212',        // Tab-Leiste = schwarz
    text: '#FFFFFF',
  },
};
