import React from 'react'
import {AppBar, Toolbar, Typography,Button} from '@mui/material'
import { NavLink, Link} from 'react-router-dom'


function AppTopBar() {
  const linkStyle = {
    "textTransform": "uppercase", 
    "color": "rgba(0, 0, 0, 0.87)",
    "fontWeight": "500",
    "fontSize":" 0.875rem",
    "lineHeight": "1.75",
    "letterSpacing": "0.02857em",
    margin: "1em"}
  return (
    <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="#5F5B5B" noWrap sx={{ flexGrow: 1 }}>
            Books Sharing
          </Typography>
          <nav>
       
            <NavLink             
              style={linkStyle}
              to="/"
              sx={{ my: 1, mx: 1.5 }}
            >
             My Books
            </NavLink>
            <NavLink              
              style={linkStyle}
              to="/"
              sx={{ my: 1, mx: 1.5 }}
            >
              Shared with me
            </NavLink>
            <NavLink
              style={linkStyle}
             to='/'
              sx={{ my: 1, mx: 1.5 }}
            >
              Requests
            </NavLink>
            </nav>
            <NavLink to="/login" style={{ textDecoration: 'none' }}>
              <Button variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                Login
              </Button>
            </NavLink>
        </Toolbar>
      </AppBar>
  )
}

export default AppTopBar