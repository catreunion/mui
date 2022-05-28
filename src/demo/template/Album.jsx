import React from "react"
import { AppBar, Toolbar, Typography, Container, Stack, Button, Box, Grid, Card, CardMedia, CardContent, Link } from "@mui/material"
import CameraIcon from "@mui/icons-material/PhotoCamera"

const Copyright = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        MUI
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  )
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const Album = () => {
  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            album name
          </Typography>
        </Toolbar>
      </AppBar>

      <main>
        <Container
          sx={{
            maxWidth: "xs",
            bgcolor: "background.paper",
            pt: 6,
            pb: 3
          }}
        >
          <Typography variant="h2" align="center" color="text.primary" gutterBottom>
            album name
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            make it short and sweet, but not too short so folks don simply skip over it entirely
          </Typography>
          <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
            <Button variant="contained">Button 1</Button>
            <Button variant="outlined">Button 2</Button>
          </Stack>
        </Container>

        <Box sx={{ py: 8, px: 4 }}>
          <Grid spacing={2} container>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4} lg={3} xl={2}>
                <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                  <CardMedia
                    component="img"
                    sx={{
                      pt: 2
                    }}
                    image="https://source.unsplash.com/random"
                    alt="photo"
                  />

                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      Heading
                    </Typography>
                    <Typography>Description</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </main>

      <Box sx={{ bgcolor: "background.paper", p: 6 }}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary">
          Something here to give the footer a purpose
        </Typography>
        <Copyright />
      </Box>
    </>
  )
}

export default Album
