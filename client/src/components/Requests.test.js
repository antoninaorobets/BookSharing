import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import Requests from './Requests'

import { UserProvider } from '../context/user'
import { BrowserRouter as Router } from 'react-router-dom';


test('Request component is rendered', () => {
    render(
    <UserProvider>
        <Router>
            <Requests />
        </Router>
    </UserProvider>)
    expect(screen.getByText('Requests')).toBeInTheDocument()
})

afterEach(() => {
    jest.restoreAllMocks();
  })
  
  test('Tabs are rendered', () => {
    render(
    <UserProvider>
        <Router>
            <Requests />
        </Router>
    </UserProvider>)
    const sentTab = screen.getByText(/Sent/i)
    expect(sentTab).toBeInTheDocument()
})


// https://www.youtube.com/watch?v=kCe1DDFy09I&t=749s
// test('Switch to Received tab after switching tabs', () => {
//     const selectedTab = 'sent'
//     const handleTabChange = jest.fn()
//     render(
//     <UserProvider>
//         <Router>
//             <Tabs 
//                 value={selectedTab}
//                 onChange={handleTabChange} />
//         </Router>
//     </UserProvider>)
    
// })


// need enxim to get access to method  test 
//onSuccessGetRequests
// wrapperInner.find("Login").instance() // to access the methods

// wrapperInner.find("Login").instance().state // to access the state