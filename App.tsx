import React, {useState, useEffect} from 'react';
import {Appearance, ColorSchemeName, StyleSheet} from 'react-native';
import MainStack from './src/navigations/MainStack';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'react-native-elements';

interface Theme {
  color: string;
  backgroundColor: string;
}

const initialTheme: Theme = {
  color: 'black',
  backgroundColor: 'white',
};

export type themeContextType = {
  colorTheme: ColorSchemeName;
  theme: Theme;
};

export const ThemeContext = React.createContext<themeContextType>({
  colorTheme: 'light',
  theme: initialTheme,
});

export default function App() {
  const [theme, setTheme] = useState<Theme>(initialTheme);
  const [colorTheme, setColortheme] = useState<ColorSchemeName>(
    Appearance.getColorScheme(),
  );

  useEffect(() => {
    Appearance.addChangeListener(themeP => {
      if (themeP.colorScheme === 'light') {
        setTheme({...themeStyle.light});
        setColortheme(themeP.colorScheme);
      } else {
        setTheme({...themeStyle.dark});
        setColortheme(themeP.colorScheme);
      }
    });
  }, []);

  return (
    <NavigationContainer>
      <ThemeContext.Provider value={{theme, colorTheme}}>
          <MainStack />
      </ThemeContext.Provider>
    </NavigationContainer>
  );
}

const themeStyle = StyleSheet.create({
  dark: {
    color: 'white',
    backgroundColor: '#2c3848',
  },
  light: {
    color: 'black',
    backgroundColor: 'white',
  },
});
