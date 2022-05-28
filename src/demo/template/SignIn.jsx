import React from "react"
import { Avatar, Typography, Container, Checkbox, Button, Link, Stack, Box, TextField, FormControlLabel } from "@mui/material"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"

const Copyright = () => {
  return (
    <Typography sx={{ p: 2 }} variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        MUI
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  )
}

const SignIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    console.log({
      email: data.get("email"),
      password: data.get("password")
    })
  }

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          my: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Avatar sx={{ bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">Sign in</Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ my: 1 }} noValidate>
          <TextField margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus />

          <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" />

          <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />

          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Sign In
          </Button>

          <Stack sx={{ py: 4 }} direction="row" justifyContent="space-around">
            <Link href="#" variant="body2">
              Forgot password?
            </Link>

            <Link href="#" variant="body2">
              Sign Up
            </Link>
          </Stack>
        </Box>
      </Box>

      <Copyright />
    </Container>
  )
}

export default SignIn
