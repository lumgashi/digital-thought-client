import { createTheme, Theme, Components, PaletteMode } from '@mui/material';
import { theme as twinTheme } from 'twin.macro';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    buttonWhite: true;
    buttonLight: true;
    buttonSuccess: true;
    buttonTransparent: true;
  }
}

declare module '@mui/material/Alert' {
  interface AlertPropsVariantOverrides {
    primary: true;
    secondary: true;
  }
}

export const getDesignTokens: any = (mode: PaletteMode = 'light') => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: {
            main: twinTheme`colors.gray.200`,
            light: twinTheme`colors.gray.100`,
            dark: twinTheme`colors.gray.300`,
          },
          secondary: {
            main: twinTheme`colors.gray.500`,
            light: twinTheme`colors.gray.400`,
            dark: twinTheme`colors.gray.600`,
          },
          divider: twinTheme`colors.gray.300`,
          text: {
            primary: twinTheme`colors.gray.600`,
            secondary: twinTheme`colors.gray.800`,
          },
          background: {
            default: twinTheme`colors.gray.100`,
            paper: twinTheme`colors.gray.200`,
          },
        }
      : {
          primary: {
            main: twinTheme`colors.neutral.200`,
            light: twinTheme`colors.neutral.100`,
            dark: twinTheme`colors.neutral.300`,
          },
          secondary: {
            main: twinTheme`colors.neutral.500`,
            light: twinTheme`colors.neutral.400`,
            dark: twinTheme`colors.neutral.600`,
          },
          divider: twinTheme`colors.neutral.300`,
          text: {
            primary: twinTheme`colors.gray.100`,
            secondary: twinTheme`colors.gray.300`,
          },
          background: {
            default: twinTheme`colors.neutral.DEFAULT`,
            paper: twinTheme`colors.neutral.DEFAULT`,
          },
        }),
  },

  typography: {
    fontSize: 16,
    fontFamily: twinTheme`fontFamily.sans`,
    fontWeightRegular: twinTheme`fontWeight.normal`,
    fontWeightMedium: twinTheme`fontWeight.medium`,
    fontWeightBold: twinTheme`fontWeight.bold`,
    h1: {
      fontSize: twinTheme`fontSize.4xl`,
      lineHeight: twinTheme`lineHeight.10`,
      fontWeight: twinTheme`fontWeight.bold`,
    },
    h2: {
      textTransform: 'uppercase',
      fontSize: twinTheme`fontSize.2xl`,
      lineHeight: twinTheme`lineHeight.8`,
      fontWeight: twinTheme`fontWeight.bold`,
    },
    h3: {
      fontSize: twinTheme`fontSize.xl`,
      lineHeight: twinTheme`lineHeight.7`,
      fontWeight: twinTheme`fontWeight.bold`,
    },
    h4: {
      fontSize: twinTheme`fontSize.base`,
      lineHeight: twinTheme`lineHeight.7`,
      fontWeight: twinTheme`fontWeight.bold`,
    },
    h5: {
      fontSize: twinTheme`fontSize.sm`,
      lineHeight: twinTheme`lineHeight.6`,
      fontWeight: twinTheme`fontWeight.bold`,
    },
    h6: {
      fontSize: twinTheme`fontSize.xs`,
      lineHeight: twinTheme`lineHeight.6`,
      fontWeight: twinTheme`fontWeight.bold`,
    },
    subtitle1: {
      fontSize: twinTheme`fontSize.xl`,
      lineHeight: twinTheme`lineHeight.6`,
      fontWeight: twinTheme`fontWeight.light`,
    },
    subtitle2: {
      fontSize: twinTheme`fontSize.base`,
    },
    body1: {
      fontSize: twinTheme`fontSize.base`,
    },
    body2: {
      fontSize: twinTheme`fontSize.xs`,
    },
    caption: {
      fontSize: twinTheme`fontSize.xs`,
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 960,
      lg: 1280,
      xl: 1600,
    },
  },
  shape: {
    borderRadius: 5,
  },
});

export const appTheme = createTheme({});

