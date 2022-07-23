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

// test('Requests are fetched ',  () => {
//     const spy =  jest.spyOn(global,'fetch')
//     render(
//     <UserProvider>
//         <Router>
//             <Requests />
//         </Router>
//     </UserProvider>)
//     expect(spy).toHaveBeenCalledTimes(1)
// })


// need enxim to get access to method  test 
//onSuccessGetRequests
// wrapperInner.find("Login").instance() // to access the methods

// wrapperInner.find("Login").instance().state // to access the state