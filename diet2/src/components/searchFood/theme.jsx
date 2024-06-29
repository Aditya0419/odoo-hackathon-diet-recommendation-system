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
      primary: '#ffffff',  // Set the primary text color to white
      secondary: '#000000', // Optional: Set a secondary text color
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
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent', // Set the background color to transparent
          border: '1px solid white', // Set the border color to white
          color: '#ffffff', // Set the text color to white
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent', // Set the background color to transparent
          color: '#ffffff', // Set the text color to white
        },
        expandIcon: {
          color: '#ffffff', // Set the expand icon color to white
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent', // Set the background color to transparent
          color: '#ffffff', // Set the text color to white
        },
      },
    },
  },
});

export default theme;
