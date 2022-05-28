import React from "react"
// import { borders } from "@mui/system"
import { Box } from "@mui/material"

const commonStyles1 = {
  bgcolor: "background.paper",
  m: 1,
  borderColor: "text.primary",
  width: "5rem",
  height: "5rem"
}

const commonStyles2 = {
  border: 1,
  bgcolor: "background.paper",
  m: 1,
  borderColor: "text.primary",
  width: "5rem",
  height: "5rem"
}

const Borders = () => {
  return (
    <>
      {/* Subtractive */}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ ...commonStyles1, border: 1 }} />
        <Box sx={{ ...commonStyles1, borderTop: 1 }} />
        <Box sx={{ ...commonStyles1, borderRight: 1 }} />
        <Box sx={{ ...commonStyles1, borderBottom: 1 }} />
        <Box sx={{ ...commonStyles1, borderLeft: 1 }} />
      </Box>

      {/* Subtractive */}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ ...commonStyles2, border: 0 }} />
        <Box sx={{ ...commonStyles2, borderTop: 0 }} />
        <Box sx={{ ...commonStyles2, borderRight: 0 }} />
        <Box sx={{ ...commonStyles2, borderBottom: 0 }} />
        <Box sx={{ ...commonStyles2, borderLeft: 0 }} />
      </Box>

      {/* Border Color */}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ ...commonStyles2, borderColor: "primary.main" }} />
        <Box sx={{ ...commonStyles2, borderColor: "secondary.main" }} />
        <Box sx={{ ...commonStyles2, borderColor: "error.main" }} />
        <Box sx={{ ...commonStyles2, borderColor: "grey.500" }} />
        <Box sx={{ ...commonStyles2, borderColor: "text.primary" }} />
      </Box>

      {/* Border-radius */}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ ...commonStyles2, borderRadius: "50%" }} />
        <Box sx={{ ...commonStyles2, borderRadius: 1 }} />
        <Box sx={{ ...commonStyles2, borderRadius: "16px" }} />
      </Box>
    </>
  )
}

export default Borders
