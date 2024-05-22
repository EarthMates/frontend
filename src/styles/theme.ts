// theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff8516", // Your orange color
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ff8516", // Border color when focused
          },
        },
        notchedOutline: {
          borderColor: "#4a555c", // Default border color
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          "&.Mui-focused": {
            color: "#ff8516", // Label color when focused
          },
        },
      },
    },
  },
});

export default theme;
