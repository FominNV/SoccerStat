import { createTheme } from "@mui/material/styles"
import { Theme } from "@mui/material"

export const lightTheme: Theme = createTheme({
  palette: {
    primary: {
      main: "#CFF4CF",
      dark: "#aafbc6",
      contrastText: "rgba(0, 0, 0, 0.5)",
    },
    secondary: {
      main: "rgb(12, 92, 157)",
      light: "#72b0e5",
    },
    success: {
      main: "#81c784",
    },
    error: {
      main: "#f44336",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: {
      default: "#fafafa",
      paper: "#fff",
    },

    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      disabled: "rgba(0, 0, 0, 0.38)",
      secondary: "rgba(169,102,6,0.54)",
    },
  },
})
