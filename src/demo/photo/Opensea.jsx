import React, { useState } from "react"
// import { NFTCard } from "./NFTCard"

import CssBaseline from "@mui/material/CssBaseline"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { Stack, Box, Grid, ImageList, ImageListItem, ImageListItemBar, ListSubheader, IconButton } from "@mui/material"
import LoadingButton from "@mui/lab/LoadingButton"
import SearchIcon from "@mui/icons-material/Search"
import InfoIcon from "@mui/icons-material/Info"

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

// const demoImages = [
//   {
//     img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
//     title: "Breakfast"
//   }
// ]

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`
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

      <ImageList sx={{ width: 500, height: 450 }}>
        {NFTs.map((NFT) => (
          <ImageListItem key={NFT.media[0].gateway}>
            <img src={`${NFT.media[0].gateway}?w=248&fit=crop&auto=format`} srcSet={`${NFT.media[0].gateway}?w=248&fit=crop&auto=format&dpr=2 2x`} alt={NFT.title} loading="lazy" />
            <ImageListItemBar title={NFT.title} subtitle={<span>by: {NFT.description?.substr(0, 150)}</span>} position="below" />
          </ImageListItem>
        ))}
      </ImageList>

      {/* <ImageListItem key={NFT.media[0].gateway}>
        <img src={`${NFT.media[0].gateway}?w=164&h=164&fit=crop&auto=format`} srcSet={`${NFT.media[0].gateway}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`} alt={NFT.title} loading="lazy" />
      </ImageListItem> */}

      {/* <Box sx={{ p: 2 }}>
        <Grid spacing={2} container>
          {NFTs.map((NFT) => (
            <NFTCard nft={NFT} key={NFT.media[0].gateway} />
          ))}
        </Grid>
      </Box> */}
    </ThemeProvider>
  )
}

export default Opensea
