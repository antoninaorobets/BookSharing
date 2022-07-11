import React from 'react'
import { Grid, OutlinedInput, Button,InputAdornment,Container, TextField } from '@mui/material'
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';


function BooksControls({ setShowForm }) {
    return (
        <Stack
            display='flex'
            direction="row"
            spacing={2}
            justifyContent="center"
        >
              <Button
               fullWidth
                size="small"
                variant="contained" 
                onClick={() => { setShowForm(true) }} >
                Add Book
            </Button>
            
            <TextField
                size="small"
                fullWidth
                id="search"
                label="Search"
                name="search"
                InputProps={{
                    endAdornment: <InputAdornment position="end"><SearchIcon/></InputAdornment>,
                  }}
            / > 
        </Stack>
    )
}

export default BooksControls