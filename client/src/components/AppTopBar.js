import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import { NavLink, Link } from 'react-router-dom'
import InsertEmoticonOutlinedIcon from '@mui/icons-material/InsertEmoticonOutlined';


function AppTopBar({ isLoggedIn, user, onLogout }) {
  // const linkStyle = ({isActive})=> ({
  //   "textTransform": "uppercase",
  //   "color": isActive ? '#5F5B5B' : "rgba(0, 0, 0, 0.87)",
  //   "fontWeight": "500",
  //   "fontSize": " 0.875rem",
  //   "lineHeight": "1.75",
  //   "letterSpacing": "0.02857em",
  //   "margin": "1em",
    
  // })
  const linkStyle = ({ isActive }) => ({
    color: isActive ?'#827397' : "#5F5B5B",
    textTransform: "uppercase",
    fontWeight: isActive ? '800' :"500",
    fontSize:  isActive ? "1rem" : "0.875rem",
    lineHeight: "1.75",
    letterSpacing: "0.02857em",
    margin: "1em",
  })

  const handleLogout = (e) => {
    onLogout()
  }
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
        {isLoggedIn
          ? <nav>
            <NavLink
              style={linkStyle}
              to="/"
            >
              My Books
            </NavLink>
            <NavLink
              style={linkStyle}
              to="/shared"
            >
              Shared with me
            </NavLink>
            <NavLink
              style={linkStyle}
              to='/requests'
            >
              Requests
            </NavLink>
            <NavLink
              style={{
              "color": "#827397",
              "fontWeight": "500",
              "letterSpacing": "0.02857em",
              "fontSize": " 0.875rem",
              "marginLeft": "1rem",
              "textDecoration": 'none' }}
              to="/"
            >
              You loged in as {user.name}
            </NavLink>
            <Button variant="outlined" onClick={handleLogout} sx={{ my: 1, mx: 1.5 }}> Logout </Button>
          </nav>
          : <NavLink to="/login" style={{ textDecoration: 'none' }}>
              <Button variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                Login
              </Button>
          </NavLink>
        }
      </Toolbar>
    </AppBar>
  )
}

export default AppTopBar