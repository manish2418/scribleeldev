import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#9c27b0",
    },
  },
  typography: {
    fontFamily: "'Bricolage Grotesque', sans-serif",
    h1: {
      fontSize: "4.8rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "4.25rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.125rem",
      fontWeight: 500,
    },
    subtitle1:{
      fontSize:"3.75rem",
      fontWeight:800,
    },
     subtitle2:{
      fontSize:"1rem",
      fontWeight:400,
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "none",
          padding: "8px 20px",
        },
      },
      variants: [
        {
          props: { variant: "primary" },
          style: {
            backgroundColor: "#1976d2",
            color: "#fff",
            ":hover": {
              backgroundColor: "#145ca1",
            },
          },
        },
        {
          props: { variant: "secondary" },
          style: {
            backgroundColor: "#9c27b0",
            color: "#fff",
            ":hover": {
              backgroundColor: "#7b1f8b",
            },
          },
        },
      ],
    },
  },
});

export default theme;
