import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import { NavLink, Link } from 'react-router-dom'
import InsertEmoticonOutlinedIcon from '@mui/icons-material/InsertEmoticonOutlined';


function AppTopBar({ user, setUser }) {

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
    fetch('/api/logout',{
      method: "DELETE",
      header: {"Content-Type": "application/json"},
      body: JSON.stringify({user_id: user.id})
    }).then(responce => {
      if (responce.ok){
        responce.json().then(data => console.log("logged out", data))
        setUser()
      }
      else {
        responce.json().then(error => console.error(error))
      }
    })
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
        {user
          ? <nav>
            <NavLink
              style={linkStyle}
              data-testid = "my-books"
              to="/"
            >
              My Books
            </NavLink>
            <NavLink
              style={linkStyle}
              data-testid = "shared"
              to="/shared"
            >
              Shared with me
            </NavLink>
            <NavLink
              style={linkStyle}
              data-testid = "requests"
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