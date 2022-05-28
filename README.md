The sx prop

- sx keys are mapped to specific properties of the theme

```js
import * as React from "react"
import { Box, ThemeProvider, createTheme } from "@mui/system"

const theme = createTheme({
  palette: {
    background: {
      paper: "#fff"
    },
    text: {
      primary: "#173A5E",
      secondary: "#46505A"
    },
    action: {
      active: "#001E3C"
    },
    success: {
      dark: "#009688"
    }
  }
})

export default function Example() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          bgcolor: "background.paper",
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: 300
        }}
      >
        <Box sx={{ color: "text.secondary" }}>Sessions</Box>
        <Box sx={{ color: "text.primary", fontSize: 34, fontWeight: "medium" }}>98.3 K</Box>
        <Box
          sx={{
            color: "success.dark",
            display: "inline",
            fontWeight: "bold",
            mx: 0.5,
            fontSize: 14
          }}
        >
          +18.77%
        </Box>
        <Box sx={{ color: "text.secondary", display: "inline", fontSize: 14 }}>vs. last week</Box>
      </Box>
    </ThemeProvider>
  )
}
```

- [Borders]()

  - `<Box sx={{ border: 1 }} />`

  - `<Box sx={{ borderColor: 'primary.main' }} /> `

  - `<Box sx={{ borderRadius: 2 }} />`

- [Display]() : `<Box sx={{ displayPrint: 'none' }} />`

- [Grid]() : `<Box sx={{ gap: 2 }} />`

- [Palette]()

  - `<Box sx={{ color: 'primary.main' }} />`

  - `<Box sx={{ bgcolor: 'primary.main' }} />`

- [Positions]() : `<Box sx={{ zIndex: 'tooltip' }} />`

- [Shadows]() : `<Box sx={{ boxShadow: 1 }} />`

- [Sizing]()

  - `<Box sx={{ width: 1/2 }} />`

  - `<Box sx={{ width: 20 }} />`

- [Spacing]() : `<Box sx={{ margin: 2 }} />`

- [Typography]()

  - `<Box sx={{ fontWeight: 'fontWeightLight' }} />`

  - `<Box sx={{ fontWeight: 'light' }} />`

  - `<Box sx={{ typography: 'body1' }} />`

- Callback Values

  - Each property in the sx prop can receive a **function callback** as a value. This is useful when you want to use the theme for calculating some value.

  - `<Box sx={{ height: (theme) => theme.spacing(10) }} />`

```js
<Box
  sx={(theme) => ({
    ...theme.typography.body,
    color: theme.palette.primary.main
  })}
/>
```

- Array values

```js
<Box
  sx={[
    {
      "&:hover": {
        color: "red",
        backgroundColor: "white"
      }
    },
    foo && {
      "&:hover": { backgroundColor: "grey" }
    },
    bar && {
      "&:hover": { backgroundColor: "yellow" }
    }
  ]}
/>
```

```js
<Box
  sx={[
    { mr: 2, color: "red" },
    (theme) => ({
      "&:hover": {
        color: theme.palette.primary.main
      }
    })
  ]}
/>
```

MUI comes with dozens of ready-to-use components in the core. These components are an incredible starting point but when it comes to making your site stand out with a custom design, it can be simpler to start from an unstyled state. Introducing the system:

The system lets you quickly build custom UI components leveraging the values defined in your theme.

====

Too many type sizes and styles at once can spoil any layout. A typographic scale has a limited set of type sizes that work well together along with the layout grid.

- [theme customization]()

- Fontsource can be configured to load specific subsets, weights and styles. MUI default typography configuration only relies on 300, 400, 500, and 700 font weights.

===

- Image lists display a collection of images in an organized grid

  - Standard image lists are best for items of equal importance. They have a uniform container size, ratio, and spacing.

  - Quilted image lists emphasize certain items over others in a collection. They create hierarchy using varied container sizes and ratios.

  - Woven image lists use alternating container ratios to create a rhythmic layout. A woven image list is best for browsing peer content.

  - Image list with title bars : the use of the ImageListItemBar to add an overlay to each item. The overlay can accommodate a title, subtitle and secondary action - in this example an IconButton.

```js
export default function TitlebarBelowImageList() {
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img src={`${item.img}?w=248&fit=crop&auto=format`} srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`} alt={item.title} loading="lazy" />
          <ImageListItemBar title={item.title} subtitle={<span>by: {item.author}</span>} position="below" />
        </ImageListItem>
      ))}
    </ImageList>
  )
}
```
