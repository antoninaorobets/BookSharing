import React, { useState } from 'react'

import { Container, Avatar, Button, Grid, Box, Alert, Typography, TextField, CssBaseline } from '@mui/material';
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import { useNavigate, Link } from 'react-router-dom';
import { logInApi } from '../api/userApi';

function Login({ loginUser }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  const onSuccessLogIn = (user) =>{
    setFormData()
    loginUser(user)
    navigate('/')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    logInApi (formData, onSuccessLogIn, setErrorMessage)
    e.target.reset()
  }

  return (

    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <MenuBookTwoToneIcon />
        </Avatar>
        <Typography component="h1" variant="h5" color='#5F5B5B'>
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange}
          />
          {errorMessage ? <Alert severity="error"> {errorMessage.errors}</Alert> : null}
          <Button
            type="submit"
            fullWidth
            size="large"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              {/* <Link href="#" variant="body2">
                  Forgot password?
                </Link> */}
            </Grid>
            <Grid item>
              <Link to="/signup" variant="body2" style={{ color: "#827397" }}>
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );

}

export default Login