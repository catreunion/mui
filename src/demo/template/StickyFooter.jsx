import React from "react"
import { Box, Typography, Container, Link } from "@mui/material"

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  )
}

const StickyFooter = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh"
      }}
    >
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Typography variant="h2" gutterBottom>
          Sticky footer
        </Typography>

        <Typography variant="h5" gutterBottom>
          Pin a footer to the bottom of the viewport. The footer will move as the main element of the page grows.
        </Typography>

        <Typography variant="body1">Sticky footer placeholder</Typography>
      </Container>

      <Box
        component="footer"
        sx={{
          p: 3,
          mt: "auto",
          backgroundColor: (theme) => (theme.palette.mode === "light" ? theme.palette.grey[200] : theme.palette.grey[800])
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">My sticky footer can be found here.</Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  )
}

export default StickyFooter
