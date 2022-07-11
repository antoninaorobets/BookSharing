import { Grid, Box, Button, Divider, Typography } from '@mui/material'
import Stack from '@mui/material/Stack';
import React, { useEffect, useState } from 'react'
import Book from './Book'
import Container from '@mui/material/Container';
import NewBookForm from './NewBookForm'
import BooksControls from './BooksControls'
import TextField from '@mui/material/TextField';
import {deleteBook} from '../api/bookApi'

function List({ user }) {
    const [list, setList] = useState([])
    const [isLoading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false)
    useEffect(() => {
        if (!user) return
        fetch(`/api/users/${user.id}/lists`)
            .then(responce => {
                if (responce.ok) {
                    responce.json()
                        .then(data => {
                            console.log(data[0])
                            setList(data[0].books)
                            setLoading(false)
                        })
                }
                else {
                    responce.json().then(error => console.error(error))
                }
            })
    }, [user])

    const handleDelete =(id)=>{
        deleteBook(user, id)
        
    }
    let booksList
    if (!isLoading) {
        booksList = list.map(book => <Grid item xs={12} sm={6} md={4} ><Book key={book.id} book={book} handleDelete={handleDelete} /></Grid>)
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
                            ? <NewBookForm setShowForm={setShowForm} user={user} list={list} setList={setList}/>
                            : <BooksControls setShowForm={setShowForm} />}
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