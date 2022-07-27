import React, {useState, useEffect, useContext} from 'react'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import {UserContext} from '../context/user'
import {getRequestedApi} from '../api/requestApi'
import Message from './Message'
import PlaceholderIsLoading from './PlaceholderIsLoading'



function Requests() {
    const {user} = useContext(UserContext)
    const [received,setReceived] = useState([])
    const [sent,setSent] = useState([])
    const [sentIsLoading, setSentIsLoading] = useState(true)
    const [receivedIsLoading, setReceivedIsLoading] = useState(true)
    const [selectedTab, setSelectedTab] = useState('sent');
   
    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };
    useEffect(() => {
        if (!user) return
        getRequestedApi(user, onGetRequested,"requested")
        getRequestedApi(user, onGetSent, "sent")
    }, [user])

    const onGetRequested = (data) =>{
        setReceived(data)
        setReceivedIsLoading(false)
    }
    const onGetSent = (data) =>{
        setSent(data)
        setSentIsLoading(false)
    }

    let receivedMessages
    if (!receivedIsLoading) {
        receivedMessages = received.map((request,index) =>
            <Grid item xs={1} sm={12} md={12}  key={index}  >
                <Message 
                data={request} 
                user={user}/>
            </Grid> )  
    }

    let sentMessages
    if (!sentIsLoading) {
        sentMessages = sent.map((request,index) =>
            <Grid item xs={1} sm={12} md={12}  key={index}  >
                <Message 
                data={request} 
                user={user}/>
            </Grid> )
        
    }
    let display
    let noMessages = false
    if (selectedTab === "received") {
        display = receivedMessages
        noMessages = received.length === 0
    } else {
        display = sentMessages
        noMessages = sent.length === 0
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

            <Container   style={{backgroundColor: "rgb(130, 115, 151, 0.1)", width: "70%", borderRadius: "10px"}} >
                <Tabs
                    sx={{ pb: 4 }} 
                    value={selectedTab}
                    onChange={handleTabChange}
                    textColor="primary"
                    indicatorColor="primary"
                    aria-label="secondary tabs example"
                >
                    <Tab value="sent" label="Sent requests" />
                    <Tab value="received" label="Received requests" />
                </Tabs>
                <Grid container spacing={4}> 
                    {display}
                </Grid> 
            </Container>     
            {sentIsLoading && receivedIsLoading 
                ? <PlaceholderIsLoading /> 
                : noMessages&& !sentIsLoading
                    ?  <Typography
                        sx={{ pt: 8,pb: 8 }}
                        align="center"
                        color="primary"
                        > You don't have {selectedTab} messages yet.
                        </Typography>
                    : null}
       </div>
    )
}

export default Requests