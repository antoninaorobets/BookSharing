import {Grid, Alert, Box, Button, Typography} from '@mui/material'
import React, {useEffect, useState, useContext} from 'react'
import BookToRequest from './BookToRequest'
import Container from '@mui/material/Container';
import { showSharedListApi, checkIfSavedApi, createSharedListApi } from '../api/listApi'
import PlaceholderIsLoading from './PlaceholderIsLoading'
import {useParams}  from 'react-router-dom';
import {UserContext} from '../context/user'
import BookToShare from './BookToShare'
//import { useNavigate } from 'react-router-dom';


function SharedHashList() {
    const {user} = useContext(UserContext)
    const [list, setList] = useState([])
    const [isLoading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState(false)
    const [savedList, setSavedList] = useState(false)
    const { hash } = useParams()
    const login_error = <Alert severity="error">Please Log in</Alert>

    //const navigate = useNavigate()
    
    
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
        console.log(data)
        setLoading(false)
    }
    const onSuccessCreate = (data) => {
        setSavedList(true)
    }
    

    const onSave = () => {
        if (user && !savedList) {
            createSharedListApi(user, list, setSavedList)
        }
        else {
            setErrorMessage(login_error)
        }
    }

    let booksList
    let text
    let name
    const  showName = false
    if (!isLoading) {
        name = list.user.name
        if (user.id === list.user.id ) {
            text = "The list you can share"    
        }else if (savedList) {
            text = "These books are in your SHARED tab."
        } else {
            text = `This list of ${list.books.length} books is created and shared by ${name}. You can save it to youe shared Lists.`
        }
        booksList = list.books.map(book =>
            <Grid item xs={12} sm={6} md={4}  key={book.id} >   
                 <BookToRequest
                    book = {book}
                    user = {user}
                    owner = {list.user}
                    showName = {showName}
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
                     {/* <Typography 
                            align="center"  
                            color="text.secondary"
                            variant="subtitle1">
                                These books are in your SHARED tab
                            </Typography>         */}
                        <Container> 
                            <Typography
                                align="center"
                                color="text.secondary"
                                paragraph
                                display='flex'
                                justifyContent="center">
                               {text}
                            </Typography>
                        {!savedList
                        ? <Box component="span" sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                                <Button direction="row"
                                    variant="contained"
                                    size="smal"
                                    sx={{ pl: 8, pr: 8 }}
                                    onClick={() => onSave()}>
                                    Save
                                </Button>

                            </Box>
                            : null
                        }
                        </Container>
                    
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
