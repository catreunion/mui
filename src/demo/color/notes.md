Color

Convey meaning through color. Out of the box you get access to all colors in the Material Design guidelines.

The Material Design color system can be used to create a color theme that reflects your brand or style.

Picking colors

Official color tool

The Material Design team has also built an awesome palette configuration tool:
material.io/resources/color/
. This can help you create a color palette for your UI, as well as measure the accessibility level of any color combination.

Official color tool

The output can be fed into createTheme() function:

To test a material.io/design/color color scheme with the MUI documentation, simply select colors using the palette and sliders below. Alternatively, you can enter hex values in the Primary and Secondary text fields.

```js
{
  palette: {
    primary: blue,
    secondary: pink,
  },
}
```

The output shown in the color sample can be pasted directly into a createTheme() function (to be used with ThemeProvider):

```js
import { createTheme } from "@mui/material/styles"
import { purple } from "@mui/material/colors"

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500]
    },
    secondary: {
      main: "#f44336"
    }
  }
})
```

Copy
Only the main shades need be provided (unless you wish to further customize light, dark or contrastText), as the other colors will be calculated by createTheme(), as described in the Theme customization section.

If you are using the default primary and / or secondary shades then by providing the color object, createTheme() will use the appropriate shades from the material color for main, light and dark.

Tools by the community
mui-theme-creator: A tool to help design and customize themes for the MUI component library. Includes basic site templates to show various components and how they are affected by the theme
Material palette generator: The Material palette generator can be used to generate a palette for any color you input.
2014 Material Design color palettes
These color palettes, originally created by Material Design in 2014, are comprised of colors designed to work together harmoniously, and can be used to develop your brand palette. To generate your own harmonious palettes, use the palette generation tool.

Important Terms
Palette: A palette is a collection of colors, i.e. hues and their shades. MUI provides all colors from the Material Design guidelines. This color palette has been designed with colors that work harmoniously with each other.
Hue & Shade: A single color within the palette is made up of a hue such as "red", and shade, such as "500". "red 50" is the lightest shade of red (pink!), while "red 900" is the darkest. In addition, most hues come with "accent" shades, prefixed with an A.
Color palette
Given a HUE (red, pink, etc.) and a SHADE (500, 600, etc.) you can import the color like this:

```js
import { red } from "@mui/material/colors"
const color = red[500]
```

Examples
For instance, you can refer to complementary primary and accent colors, "red 500" and "purple A200" like so:

```js
import { purple, red } from "@mui/material/colors"

const primary = red[500] // #f44336
const accent = purple["A200"] // #e040fb
const accent = purple.A200 // #e040fb (alternative method)
```
