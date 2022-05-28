import React from "react"
import { Grid, Stack, Avatar, Typography, Box, TextField, FormControlLabel, Checkbox, Button, Link } from "@mui/material"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Copyright from "./comp/Copyright"

const SignInSide = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    console.log({
      email: data.get("email"),
      password: data.get("password")
    })
  }

  return (
    <Grid container sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
          // backgroundColor: (t) => (t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900])
        }}
      />

      <Grid item xs={12} sm={8} md={5} margin="auto">
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
        </Stack>

        <Copyright sx={{ mt: 5 }} />
      </Grid>
    </Grid>
  )
}

export default SignInSide
