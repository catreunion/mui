import React, { useState } from "react"
import { styled } from "@mui/material/styles"
import { Box, FormControlLabel, Switch, Stack, Button, IconButton } from "@mui/material"

import PhotoCamera from "@mui/icons-material/PhotoCamera"
import SendIcon from "@mui/icons-material/Send"
import SaveIcon from "@mui/icons-material/Save"

import LoadingButton from "@mui/lab/LoadingButton"

const Input = styled("input")({
  display: "none"
})

const AdvButtons = () => {
  const [loading, setLoading] = useState(false)

  const handleClick = () => {
    setLoading(true)
  }

  return (
    <>
      <Box>
        {/* <FormControlLabel
          sx={{
            display: "block"
          }}
          control={<Switch checked={loading} onChange={() => setLoading(!loading)} color="primary" />}
          label="loading..."
        /> */}

        <Box sx={{ "& > button": { m: 1 } }}>
          <LoadingButton size="large" onClick={handleClick} loading={loading} variant="outlined" disabled>
            Disabled
          </LoadingButton>
          <LoadingButton size="large" onClick={handleClick} loading={loading} variant="outlined" loadingIndicator="Loading...">
            Fetch Data
          </LoadingButton>
          <LoadingButton size="large" onClick={handleClick} loading={loading} variant="contained" loadingPosition="start" startIcon={<SaveIcon />} color="secondary">
            Save
          </LoadingButton>
          <LoadingButton size="large" onClick={handleClick} loading={loading} variant="contained" loadingPosition="end" endIcon={<SendIcon />}>
            Send
          </LoadingButton>
        </Box>
      </Box>
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
    </>
  )
}

export default AdvButtons
