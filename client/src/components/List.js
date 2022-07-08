import {Grid, Typography} from '@mui/material'
import React, { useEffect, useState } from 'react'
import Book from './Book'

function List({user}) {
    const[list, setList] = useState([])
    const [isLoading, setLoading] = useState(true);
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

  return (
    <div>
         <Typography gutterBottom variant="h6" color="#827397" component="div">
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