import React from "react"
import { Box, ButtonGroup, Button } from "@mui/material"

const ButtonGp = () => {
  const buttons = [<Button key={1}>1</Button>, <Button key={2}>2</Button>, <Button key={3}>3</Button>]

  return (
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
      <ButtonGroup variant="contained" size="medium" color="secondary" aria-label="a group of 3 buttons">
        {buttons}
      </ButtonGroup>
      <ButtonGroup variant="contained" size="large" color="success" aria-label="a group of 3 buttons">
        {buttons}
      </ButtonGroup>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          "& > *": {
            m: 1
          }
        }}
      >
        <ButtonGroup orientation="vertical" variant="outlined" aria-label="a group of 3 buttons">
          {buttons}
        </ButtonGroup>
        <ButtonGroup orientation="vertical" variant="contained" aria-label="a group of 3 buttons">
          {buttons}
        </ButtonGroup>
        <ButtonGroup orientation="vertical" variant="text" aria-label="a group of 3 buttons">
          {buttons}
        </ButtonGroup>
      </Box>
    </Box>
  )
}

export default ButtonGp
