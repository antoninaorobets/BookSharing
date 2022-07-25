import React, {useContext} from 'react'
import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { logoutApi } from '../api/userApi';
import {UserContext} from '../context/user' 


function AppTopBar() {
  const { user, setUser } = useContext(UserContext)

  const linkStyle = ({ isActive }) => ({
    color: isActive ?'#827397' : "#5F5B5B",
    textTransform: "uppercase",
    fontWeight: isActive ? '800' :"500",
    fontSize:  isActive ? "1rem" : "0.875rem",
    lineHeight: "1.75",
    letterSpacing: "0.02857em",
    margin: "1em",
  })

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
        {user
          ? <nav>
            <NavLink
              style={linkStyle}
              data-testid = "my-books"
              className = "my-books"
              to="/"
            >
              My Books
            </NavLink>
            <NavLink
              style={linkStyle}
              data-testid = "shared"
              className = "shared"
              to="/shared"
            >
              Shared with me
            </NavLink>
            <NavLink
              style={linkStyle}
              className = "requests"
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
              You logged in as {user.name}
            </NavLink>
            <Button   
              variant="outlined" 
              sx={{ my: 1, mx: 1.5 }} 
              onClick={(e) => logoutApi(user, setUser)} > 
              Logout 
            </Button>
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