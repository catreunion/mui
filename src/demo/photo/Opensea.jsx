import React, { useState } from "react"
import { NFTCard } from "./NFTCard"

import CssBaseline from "@mui/material/CssBaseline"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { Stack, Box, Grid } from "@mui/material"
import LoadingButton from "@mui/lab/LoadingButton"
import SearchIcon from "@mui/icons-material/Search"

const theme = createTheme()

theme.typography.h3 = {
  fontSize: "1.2rem",
  "@media (min-width:600px)": {
    fontSize: "1.5rem"
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2rem"
  }
}

const Opensea = () => {
  const collection = "0xD2109D2E8b7EcBa9290Ef339D8cFB93b10e8ef07"
  const [loading, setLoading] = useState(false)
  const [NFTs, setNFTs] = useState([])
  const { REACT_APP_ALCHEMY_MAINNET_KEY } = process.env

  const handleClick = () => {
    setLoading(true)
  }

  const fetchCollection = async () => {
    var requestOptions = {
      method: "GET"
    }

    const baseURL = `https://eth-mainnet.alchemyapi.io/v2/${REACT_APP_ALCHEMY_MAINNET_KEY}/getNFTsForCollection/`
    const fetchURL = `${baseURL}?contractAddress=${collection}&withMetadata=${"true"}`
    const collectedNFTs = await fetch(fetchURL, requestOptions).then((data) => data.json())
    setLoading(false)

    if (collectedNFTs) {
      setNFTs(collectedNFTs.nfts)
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Stack direction="column" alignItems="center" spacing={1}>
        <LoadingButton
          loading={loading}
          loadingPosition="start"
          startIcon={<SearchIcon />}
          onClick={() => {
            handleClick()
            fetchCollection()
          }}
          size="medium"
          variant="contained"
        >
          SEARCH
        </LoadingButton>
      </Stack>

      <Box sx={{ p: 2 }}>
        <Grid spacing={2} container>
          {NFTs.map((NFT) => (
            <NFTCard nft={NFT} key={NFT.media[0].gateway} />
          ))}
        </Grid>
      </Box>
    </ThemeProvider>
  )
}

export default Opensea
