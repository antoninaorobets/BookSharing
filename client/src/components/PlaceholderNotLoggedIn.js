import React from 'react'
import { Box, Typography } from '@mui/material'

function Placeholder() {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6,
      }}
    >
      <Typography align="center" component="h1"  variant="h4" color="text.secondary" paragraph sx={{ marginBottom: 4 }}>
        Please Log in
      </Typography>
    </Box>
  )
}

export default Placeholder