import React from "react"
import { Button, ButtonGroup, Box } from "@mui/material"

const ButtonGp = () => {
  const buttons = [<Button key="one">One</Button>, <Button key="two">Two</Button>, <Button key="three">Three</Button>]

  return (
    <>
      <ButtonGroup variant="contained" aria-label="a group of 3 buttons">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& > *": {
            m: 1
          }
        }}
      >
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <ButtonGroup variant="text" aria-label="text button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& > *": {
            m: 1
          }
        }}
      >
        <ButtonGroup size="small" aria-label="a group of 3 buttons">
          {buttons}
        </ButtonGroup>
        <ButtonGroup color="secondary" aria-label="a group of 3 buttons">
          {buttons}
        </ButtonGroup>
        <ButtonGroup size="large" aria-label="a group of 3 buttons">
          {buttons}
        </ButtonGroup>
      </Box>

      <Box
        sx={{
          display: "flex",
          "& > *": {
            m: 1
          }
        }}
      >
        <ButtonGroup orientation="vertical" aria-label="a group of 3 buttons">
          {buttons}
        </ButtonGroup>
        <ButtonGroup orientation="vertical" variant="contained" aria-label="a group of 3 buttons">
          {buttons}
        </ButtonGroup>
        <ButtonGroup orientation="vertical" variant="text" aria-label="a group of 3 buttons">
          {buttons}
        </ButtonGroup>
      </Box>
    </>
  )
}

export default ButtonGp
