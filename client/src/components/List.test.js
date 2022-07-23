import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import List from './List';
// import BookForm from './BookForm';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from "../context/user"


test('List component is rendered ', () => {
    render(
        <UserProvider>
            <Router>
                < List />
            </Router>
       </UserProvider>) 
    const title = screen.getByText(/Books you share/i)
    expect(title).toBeInTheDocument()
})

test('Add Book Form appears after click on Add Book button', () => {
    render(
        <UserProvider>
            <Router>
                < List />
            </Router>
       </UserProvider>) 

    const add = screen.getByRole('button',{ name: "Add Book"})
    fireEvent.click(add)
    const form = screen.getByText(/Add New Book/i)
    expect(form).toBeInTheDocument()
})


