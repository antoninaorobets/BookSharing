import * as React from 'react';
import {useState} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert'
import {sendRequestApi} from '../api/requestApi'
import { NavLink } from 'react-router-dom'



function BookToRequest({user, showName, book, owner}) {
  const [status, setStatus] = useState()

  const requested = <Alert severity="success"> Request is sent to {owner.name}. <br />
    <NavLink to='/requests'>View Request</NavLink>
    </Alert>
  const login_error = <Alert severity="error">Please Log in</Alert>

  const handleRequest = ()=> {
    if (user) {
        sendRequestApi(user, book, owner, onSuccessRequest)
    }
    else {
      setStatus(login_error)
    }
  }

  const onSuccessRequest = () =>{
    setStatus(requested)
  }
 
  return (
    <Card  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }} style={{bgcolor: " #827397"}} >
      <CardContent  sx={{ flexGrow: 1 }}>
      {showName ? <Typography gutterBottom variant="overline" component="h5"  role='owner' textAlign="center"  color="#5F5B5B">
        {owner.name}'s book  
        <Divider/>
      </Typography>
        : null}
       <Typography gutterBottom variant="h6" sx={{pt: "2px"}} color="#827397" role='title' >
        {book.title}
        </Typography>
        {/* <Divider /> */}
        <Typography gutterBottom variant="subtitle1"  color="#827397" role='author'  component="div">
       by {book.author}
        </Typography>
        <Typography variant="body2" color="text.secondary" role='description'  sx={{pt: "8px"}}>
          {book.description}
        </Typography>
      </CardContent>
     
      <CardActions>
        
        { user && user.id !== owner.id 
        ? <Button onClick={handleRequest} size="small" style={{margin:"auto"}} >Request </Button>
        :null }
      </CardActions> 
      {status}
    </Card>

  );
}


export default BookToRequest