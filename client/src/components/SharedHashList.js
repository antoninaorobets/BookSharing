import { Grid, Alert, Box, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Book from './Book'
import Container from '@mui/material/Container';
import { showSharedListApi, checkIfSavedApi, createSharedListApi } from '../api/listApi'
import PlaceholderIsLoading from './PlaceholderIsLoading'
import { useParams } from 'react-router-dom';

function SharedHashList({ user }) {
    const [list, setList] = useState([])
    const [isLoading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState(false)
    const [savedList, setSavedList] = useState(false)
    const { hash } = useParams()
    useEffect(() => {
        showSharedListApi(hash, onSuccessGetList)
    }, [])
    useEffect(() => {
        if (user) {
            checkIfSavedApi(user, hash, setSavedList)
        }
    }, [user])

    const onSuccessGetList = (data) => {
        setList(data)
        setLoading(false)
    }
    const onSuccessCreate = (data) => {
        setSavedList(true)
    }

    const onSave = () => {
        if (user & !savedList) {
            createSharedListApi(user, list, setSavedList)
        }
        else {
            setErrorMessage(<Alert severity="error">Please Log in</Alert>)
        }
    }

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
            {isLoading ? <PlaceholderIsLoading /> : null}
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    pt: 6,
                    pb: 2,
                }}
            >
                <Container maxWidth="sm">
                    <Typography
                        component="h1"
                        variant="h4"
                        align="center"
                        color="text.primary"
                        gutterBottom
                        sx={{ mb: 2, color: "#5F5B5B" }}
                    >
                        {name}'s list
                    </Typography>
                    {savedList
                        ? <Typography 
                            align="center"  
                            color="text.secondary"
                            variant="subtitle1">
                                These books are in your SHARED tab
                            </Typography>
                        : <Container>
                            <Typography
                                align="center"
                                color="text.secondary"
                                paragraph
                                display='flex'
                                justifyContent="center">
                                This list of {ln} books is created and shared by {name}. You can save it to youe shared Lists.
                            </Typography>
                            <Box component="span" sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                                <Button direction="row"
                                    variant="contained"
                                    size="smal"
                                    sx={{ pl: 8, pr: 8 }}
                                    onClick={() => onSave()}>
                                    Save
                                </Button>

                            </Box>
                        </Container>
                    }
                    {errorMessage}
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

export default SharedHashList 
