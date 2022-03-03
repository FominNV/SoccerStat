import { createTheme } from "@mui/material/styles"
import { Theme } from "@mui/material"

export const darkTheme: Theme = createTheme({
  palette: {
    primary: {
      main: "rgb(144, 170, 144)",
      dark: "#414e41",
      contrastText: "rgba(194,192,192,0.5)",
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
      default: "#383737",
      paper: "#424242",
    },

    text: {
      primary: "#FFF",
      disabled: "rgba(255, 255, 255, 0.5)",
      secondary: "rgba(246,205,162,0.54)",
    },
  },
})
