import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff8516", // Your orange color
    },
  },
  typography: {},
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#e1e1e1", // Default border color
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#e1e1e1", // Border color on hover
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ff8516", // Border color when focused
          },
          "& .MuiInputBase-input": {
            fontFamily: "'Helvetica', sans-serif", // Apply custom font to input text
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          "&.Mui-focused": {
            color: "#ff8516", // Label color when focused
          },
          fontFamily: "'Helvatica', sans-serif", // Apply custom font to labels
        },
      },
    },
  },
});

export default theme;
