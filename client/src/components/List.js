import {Grid, Box, Button, Typography} from '@mui/material'
import React, { useEffect, useState } from 'react'
import Book from './Book'
import NewBookForm from './NewBookForm'

function List({user}) {
    const[list, setList] = useState([])
    const [isLoading, setLoading] = useState(true);
    const [showForm, setShowForm] =useState(false)
    useEffect(()=>{
        if (!user) return
        fetch(`/api/users/${user.id}/lists`)
        .then(responce => {
            if (responce.ok) {
                responce.json()
                .then(data => {
                    setList(data[0])
                    setLoading(false)
                })
            }
            else {
                responce.json().then(error=>console.error(error))
            }
        })
    }, [user])
    let  booksList 
    if (!isLoading) {
        booksList = list.books.map(book => <Grid item><Book key={book.id} book={book}/></Grid>)
    }
    const newBook = <Box sx={{
        marginTop: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }}>
    <Button  
        size="large" 
        variant="contained" 
        onClick={()=>{setShowForm(true)}} > 
    Add Book 
    </Button>
    </Box>

  return (
    <div>
        {showForm 
            ? <div>
                <NewBookForm/> 
                <Button style={{ display: 'flex',margin: "auto", }} size="small" onClick={()=>{setShowForm(false)}}> 
                Hide Form
                </Button>
            </div>
            :  newBook} 
        <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >

            </Box>
         <Typography gutterBottom variant="h6" color="#5F5B5B" component="div">
          List of books to share:
        </Typography>

          <Grid sx={{ flexGrow: 1 }} container >
              <Grid item justifyContent="center">
                  <Grid container justifyContent="center" spacing={3}>
                      {booksList}
                  </Grid>
              </Grid>
          </Grid>
   
    </div>
  )
}

export default List