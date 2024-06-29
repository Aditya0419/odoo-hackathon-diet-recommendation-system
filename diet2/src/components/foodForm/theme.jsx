// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',  // Set the primary color to white
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#000000',  // Set the default background color to black
    },
    text: {
      primary: '#fff',  // Set the primary text color to white
      secondary: '#000', // Optional: Set a secondary text color
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#ffffff', // Set the border color
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#ffffff', // Set the border color on hover
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#ffffff', // Set the border color on focus
          },
        },
        input: {
          color: '#ffffff', // Set the input text color
        },
        '& .MuiInputLabel-root': {
          color: '#ffffff', // Set the label color
        },
        '& .MuiInputLabel-root.Mui-focused': {
          color: '#ffffff', // Set the label color on focus
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#ffffff', // Set the label color
        },
        focused: {
          color: '#ffffff', // Set the label color on focus
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          color: '#ffffff', // Set the select icon color
        },
        select: {
           // Set the dropdown text color
          // Set the dropdown background color
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: '#000000', // Set the menu item text color to black
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: '#ffffff', // Set the checkbox color to white
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          color: '#ffffff', // Set the checkbox label color to white
        },
      },
    },
  },
});

export default theme;
