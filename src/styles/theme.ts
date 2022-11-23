import { createTheme } from '@mui/material/styles';

let sirTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1025,
      lg: 1280,
      xl: 1536
    }
  },
  palette: {
    primary: {
      main: '#4DB2A8',
      light: '#4DB2A8', // unused
      dark: '#4DB2A8', // unused
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#C8C7D8',
      light: '#002349', // unused
      dark: '#C8C7D8' // unused
    },
    text: {
      primary: '#ffffff',
      secondary: '#f2f2f2',
      disabled: '#ffffff', // unused
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    action: {
      active: 'rgba(0, 0, 0, 0.54)', // unused
      hover: 'rgba(0, 0, 0, 0.04)', // unused
      selected: 'rgba(0, 0, 0, 0.08)', // unused
      disabled: 'rgba(0, 0, 0, 0.38)', // unused
      disabledBackground: 'rgba(0, 0, 0, 0.05)', // unused
      focus: 'rgba(0, 0, 0, 0.12)' // unused
    },
    error: {
      main: '#C8102E', // unused
      dark: '#8F0007', // unused
      contrastText: '#FFFFFF' // unused
    },
    warning: {
      main: '#FF9013', // unused
      dark: '#C66100', // unused
      contrastText: '#FFFFFF' // unused
    },
    info: {
      main: '#42B3E0', // unused
      dark: '#095688', // unused
      light: '#E1F5FA', // unused
      contrastText: '#FFFFFF' // unused
    },
    success: {
      main: '#2E7D32', // unused
      dark: '#1B5E20', // unused
      contrastText: '#FFFFFF', // unused
      light: '#4CAF50' // unused
    },
    background: {
      paper: '#FFFFFF', // unused
      default: '#FFFFFF' // unused
    },
    grey: {
      100: '#F5F5F5', // unused
      300: '#E0E0E0', // unused
      400: '#D6D6D6', // unused
      500: '#9E9E9E', // unused
      600: '#757575', // unused
      700: '#666666' // unused
    }
  },
  typography: {
    h1: {
      fontFamily: 'Spartan',
      fontWeight: '700',
      letterSpacing: '0',
      lineHeight: '125%',
      fontSize: '60px',
      '@media (max-width: 768px)': {
        fontSize: '40px',
      },
      '@media (max-width: 448px)': {
        fontSize: '30px',
      },
      '@media (min-width: 1536px)': {
        fontSize: '72px'
      }
    },
    h2: {
      fontFamily: 'Spartan',
      fontWeight: '700',
      letterSpacing: '0',
      lineHeight: '125%',
      fontSize: '40px',
      '@media (max-width: 768px)': {
        fontSize: '28px',
      },
      '@media (max-width: 448px)': {
        fontSize: '22px',
      },
      '@media (min-width: 1536px)': {
        fontSize: '50px'
      }
    },
    h3: {
      fontFamily: 'Spartan',
      fontWeight: '700',
      letterSpacing: '0',
      lineHeight: '125%',
      fontSize: '30px',
      '@media (max-width: 768px)': {
        fontSize: '20px',
      },
      '@media (max-width: 448px)': {
        fontSize: '16px',
      },
      '@media (min-width: 1536px)': {
        fontSize: '36px'
      }
    },
    h4: {
      fontFamily: 'Spartan',
      fontWeight: '700',
      letterSpacing: '0',
      lineHeight: '125%',
      fontSize: '24px',
      '@media (max-width: 768px)': {
        fontSize: '18px',
      },
      '@media (max-width: 448px)': {
        fontSize: '15px',
      },
      '@media (min-width: 1536px)': {
        fontSize: '28px'
      }
    },
    h5: {
      fontFamily: 'Spartan',
      fontWeight: '700',
      letterSpacing: '0',
      lineHeight: '125%',
      fontSize: '20px',
      '@media (max-width: 768px)': {
        fontSize: '16px',
      },
      '@media (max-width: 448px)': {
        fontSize: '14px',
      },
      '@media (min-width: 1536px)': {
        fontSize: '23px'
      }
    },
    h6: {
      fontFamily: 'Spartan',
      fontWeight: '700',
      letterSpacing: '0',
      lineHeight: '125%',
      fontSize: '18px',
      '@media (max-width: 768px)': {
        fontSize: '15px',
      },
      '@media (max-width: 448px)': {
        fontSize: '13px',
      },
      '@media (min-width: 1536px)': {
        fontSize: '20px'
      }
    },
    subtitle1: {
      fontFamily: 'Spinnaker',
      fontWeight: '400',
      letterSpacing: '0',
      lineHeight: '168%',
      fontSize: '16px',
      '@media (max-width: 768px)': {
        fontSize: '14px',
      },
      '@media (max-width: 448px)': {
        fontSize: '12px',
      },
      '@media (min-width: 1536px)': {
        fontSize: '18px'
      }
    },
    subtitle2: {
      fontFamily: 'Spartan',
      fontWeight: '700',
      letterSpacing: '0',
      lineHeight: '125%',
      fontSize: '16px',
      '@media (max-width: 768px)': {
        fontSize: '14px',
      },
      '@media (max-width: 448px)': {
        fontSize: '12px',
      },
      '@media (min-width: 1536px)': {
        fontSize: '18px'
      }
    },
    body1: {
      fontFamily: 'Spartan',
      fontWeight: '700',
      letterSpacing: '0',
      lineHeight: '125%',
      fontSize: '14px',
      '@media (max-width: 768px)': {
        fontSize: '12px',
      },
      '@media (max-width: 448px)': {
        fontSize: '11px',
      },
      '@media (min-width: 1536px)': {
        fontSize: '16px'
      }
    },
    body2: {
      fontFamily: 'Spartan',
      fontWeight: '500',
      letterSpacing: '0',
      lineHeight: '180%',
      fontSize: '18px',
      '@media (max-width: 768px)': {
        fontSize: '15px',
      },
      '@media (max-width: 448px)': {
        fontSize: '13px',
      },
      '@media (min-width: 1536px)': {
        fontSize: '20px'
      }
    }
  },
  components: {
  }
});

export default sirTheme;
