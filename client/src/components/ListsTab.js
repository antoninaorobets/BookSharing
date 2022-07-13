import { Grid, TabPanel, Box, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Book from './Book'
import Container from '@mui/material/Container';
import BookForm from './BookForm'
import BooksControls from './BooksControls'
import { deleteBookApi } from '../api/bookApi'
import { showSharedListApi, getAllSharedListsApi } from '../api/listApi'
import PlaceholderIsLoading from './PlaceholderIsLoading'
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function ListTab({ lists }) {
    const [selectedTab, setSelectedTab] = useState('all');
    
    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
        console.log(newValue)
    };
    
    const tabs = lists.map((list) =>  <Tab value={list.id} label={list.id} />)
    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                    value={selectedTab}
                    onChange={handleTabChange}
                    textColor="primary"
                    indicatorColor="primary"
                    aria-label="secondary tabs example"
                >
                    <Tab value="all" label="All books" />
                    {tabs}
                </Tabs>
            </Box>
        </Box >
    );
}


export default ListTab