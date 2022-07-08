import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Book({book}) {
    console.log("book",book)
    // const book = {
    //     "id": 8,
    //     "title": "Pat the Bunny",
    //     "author": "Dorothy Kunhardt",
    //     "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    //     "status": null}
  return (
    <Card sx={{ maxWidth: 345, mb: 3 }} style={{borderColor: " #827397"}} >
      {/* <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      /> */}
       <CardContent>
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
        <Button size="small">Learn More</Button>
      </CardActions> 
    </Card>
  );
}


export default Book