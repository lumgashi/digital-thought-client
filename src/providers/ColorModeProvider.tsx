import React from 'react';
import { CssBaseline, PaletteMode, ThemeProvider, createTheme } from '@mui/material';

import { getDesignTokens, overrides } from '@/config/theme';

export type ColorModeType = 'light' | 'dark';

interface ColorModeContextValue {
  colorMode: ColorModeType | undefined;
  handleColorModeChange: {
    toggleColorMode: (color: ColorModeType) => void;
  };
}

export const ColorModeContext = React.createContext<ColorModeContextValue>({
  colorMode: 'light',
  handleColorModeChange: {
    toggleColorMode: (color: ColorModeType) => color,
  },
});

type ColorModeProviderProps = {
  children: React.ReactNode;
};

export const useColorMode = () => React.useContext(ColorModeContext);

export const ColorModeProvider = ({ children }: ColorModeProviderProps) => {
  const [colorMode, setColorMode] = React.useState<ColorModeType | undefined>(undefined);

  const handleColorModeChange = React.useMemo(
    () => ({
      toggleColorMode: (color: ColorModeType) => {
        setColorMode(color);
      },
    }),
    []
  );

  const mergedThemes = React.useMemo(() => {
    const colorModeTheme = createTheme(getDesignTokens(colorMode as PaletteMode) as any);
    return createTheme({
      ...colorModeTheme,
      components: overrides({ ...colorModeTheme } as any),
    });
  }, [colorMode]);

  React.useEffect(() => {
    const colorModeFromStorage = window.localStorage.getItem('colorMode') ?? undefined;

    if (colorModeFromStorage) {
      setColorMode(colorModeFromStorage as any);
    } else {
      setColorMode('light');
    }
  }, []);

  React.useEffect(() => {
    if (colorMode) {
      window.localStorage.setItem('colorMode', colorMode);
    }
  }, [colorMode]);

  const value = { colorMode, handleColorModeChange };

  return (
    <ThemeProvider theme={mergedThemes}>
      <CssBaseline />
      <ColorModeContext.Provider value={value}>{children}</ColorModeContext.Provider>
    </ThemeProvider>
  );
};
