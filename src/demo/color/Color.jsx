import React from "react"
import { Box, Grid, Typography } from "@mui/material"

const Color = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ width: 100, height: 100, bgcolor: "primary.main" }}>PM</Box>
        <Box sx={{ width: 100, height: 100, bgcolor: "secondary.main" }}>PL</Box>
        <Box sx={{ width: 100, height: 100, bgcolor: "error.main" }}>PD</Box>
      </Box>

      <Typography variant="h2">
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Box sx={{ bgcolor: "primary.main", color: "primary.contrastText", p: 2 }}>primary.main</Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Box sx={{ bgcolor: "secondary.main", color: "primary.contrastText", p: 2 }}>secondary.main</Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Box sx={{ bgcolor: "error.main", color: "primary.contrastText", p: 2 }}>error.main</Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Box sx={{ bgcolor: "warning.main", color: "primary.contrastText", p: 2 }}>warning.main</Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Box sx={{ bgcolor: "info.main", color: "primary.contrastText", p: 2 }}>info.main</Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Box sx={{ bgcolor: "success.main", color: "primary.contrastText", p: 2 }}>success.main</Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Box sx={{ bgcolor: "text.primary", color: "primary.contrastText", p: 2 }}>text.primary</Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Box sx={{ bgcolor: "text.secondary", color: "primary.contrastText", p: 2 }}>text.secondary</Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Box sx={{ bgcolor: "text.disabled", color: "primary.contrastText", p: 2 }}>text.disabled</Box>
          </Grid>
        </Grid>
      </Typography>
    </>
  )
}

export default Color
