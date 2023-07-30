export declare type themeType = {
  themeDirection: 'rtl' | 'ltr';
  themeMode: 'light' | 'dark';
  themeColorPresets: 'purple' | 'blue';
};
export declare type themeActions = {
  onToggleMode: () => void;
  onToggleDirection: () => void;
};

export const themeDefaults: themeType & themeActions = {
  themeDirection: 'rtl',
  themeMode: 'light',
  themeColorPresets: 'purple',
  onToggleMode: () => {},
  onToggleDirection: () => {},
};
