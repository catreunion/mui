import React from "react"
import { Typography, Link } from "@mui/material"

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

export default Copyright
