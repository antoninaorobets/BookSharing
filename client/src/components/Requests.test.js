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
// wrapperInner.find("Login").instance() // to access the methods
// wrapperInner.find("Login").instance().state // to access the state