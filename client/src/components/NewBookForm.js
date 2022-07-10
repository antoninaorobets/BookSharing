import React, { useState } from 'react'
import { Container, Avatar, Button, Grid, Box, Alert, Typography, TextField, CssBaseline } from '@mui/material';
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import { useNavigate, Link } from 'react-router-dom';

function NewBookForm() {
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        description: ''
    })
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState('')

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // fetch('/api/login', {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(formData)
        // }).then(responce => {
        //     if (responce.ok) {
        //         responce.json().then(user => {
        //             setFormData()
        //             loginUser(user)
        //             navigate('/')
        //         })
        //     } else {
        //         responce.json().then(error => setErrorMessage(error))
        //     }
        // })
        e.target.reset()
    }

    return (

        <Container component="main" maxWidth="xm">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h6" variant="h5" color='#5F5B5B'>
                    Add New Book
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        size="small"
                        fullWidth
                        label="Book Title"
                        name="title"
                        autoFocus
                        onChange={handleChange}
                    />
                    <TextField
                        margin="normal"
                        size="small"
                        fullWidth
                        name="author"
                        label="Bool Author"
                        onChange={handleChange}
                    />
                    <TextField
                        margin="normal"
                        label="Description"
                        name="description"
                        multiline
                        fullWidth
                        rows={3}
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
                        Add Book
                    </Button>
            </Box>
        </Box>
        </Container >
    );

}

export default NewBookForm