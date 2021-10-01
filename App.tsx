import React, {useState, useEffect} from 'react';
import {Appearance, ColorSchemeName, StyleSheet} from 'react-native';
import MainStack from './src/navigations/MainStack';
import {NavigationContainer} from '@react-navigation/native';
import Loader from './src/components/Loader';

interface Theme {
  color: string;
  backgroundColor: string;
}

const initialTheme: Theme = {
  color: 'white',
  backgroundColor: 'black',
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
  const [colorTheme, setColortheme] = useState<null | ColorSchemeName>(null);

  useEffect(() => {
    Appearance.addChangeListener(themeP => {
      setColortheme(themeP.colorScheme);
    });
    setColortheme(Appearance.getColorScheme());
  }, []);

  useEffect(() => {
    if (colorTheme === 'light') {
      setTheme(themeStyle.light);
    } else if (colorTheme === 'dark') {
      setTheme(themeStyle.dark);
    }
  }, [colorTheme]);

  if (colorTheme === null) {
    return <Loader />;
  }

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
