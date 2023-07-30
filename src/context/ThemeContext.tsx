import { createContext } from 'react';
import { themeDefaults } from '../config/themes';
import useLocalStorage from '../hooks/useLocalStorage';
import { themeType } from '../config/themes';
const ThemeContext = createContext(themeDefaults);

const ThemeProvider = ({ children }: { children: any }) => {
  const [theme, setTheme] = useLocalStorage<themeType>('theme', {
    themeMode: themeDefaults.themeMode,
    themeDirection: themeDefaults.themeDirection,
    themeColorPresets: themeDefaults.themeColorPresets,
  });

  const onToggleMode = (): void => {
    setTheme({
      ...theme,
      themeMode: theme.themeMode === 'light' ? 'dark' : 'light',
    });
  };

  const onToggleDirection = (): void => {
    setTheme({
      ...theme,
      themeDirection: theme.themeDirection === 'rtl' ? 'ltr' : 'rtl',
    });
  };

  return (
    <ThemeContext.Provider
      value={{ ...theme, onToggleMode, onToggleDirection }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
