import React, {createContext, useReducer} from 'react';
import {ligthTheme, themeReducer, ThemeState} from './themeReducer';

interface ThemeContextProps {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}
export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: any) => {
  const [theme, dispatch] = useReducer(themeReducer, ligthTheme); //TODO: leet tmea d telefno
  const setDarkTheme = () => {
    console.log('set Dark Theme');
    dispatch({type: 'set_dark_theme'});
  };
  const setLightTheme = () => {
    console.log('set Light theme');
    dispatch({type: 'set_light_theme'});
  };

  return (
    <ThemeContext.Provider value={{setDarkTheme, setLightTheme, theme}}>
      {children}
    </ThemeContext.Provider>
  );
};
