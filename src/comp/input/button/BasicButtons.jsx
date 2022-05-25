import React from "react"
import { Stack, Button, IconButton } from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import SendIcon from "@mui/icons-material/Send"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"
import AlarmIcon from "@mui/icons-material/Alarm"
import Fingerprint from "@mui/icons-material/Fingerprint"

const BasicButtons = () => {
  return (
    <>
      <Stack direction="row" spacing={2}>
        <Button variant="contained">1</Button>
        <Button variant="contained" disabled>
          2
        </Button>
        <Button variant="contained" href="https://google.com">
          3
        </Button>
        <Button variant="contained" color="secondary">
          4
        </Button>
        <Button variant="contained" color="success">
          5
        </Button>
        <Button variant="contained" color="error">
          6
        </Button>
      </Stack>

      <Stack direction="row" spacing={2}>
        <Button variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </Stack>

      <Stack direction="row" spacing={2}>
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
        <IconButton color="primary" aria-label="add to cart">
          <AddShoppingCartIcon />
        </IconButton>
        <IconButton color="secondary" aria-label="set alarm">
          <AlarmIcon />
        </IconButton>
        <IconButton disabled aria-label="delete it">
          <DeleteIcon />
        </IconButton>
        <IconButton color="success" aria-label="leave a fingerprint">
          <Fingerprint />
        </IconButton>
        <IconButton color="error" aria-label="leave a fingerprint">
          <Fingerprint />
        </IconButton>
      </Stack>

      <Stack direction="row" spacing={2} alignItems="center">
        <IconButton size="small" aria-label="delete">
          <DeleteIcon fontSize="small" />
        </IconButton>
        <IconButton size="large" aria-label="delete">
          <DeleteIcon fontSize="small" />
        </IconButton>
        <IconButton size="small" aria-label="delete">
          <DeleteIcon fontSize="large" />
        </IconButton>
        <IconButton size="large" aria-label="delete">
          <DeleteIcon fontSize="large" />
        </IconButton>
      </Stack>
    </>
  )
}

export default BasicButtons