export const overrides = (theme: Theme): Components => ({
  MuiTypography: {
    defaultProps: {
      color: 'textPrimary',
    },
  },
  MuiTextField: {
    defaultProps: {
      variant: 'outlined',
    },
  },
  MuiButton: {
    defaultProps: {
      disableElevation: true,
      variant: 'contained',
    },
    styleOverrides: {
      root: {
        padding: theme.spacing(0.5, 2.5),
        transition: 'opacity 250ms ease-in-out',
        fontWeight: theme.typography.fontWeightMedium,
      },
      contained: {
        borderRadius: twinTheme`borderRadius.full`,
        color: theme.palette.common.white,
        backgroundColor:
          theme.palette.mode === 'dark' ? theme.palette.primary.main : theme.palette.text.primary,
        '&:hover': {
          opacity: 0.8,
          backgroundColor:
            theme.palette.mode === 'dark' ? theme.palette.primary.main : theme.palette.text.primary,
        },
      },
      outlined: {
        borderRadius: twinTheme`borderRadius.full`,
        color: theme.palette.text.primary,
        backgroundColor: 'inherit',
        border: `1px solid ${
          theme.palette.mode === 'dark'
            ? theme.palette.text.secondary
            : theme.palette.secondary.light
        }`,
        '&:hover': {
          opacity: 0.8,
          backgroundColor: 'inherit',
          border: `1px solid ${
            theme.palette.mode === 'dark'
              ? theme.palette.text.secondary
              : theme.palette.secondary.light
          }`,
        },
      },
      text: {
        borderRadius: twinTheme`borderRadius.full`,
        color: theme.palette.text.primary,
        backgroundColor: 'inherit',
        '&:hover': {
          opacity: 0.8,
          backgroundColor: 'inherit',
        },
      },
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: {
        backgroundColor:
          theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main,
      },
    },
  },
  MuiRadio: {
    styleOverrides: {
      root: {
        '&.Mui-checked': {
          color: theme.palette.text.primary,
        },
      },
    },
  },
  MuiAlert: {
    variants: [
      {
        props: { variant: 'primary' },
        style: {
          color: theme.palette.text.primary,
          backgroundColor: twinTheme`colors.neutral.DEFAULT`,
        },
      },
      {
        props: { variant: 'secondary' },
        style: {
          color: theme.palette.grey[300],
          backgroundColor: twinTheme`colors.neutral.500`,
          borderRadius: twinTheme`borderRadius.md`,
          boxShadow: theme.shadows[8],
        },
      },
    ],
    styleOverrides: {
      root: {
        alignItems: 'center',
        '& .MuiButtonBase-root': {
          backgroundColor: twinTheme`colors.neutral.500`,
        },
      },
      standardSuccess: {
        color: theme.palette.grey[800],
      },
      standardInfo: {
        color: theme.palette.grey[800],
      },
      standardWarning: {
        color: theme.palette.grey[800],
      },
      standardError: {
        color: theme.palette.grey[800],
      },
      action: {
        paddingTop: 0,
      },
    },
  },
  MuiInput: {
    styleOverrides: {
      underline: {
        '&:before': {
          borderBottom:
            theme.palette.mode === 'dark'
              ? `1px solid ${theme.palette.primary.light}`
              : `1px solid ${theme.palette.secondary.light}`,
        },
        '&:hover:not(.Mui-disabled):before': {
          borderBottom:
            theme.palette.mode === 'dark'
              ? `1px solid ${theme.palette.primary.main}`
              : `1px solid ${theme.palette.secondary.main}`,
        },
        '&:after': {
          borderBottom: `1px solid ${theme.palette.text.primary}`,
        },
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor:
            theme.palette.mode === 'dark'
              ? theme.palette.primary.light
              : theme.palette.secondary.light,
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor:
            theme.palette.mode === 'dark'
              ? theme.palette.primary.main
              : theme.palette.secondary.main,
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor:
            theme.palette.mode === 'dark'
              ? theme.palette.primary.light
              : theme.palette.secondary.light,
        },
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        color:
          theme.palette.mode === 'dark' ? theme.palette.text.primary : theme.palette.secondary.main,
        '&.Mui-focused': {
          color:
            theme.palette.mode === 'dark'
              ? theme.palette.text.primary
              : theme.palette.secondary.main,
        },
      },
    },
  },
  MuiCheckbox: {
    styleOverrides: {
      root: {
        color:
          theme.palette.mode === 'dark'
            ? theme.palette.text.secondary
            : theme.palette.secondary.main,
        '&.Mui-checked': {
          color:
            theme.palette.mode === 'dark'
              ? theme.palette.text.secondary
              : theme.palette.secondary.main,
        },
      },
    },
  },
  MuiToolbar: {
    styleOverrides: {
      root: {
        backgroundColor:
          theme.palette.mode === 'dark'
            ? theme.palette.secondary.light
            : `${theme.palette.primary.light} !important`,
      },
    },
  },
  MuiDivider: {
    styleOverrides: {
      root: {
        borderColor:
          theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.dark,
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        '&.MuiPaper-root': {
          backgroundColor:
            theme.palette.mode === 'dark'
              ? theme.palette.secondary.light
              : theme.palette.primary.light,
        },
      },
    },
  },
  MuiListSubheader: {
    styleOverrides: {
      root: {
        color: theme.palette.text.primary,
        backgroundColor:
          theme.palette.mode === 'dark'
            ? theme.palette.secondary.light
            : theme.palette.primary.main,
      },
    },
  },
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        backgroundColor:
          theme.palette.mode === 'dark'
            ? `${theme.palette.primary.dark} !important`
            : theme.palette.secondary.main,
        boxShadow: `rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset`,
      },
      tooltipArrow: {
        backgroundColor:
          theme.palette.mode === 'dark'
            ? `${theme.palette.primary.dark} !important`
            : theme.palette.secondary.main,
        boxShadow: `rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset`,
      },
    },
  },
});

export default createTheme({
  ...appTheme,
  ...getDesignTokens,
  components: overrides(appTheme),
});
