import React from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import CardContent from '@mui/material/CardContent';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import { format } from 'fecha';

function Message({ user, data }) {
    const messageDate = format(new Date(data.created_at), 'MMM DD,YYYY')
 
    let i_sent_request = false
    let header = `From: ${data.sender.name}`
    let style_My_message = { width: "70%" }
    let text = `${data.sender.name} has requested `
    let textending
    
    if (user.id === data.sender.id) {
        i_sent_request = true
        header = `To: ${data.receiver.name}`
        style_My_message = { backgroundColor: "rgb(130, 115, 151, 1)", color: "#fff",  float: "right", width: "70%" }
        text = `You sent request for `
        textending = `to ${data.receiver.name}`
    }

    return (
        <Card  style={style_My_message} role="card">
            <CardContent sx={{ flexGrow: 2 }}>
                <Typography gutterBottom variant="h7">
                    {header}
                </Typography>
                <Divider />
                <Typography gutterBottom variant="body1" role="title" sx={{ pt: "16px" }}>
                    {text} <span style={{ fontWeight: "bold" }}>{data.book.title}</span>, by {data.book.author} {textending}
                </Typography>
                <Typography variant="overline" display="block" sx={{ float: "right" }} >
                    {messageDate}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Message