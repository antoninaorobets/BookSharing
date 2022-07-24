import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import { signUpApi } from '../api/userApi';
import {UserContext} from '../context/user' 

export default function SignUp() {
    const {setUser} = useContext(UserContext) 
    const emptyForm = {
        "name": '',
        "email": '',
        "password": '',
        "password_confirmation": ''
    }
    const [formData, setFormData] = useState(emptyForm)
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState('')
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const onSuccessSignUp = (user) => {
        setFormData(emptyForm)
        setUser(user)
        navigate('/')
    }
    const onFailedSignUp = (error) => {
        setFormData(emptyForm)
        setErrorMessage(error.errors)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (formData.password.length >= 8) {
            signUpApi(formData, onSuccessSignUp, onFailedSignUp)
        } else {
            setErrorMessage("Password mast bee at list 8 characters long")
            setFormData(emptyForm)
        }
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
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} >
                            <TextField
                                autoFocus
                                required
                                fullWidth
                                id="name"
                                label="Name"
                                name="name"
                                autoComplete="given-name"
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                                onChange={handleChange}
                            />
                        </Grid><Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password_confirmation"
                                label="Confirm Password"
                                type="password"
                                id="password_confirmation"
                                autoComplete="new-password"
                                onChange={handleChange}
                            />
                        </Grid>
                    </Grid>
                    {errorMessage ? <Alert severity="error"> {errorMessage}</Alert> : null}
                    <Button
                        type="submit"
                        size="large"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link to="/login" variant="body2" style={{ color: "#827397" }}>
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}