import React from 'react'
import { Box, Typography, Button, Container } from '@mui/material'
import { NavLink } from 'react-router-dom'

function Placeholder() {
  return (
    <Box
    align="center" 
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6,
      }}
    >
 
      <Typography align="center" component="h6"  variant="h5" color="text.secondary" paragraph sx={{ marginBottom: 4 }}>
        Please Log in 
      </Typography>
      <Box component="span" sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <NavLink to="/login" style={{ textDecoration: 'none' }}>
        <Button direction="row"
            variant="outlined"
            size="medium"
            sx={{ pl: 8, pr: 8 }}
            >
            Login
        </Button>
     </NavLink>
    </Box>
    </Box>
  )
}

export default Placeholder