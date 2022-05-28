import React from "react"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { CssBaseline, Box } from "@mui/material"

const theme = createTheme({
  palette: {
    primary: {
      light: "#6ec6ff",
      main: "#2196f3",
      dark: "#0069c0",
      contrastText: "#fff"
    },
    secondary: {
      light: "#62eeff",
      main: "#00bbd3",
      dark: "#008ba2",
      contrastText: "#000"
    }
  }
})

const Color = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ width: 300, height: 300, bgcolor: "secondary.main" }}></Box>
    </ThemeProvider>
  )
}

export default Color
