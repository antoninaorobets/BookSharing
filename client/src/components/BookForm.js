import React, { useState } from 'react'
import { Container, Divider,  Button, Box, Alert, Typography, TextField, CssBaseline } from '@mui/material';
import {postBookApi, editBookApi} from '../api/bookApi'

function BookForm({user, setShowForm, editBook, editMode, setEditMode, SetEditBook, onSuccessCreate, onSuccessEdit}) {
    const [errorMessage, setErrorMessage] = useState('')
    const [title, setTitle] = useState(editBook.title)
    const [author, setAuthor] = useState(editBook.author)
    const [description, setDescription] = useState(editBook.description)
    

    let formTexts
    if (editMode) {
        formTexts = {
            formTitle: "Edit Book",
            formSubmit : "Save Changes", 
            formClose: "Cancel"
        }
    } else {
        formTexts = {
            formTitle: "Add New Book",
            formSubmit: "Add Book", 
            formClose: "Cancel"
        }
    }
    const onError = (error)=> {
        const empty_error = <Alert severity="error" sx={{p: 1, m: 2}}> Please enter book's Title and Author</Alert>
        console.error(error)
        setErrorMessage(empty_error)
    }
  
    async function  handleSubmit(e)  {
        e.preventDefault()
        const formData = {
                    "title": title,
                    "author": author,
                    "description":description
                }
        if (editMode) {
            editBookApi(user, editBook.id, formData, onSuccessEdit, onError)          
        } else {
            postBookApi(user, formData, onSuccessCreate, onError)          
        }
        e.target.reset()
    }

    return (
        <Container component="main" maxWidth="xm">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 6,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h6" variant="h5" color='#5F5B5B'>
                    {formTexts.formTitle}
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        size="small"
                        fullWidth
                        label="Book Title"
                        autoFocus
                        onChange={(e)=>setTitle(e.target.value)}
                        defaultValue={editBook.title}
                       
                    />
                    <TextField
                        margin="normal"
                        size="small"
                        fullWidth
                        label="Book Author"
                        onChange={(e)=>setAuthor(e.target.value)}
                        value={author}
                    />
                    <TextField
                        margin="normal"
                        label="Description"
                        multiline
                        fullWidth
                        rows={3}
                        onChange={(e)=>setDescription(e.target.value)}
                        defaultValue={editBook.description}
                    />
                    {/* {errorMessage ? <Alert severity="error"> {errorMessage.errors}</Alert> : null} */}
                   {errorMessage}
                    <Button
                        type="submit"
                        fullWidth
                        size="large"
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        {formTexts.formSubmit}
                    </Button>
                </Box>
            </Box>

            <Button style={{ display: 'flex', margin: "auto", }} size="small" onClick={() => { 
                setShowForm(false); 
                setEditMode(false);
                SetEditBook({
                    "id": '',
                    "title": "",
                    "author": "",
                    "description": ""
                })
                 }}>
                {formTexts.formClose}
            </Button>
            <Divider />
        </Container >
    );

}

export default BookForm