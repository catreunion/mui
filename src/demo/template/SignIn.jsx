import React from "react"
import { Avatar, Typography, Checkbox, Button, Link, Stack, Box, TextField, FormControlLabel } from "@mui/material"
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
    <Box sx={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Stack
        sx={{
          mx: 4
        }}
        direction="column"
        alignItems="center"
      >
        <Avatar sx={{ bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">Sign in</Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ my: 1 }} noValidate>
          <TextField label="Email Address" autoComplete="email" margin="normal" autoFocus required fullWidth id="email" name="email" />

          <TextField label="Password" autoComplete="current-password" margin="normal" autoFocus required fullWidth id="password" name="password" />

          <Stack sx={{ py: 2 }} direction="row" justifyContent="space-between">
            <FormControlLabel label="Remember me" control={<Checkbox value="remember" color="primary" />} />

            <Button type="submit" variant="contained">
              Sign in
            </Button>
          </Stack>

          <Stack sx={{ p: 4 }} direction="row" justifyContent="space-between">
            <Link href="#" variant="body1">
              Forgot password?
            </Link>

            <Link href="#" variant="body1">
              Sign up
            </Link>
          </Stack>
        </Box>

        <Copyright />
      </Stack>
    </Box>
  )
}

export default SignIn
