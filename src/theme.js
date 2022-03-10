import { createTheme } from "@mui/material";

const theme = createTheme ({
    palette: {
        type: 'light',
        primary: {
          main: '#bb5167',
        },
        secondary: {
          main: '#5c5a5a',
        },
        background: {
          default: '#dddff3',
          paper: '#c4c9d4',
        },
        error: {
          main: '#e2645a',
        },
        success: {
          main: '#479e4a',
        },
        divider: 'rgba(0,0,0,0.12)',
      },
      props: {
        MuiTooltip: {
          arrow: true,
        },
      },
      overrides: {
        MuiSwitch: {
          root: {
            width: 42,
            height: 26,
            padding: 0,
            margin: 8,
          },
          switchBase: {
            padding: 1,
            '&$checked, &$colorPrimary$checked, &$colorSecondary$checked': {
              transform: 'translateX(16px)',
              color: '#fff',
              '& + $track': {
                opacity: 1,
                border: 'none',
              },
            },
          },
          thumb: {
            width: 24,
            height: 24,
          },
          track: {
            borderRadius: 13,
            border: '1px solid #bdbdbd',
            backgroundColor: '#fafafa',
            opacity: 1,
            transition: 'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
          },
        },
      }
});

theme.typography.h1 = {
  fontWeight: 400,
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.5rem'
  },
  [theme.breakpoints.between('sm', 'md')]: {
    fontSize: '3.1rem'
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '3.5rem'
  }
}

theme.typography.h2 = {
  fontSize: '2rem',
  [theme.breakpoints.between('sm', 'md')]: {
    fontSize: '2.4rem'
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '3rem'
  }
}

theme.typography.h3 = {
  fontSize: '1.5rem',
  [theme.breakpoints.between('sm', 'md')]: {
    fontSize: '1.8rem'
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem'
  }
}

theme.typography.subtitle1 = {
  fontWeight: 400,
  fontSize: '1rem'
}

export default theme;