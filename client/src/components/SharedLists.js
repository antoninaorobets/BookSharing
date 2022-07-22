import { Grid, Tab, Tabs, Box, Button, Typography } from '@mui/material'
import React, { useEffect, useState, useContext } from 'react'
import Book from './Book'
import BookToRequest from './BookToRequest'
import Container from '@mui/material/Container';
import BookForm from './BookForm'
import BooksControls from './BooksControls'
import { deleteBookApi } from '../api/bookApi'
import { showSharedListApi, getAllSharedListsApi } from '../api/listApi'
import PlaceholderIsLoading from './PlaceholderIsLoading'
import { useParams } from 'react-router-dom';
import ListTab from './ListsTab'
import {UserContext} from '../context/user'

function SharedLists() {
    const {user} = useContext(UserContext)
    const [lists, setLists] = useState([])
    const [isLoading, setLoading] = useState(true);
    const [selectedList, setSelectedList] = useState('all');

    useEffect(() => {
        if (!user) return
        getAllSharedListsApi(user, onSuccessGetList)
    }, [user])

    const onSuccessGetList = (data) => {
        setLists(data)
        setLoading(false)
    }

    const handleTabChange = (event, newValue) => {
        setSelectedList(newValue);
    };

    let tabs
    let booksList
    let allbooks =[]

    if (!isLoading) {
        tabs = lists.map((list,index) => {
            const lable = list.list.user.name+ "'s list"
            return <Tab key={index} value={index} label={lable} />
        })
        if (selectedList === "all") {
            lists.forEach(list => allbooks = [].concat(allbooks, list.books))
        } else {
            allbooks = lists[selectedList].books
        }
            booksList = allbooks.map(book => 
                <Grid item xs={12} sm={6} md={4} key={book.id}  >
                    < BookToRequest
                        book={book} 
                        user={user}
                        />
                </Grid>)
        }
    return (
        <div>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs
                        value={selectedList}
                        onChange={handleTabChange}
                        textColor="primary"
                        indicatorColor="primary"
                        aria-label="secondary tabs example"
                    >
                        <Tab value="all" label="All books" />
                        {tabs}
                    </Tabs>
                </Box>
            </Box >
            
            {isLoading ? <PlaceholderIsLoading /> : null}

            <Container sx={{ py: 4 }} maxWidth="md">
                <Grid container spacing={4}>
                    {booksList}
                </Grid>
            </Container>
        </div>
    )
}

export default SharedLists