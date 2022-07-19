import React from 'react'
import { Box, Typography} from '@mui/material'

function FooterBar() {
  return (
    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
    <Typography color="text.secondary" variant="h6" align="center" gutterBottom>
    * * *
    </Typography>
    <Typography
      variant="subtitle1"
      align="center"
      color="text.secondary"
      component="p"
    >
      The Book Sharing application, 2022
    </Typography>

  </Box>


  )
}

export default FooterBar