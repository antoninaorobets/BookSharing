import { Grid, Box, Button, Divider, Typography } from '@mui/material'
import Stack from '@mui/material/Stack';
import React, { useEffect, useState } from 'react'
import Book from './Book'
import Container from '@mui/material/Container';
import BookForm from './BookForm'
import BooksControls from './BooksControls'
import TextField from '@mui/material/TextField';
import {deleteBookApi} from '../api/bookApi'

function List({ user }) {
    const [list, setList] = useState([])
    const [isLoading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false)
    const [editMode, setEditMode] = useState(false)
    const [editBook, SetEditBook] = useState({
        "title": "",
        "author": "",
        "description": ""
    })
    useEffect(() => {
        if (!user) return
        fetch(`/api/users/${user.id}/lists`)
            .then(responce => {
                if (responce.ok) {
                    responce.json()
                        .then(data => {
                            setList(data[0].books)
                            setLoading(false)
                        })
                }
                else {
                    responce.json().then(error => console.error(error))
                }
            })
    }, [user])
   
    const onSuccessCreate =(book)=>{
        setList([...list,book])
        setShowForm(false)
    }

    const onSuccessEdit = (editedBook)=>{
        setShowForm(false)
        const updatedList = list.map(book => {
            if (book.id !== editedBook.id) {
                return editedBook 
            }
            else {
                return book
            }}) 
        setList(updatedList)
    }

    const onSuccessDelete = (id)=>{
        const filteredList = list.filter(book => book.id !== id) 
        setList(filteredList)
    }
    const handleDelete =(id)=>{
        deleteBookApi(user, id, onSuccessDelete)
    }

    const handleEditButton = (id) => {
        const book = list.find(book => book.id === id) 
        SetEditBook(book)
        console.log("editedbook", editBook)
        setEditMode(true)
        setShowForm(true)
      }

    let booksList
    if (!isLoading) {
        booksList = list.map(book => 
        <Grid item xs={12} sm={6} md={4} >
            <Book 
                key={book.id} 
                book={book} 
                handleDelete={handleDelete} 
                handleEdit={handleEditButton}
                />
        </Grid>)
    }

    return (
        <div>
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    pt: 8,
                    pb: 6,
                }}
            >
                <Container maxWidth="sm">
                    <Typography
                        component="h1"
                        variant="h4"
                        align="center"
                        color="text.primary"
                        gutterBottom
                        sx={{ marginBottom: 6, color : "#5F5B5B" }}
                    >
                        Books you share
                    </Typography>
                    <Container maxWidth="sm">
                        {showForm
                            ? <BookForm 
                                setShowForm={setShowForm} 
                                editBook={editBook} 
                                SetEditBook={SetEditBook}
                                editMode={editMode} 
                                setEditMode={setEditMode}
                                user={user} 
                                onSuccessCreate={onSuccessCreate}
                                />
                            : <BooksControls setShowForm={setShowForm}/>}
                    </Container>
                </Container>
            </Box>

            <Container sx={{ py: 4 }} maxWidth="md">
                <Grid container spacing={4}>
                    {booksList}
                </Grid>
            </Container>
        </div>
    )
}

export default List