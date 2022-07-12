import React from 'react'
import { Box, Typography } from '@mui/material'
function PlaceholderIsLoading() {
  return (
    <Box
    sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6,
    }}
>
    <Typography component="h1"  variant="h4" align="center" color="text.secondary" paragraph sx={{ marginBottom: 4}}>
      List is loading ...
    </Typography>
    </Box>
  )
}

export default PlaceholderIsLoading