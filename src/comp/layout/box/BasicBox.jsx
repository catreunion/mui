import React from "react"
import { styled } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { Paper, Box, Grid, Container } from "@mui/material"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary
}))

const BasicBox = () => {
  return (
    <>
      <CssBaseline />

      <Box
        sx={{
          width: 300,
          height: 300,
          backgroundColor: "primary.dark",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7]
          }
        }}
      />

      <Container maxWidth="xs">
        <Box sx={{ bgcolor: "#cfe8fc", height: "10vh" }} />
      </Container>

      <Container maxWidth="sm">
        <Box sx={{ bgcolor: "#cfe8fc", height: "10vh" }} />
      </Container>

      <Container maxWidth="md">
        <Box sx={{ bgcolor: "#cfe8fc", height: "10vh" }} />
      </Container>

      <Container maxWidth="lg">
        <Box sx={{ bgcolor: "#cfe8fc", height: "10vh" }} />
      </Container>

      <Container maxWidth="xl">
        <Box sx={{ bgcolor: "#cfe8fc", height: "10vh" }} />
      </Container>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Item>xs=8</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={8}>
            <Item>xs=8</Item>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={8}>
            <Item>xs=6 md=8</Item>
          </Grid>
          <Grid item xs={6} md={4}>
            <Item>xs=6 md=4</Item>
          </Grid>
          <Grid item xs={6} md={4}>
            <Item>xs=6 md=4</Item>
          </Grid>
          <Grid item xs={6} md={8}>
            <Item>xs=6 md=8</Item>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default BasicBox
