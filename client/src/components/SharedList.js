import { Grid, Box, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Book from './Book'
import Container from '@mui/material/Container';
import BookForm from './BookForm'
import BooksControls from './BooksControls'
import {deleteBookApi} from '../api/bookApi'
import {showSharedListApi, getAllSharedListsApi} from '../api/listApi'
import PlaceholderIsLoading from './PlaceholderIsLoading'
import { useParams } from 'react-router-dom';


function SharedList({user }) {
    const [list, setList] = useState([])
    const [isLoading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false)
    const { hash } = useParams()
    console.log(hash)
    useEffect(() => {
        if (hash){ 
            showSharedListApi(hash, onSuccessGetList) 
        } else if (!user) return
        else {
            console.log("user",user)
            getAllSharedListsApi( user, onSuccessGetList)
        } 
    }, [user])

    const onSuccessGetList = (data) => {
        setList(data)
        setLoading(false)
        console.log(data)
    }
    // const onSuccessCreate =(book)=>{
    //     setList([...list.books,book])
    //     setShowForm(false)
    // }
// 




    let booksList
    let ln
    let name
    if (!isLoading) {
        name = list.user.name
        ln = list.books.length
        booksList = list.books.map(book => 
        <Grid item xs={12} sm={6} md={4} >
            <Book 
                key={book.id} 
                book={book} 
                // handleDelete={handleDelete} 
                // handleEdit={handleEditButton}
                />
        </Grid>)

    }
    return (
        <div>
            {isLoading ? <PlaceholderIsLoading/> : null}
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
                        sx={{ mb: 4, color : "#5F5B5B" }}
                    >
                        {name}'s list 
                    </Typography>
                    <Typography 
                        align="center" 
                        color="text.secondary" 
                        paragraph 
                        display='flex'
                        justifyContent="center">
                        There are {ln} books on this list. You can find it in you Shared Lists (if you are logged in).            
                    </Typography>
                    <Button 
                            variant="contained"
                            size="smal"
                            fullWidth
                            onClick={() => {
                                console.log("coppied", `http://localhost:3000/api/lists/${list.id}`)
                                navigator.clipboard.writeText(`http://localhost:3000/api/lists/${list.id}`)}}>
                            Save List / Log in ?
                        </Button>
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

export default SharedList