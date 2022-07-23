import React, {useState, useEffect, useContext} from 'react'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import {UserContext} from '../context/user'
import {getRequestsApi} from '../api/requestApi'
import Message from './Message'
import PlaceholderIsLoading from './PlaceholderIsLoading'

function Requests() {
    const {user} = useContext(UserContext)
    const [requests,setRequests] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (!user) return
        getRequestsApi(user, onSuccessGetRequests)
    }, [user])

    const onSuccessGetRequests = (data) =>{
        setRequests(data)
        setIsLoading(false)
    }

    let messages
    if (!isLoading) {
        messages = requests.map((request,index) =>
            <Grid item xs={1} sm={12} md={12}  key={index}  >
                <Message 
                data={request} 
                user={user}/>
            </Grid> )  
    }
      
    return ( <div>
            <Box sx={{
                    bgcolor: 'background.paper',
                    pt: 8,
                    pb: 6,
                }}
            >
                <Container maxWidth="sm">
                    <Typography
                        component="h1"
                        variant="h4"
                        align="center"
                        color="text.primary"
                        gutterBottom
                        sx={{ mb: 4, color: "#5F5B5B" }}
                    >
                        Requests
                    </Typography>
                </Container>
            </Box>

            {isLoading ? <PlaceholderIsLoading /> : null}

            <Container sx={{ py: 4 }}   style={{backgroundColor: "rgb(130, 115, 151, 0.1)", width: "70%"}} >
                <Grid container spacing={4}> 
                    {messages}
                </Grid> 
            </Container>     
       </div>
    )
}

export default Requests