import { createTheme, Theme, Components } from '@mui/material';
import { theme as twinTheme } from 'twin.macro';

export const defaultGradient = (
  toRight = true,
  from = twinTheme`colors.orange.DEFAULT`,
  to = twinTheme`colors.pink.DEFAULT`
) => {
  const direction = toRight ? `to right` : `to left`;
  return `linear-gradient(${direction},${from} 45%, ${to} 100%)`;
};

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

const appTheme = createTheme({
  palette: {
    // orange
    primary: {
      main: twinTheme`colors.orange.DEFAULT`,
      light: twinTheme`colors.orange.300`,
      dark: twinTheme`colors.orange.800`,
    },
    // navyblue
    secondary: {
      main: twinTheme`colors.navyblue.DEFAULT`,
      light: twinTheme`colors.navyblue.300`,
      dark: twinTheme`colors.navyblue.800`,
    },
    grey: {
      300: twinTheme`colors.gray.300`,
      400: twinTheme`colors.gray.400`,
      500: twinTheme`colors.gray.500`,
      600: twinTheme`colors.gray.600`,
    },
    text: {
      primary: '#575757',
      secondary: '#767676',
    },
    background: {
      default: '#F3F4F6',
    },
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
    borderRadius: 20,
  },
});

const overrides = (theme: Theme): Components => ({
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
      disableFocusRipple: true,
      disableElevation: true,
      variant: 'contained',
    },
    variants: [
      {
        props: { variant: 'buttonWhite' },
        style: {
          color: theme.palette.primary.main,
          backgroundColor: theme.palette.common.white,
          '&:hover': {
            opacity: 0.8,
            backgroundColor: theme.palette.common.white,
          },
          '&:active': {
            opacity: 0.6,
            backgroundColor: theme.palette.common.white,
          },
          '&:focus': {
            outline: 'none',
            backgroundColor: theme.palette.common.white,
          },
          '&.Mui-disabled': {
            opacity: 0.2,
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.common.white,
          },
        },
      },
      {
        props: { variant: 'buttonLight' },
        style: {
          color: theme.palette.common.white,
          backgroundColor: '#f39e69',
          '&:hover': {
            opacity: 0.8,
            backgroundColor: '#f39e69',
          },
          '&:active': {
            opacity: 0.6,
            backgroundColor: '#f39e69',
          },
          '&:focus': {
            outline: 'none',
            backgroundColor: '#f39e69',
          },
          '&.Mui-disabled': {
            opacity: 0.2,
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.common.white,
          },
        },
      },
      {
        props: { variant: 'buttonSuccess' },
        style: {
          color: theme.palette.common.white,
          backgroundImage: 'none',
          backgroundColor: '#87C735',
          '&:hover': {
            opacity: 0.8,
            backgroundColor: '#87C735',
          },
          '&:active': {
            opacity: 0.6,
            backgroundColor: '#87C735',
          },
          '&:focus': {
            outline: 'none',
            backgroundColor: '#87C735',
          },
          '&.Mui-disabled': {
            opacity: 0.2,
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.common.white,
          },
        },
      },
      {
        props: { variant: 'buttonTransparent' },
        style: {
          color: theme.palette.common.white,
          backgroundColor: '#ffffff77',
          '&:hover': {
            opacity: 0.8,
            backgroundColor: '#ffffff77',
          },
          '&:active': {
            opacity: 0.6,
            backgroundColor: '#ffffff77',
          },
          '&:focus': {
            outline: 'none',
            backgroundColor: '#ffffff77',
          },
          '&.Mui-disabled': {
            opacity: 0.2,
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.common.white,
          },
        },
      },
    ],
    styleOverrides: {
      root: {
        padding: theme.spacing(0.5, 2),
        transition: 'opacity 250ms ease-in-out',
        fontWeight: theme.typography.fontWeightMedium,
      },
      contained: {
        borderRadius: twinTheme`borderRadius.full`,
        color: twinTheme`colors.white`,
        backgroundColor: theme.palette.primary.main,
        '&:hover': {
          opacity: 0.8,
          backgroundColor: theme.palette.primary.main,
        },
        '&:active': {
          opacity: 0.6,
          backgroundColor: theme.palette.primary.main,
        },
        '&:focus': {
          outline: 'none',
          backgroundColor: theme.palette.primary.main,
        },
        '&.Mui-disabled': {
          opacity: 0.2,
          color: twinTheme`colors.white`,
          backgroundColor: theme.palette.primary.main,
        },
      },
      containedPrimary: {
        color: twinTheme`colors.white`,
        backgroundImage: defaultGradient(),
        '&:focus': {
          outline: 'none',
          borderImageSlice: 1,
          borderImageSource: defaultGradient(false),
        },
        '&.Mui-disabled': {
          opacity: 0.2,
          color: twinTheme`colors.white`,
          backgroundImage: defaultGradient(),
        },
      },
      containedSecondary: {
        color: twinTheme`colors.white`,
        background: theme.palette.secondary.main,
        '&:hover': {
          opacity: 0.8,
          backgroundColor: theme.palette.secondary.main,
        },
        '&:active': {
          opacity: 0.6,
          backgroundColor: theme.palette.secondary.main,
        },
        '&:focus': {
          outline: 'none',
          backgroundColor: theme.palette.secondary.main,
        },
        '&.Mui-disabled': {
          opacity: 0.2,
          color: twinTheme`colors.white`,
          backgroundColor: theme.palette.secondary.main,
        },
      },
      containedSizeSmall: {
        padding: theme.spacing(0.5, 1.5),
        fontSize: twinTheme`fontSize.sm`,
      },
      textSizeSmall: {
        padding: theme.spacing(0.5, 1.5),
      },
      text: {
        color: theme.palette.secondary.main,
        fontSize: twinTheme`fontSize.sm`,
        lineHeight: twinTheme`lineHeight.7`,
        fontWeight: twinTheme`fontWeight.bold`,
      },
      sizeSmall: {
        fontSize: twinTheme`fontSize.sm`,
        fontWeight: twinTheme`fontWeight.bold`,
      },
    },
  },
});

export default createTheme({
  ...appTheme,
  components: overrides(appTheme),
});
