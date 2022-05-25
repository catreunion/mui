import React from "react"
import { styled } from "@mui/material/styles"
import { Stack, Button, IconButton, Box, FormControlLabel, Switch } from "@mui/material"

import PhotoCamera from "@mui/icons-material/Delete"
import DeleteIcon from "@mui/icons-material/Delete"
import SendIcon from "@mui/icons-material/Send"
import AlarmIcon from "@mui/icons-material/Alarm"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"
import Fingerprint from "@mui/icons-material/Fingerprint"
import SaveIcon from "@mui/icons-material/Save"

import LoadingButton from "@mui/lab/LoadingButton"

const Input = styled("input")({
  display: "none"
})

const AdvButtons = () => {
  const [loading, setLoading] = React.useState(true)

  function handleClick() {
    setLoading(true)
  }

  return (
    <>
      <Stack direction="row" alignItems="center" spacing={2}>
        <label htmlFor="contained-button-file">
          <Input accept="image/*" id="contained-button-file" multiple type="file" />
          <Button variant="contained" component="span">
            Upload
          </Button>
        </label>

        <label htmlFor="icon-button-file">
          <Input accept="image/*" id="icon-button-file" type="file" />
          <IconButton color="primary" aria-label="upload picture" component="span">
            <PhotoCamera />
          </IconButton>
        </label>
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
        <IconButton disabled color="primary" aria-label="delete it">
          <DeleteIcon />
        </IconButton>
        <IconButton color="secondary" aria-label="set alarm">
          <AlarmIcon />
        </IconButton>
        <IconButton color="primary" aria-label="add to cart">
          <AddShoppingCartIcon />
        </IconButton>
      </Stack>

      <Stack direction="row" spacing={2} alignItems="center">
        <IconButton size="small" aria-label="delete">
          <DeleteIcon fontSize="small" />
        </IconButton>
        <IconButton size="large" aria-label="delete">
          <DeleteIcon />
        </IconButton>
        <IconButton size="large" aria-label="delete">
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </Stack>

      <Stack direction="row" spacing={2}>
        <IconButton color="secondary" aria-label="fingerprint">
          <Fingerprint />
        </IconButton>
        <IconButton color="success" aria-label="fingerprint">
          <Fingerprint />
        </IconButton>
      </Stack>

      <Stack direction="row" spacing={2}>
        <LoadingButton loading variant="outlined">
          Submit
        </LoadingButton>
        <LoadingButton loading loadingIndicator="Loading..." variant="outlined">
          Fetch data
        </LoadingButton>
        <LoadingButton loading loadingPosition="start" startIcon={<SaveIcon />} variant="outlined">
          Save
        </LoadingButton>
      </Stack>

      <Box>
        <FormControlLabel
          sx={{
            display: "block"
          }}
          control={<Switch checked={loading} onChange={() => setLoading(!loading)} name="loading" color="primary" />}
          label="Loading"
        />
        <Box sx={{ "& > button": { m: 1 } }}>
          <LoadingButton size="small" onClick={handleClick} loading={loading} variant="outlined" disabled>
            disabled
          </LoadingButton>
          <LoadingButton size="small" onClick={handleClick} loading={loading} loadingIndicator="Loading..." variant="outlined">
            Fetch data
          </LoadingButton>
          <LoadingButton size="small" onClick={handleClick} endIcon={<SendIcon />} loading={loading} loadingPosition="end" variant="contained">
            Send
          </LoadingButton>
          <LoadingButton size="small" color="secondary" onClick={handleClick} loading={loading} loadingPosition="start" startIcon={<SaveIcon />} variant="contained">
            Save
          </LoadingButton>
        </Box>

        <Box sx={{ "& > button": { m: 1 } }}>
          <LoadingButton onClick={handleClick} loading={loading} variant="outlined" disabled>
            disabled
          </LoadingButton>
          <LoadingButton onClick={handleClick} loading={loading} loadingIndicator="Loading..." variant="outlined">
            Fetch data
          </LoadingButton>
          <LoadingButton onClick={handleClick} endIcon={<SendIcon />} loading={loading} loadingPosition="end" variant="contained">
            Send
          </LoadingButton>
          <LoadingButton color="secondary" onClick={handleClick} loading={loading} loadingPosition="start" startIcon={<SaveIcon />} variant="contained">
            Save
          </LoadingButton>
        </Box>
      </Box>
    </>
  )
}

export default AdvButtons
