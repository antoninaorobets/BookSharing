import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

function BookToShare({book, handleDelete, handleEdit}) {

  return (
    <Card  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }} style={{bgcolor: " #827397"}} >
       <CardContent  sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" color="#827397" role="title" component="div">
          {book.title}
        </Typography>
        <Divider />
        <Typography gutterBottom variant="h7" color="#5F5B5B" role="author" component="div"   sx={{pt: "8px"}}>
          {book.author}
        </Typography>
        <Typography variant="body2"  role="description" color="text.secondary"  sx={{pt: "8px"}}>
          {book.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>handleDelete(book.id)}>Delete</Button>
        <Button size="small" onClick={()=>handleEdit(book.id)}>Edit</Button>
      </CardActions> 
    </Card>

  );
}

export default BookToShare