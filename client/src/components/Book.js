import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


function Book({book}) {
  return (
    <Card  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }} style={{bgcolor: " #827397"}} >
       {/* <CardMedia
        component="img"
        height="140"
        mage="https://source.unsplash.com/random"
        // image="../pi78gKzxT"
        alt="book-cover"
      /> */}
       <CardContent  sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" color="#827397" component="div">
          {book.title}
        </Typography>
        <Typography gutterBottom variant="h7" color="#5F5B5B" component="div">
          {book.author}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {book.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Request</Button>
        <Button size="small">Edit</Button>
      </CardActions> 
    </Card>

  );
}


export default Book