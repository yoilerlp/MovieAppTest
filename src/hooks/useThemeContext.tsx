import {useContext} from 'react';
import {ThemeContext, themeContextType} from '../../App';

export function useThemeContext() {
  return useContext<themeContextType>(ThemeContext);
}
