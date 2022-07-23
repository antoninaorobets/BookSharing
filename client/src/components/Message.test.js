import { render, screen, fireEvent } from '@testing-library/react';
import Requests from './Requests'
import { UserProvider } from '../context/user'
import { BrowserRouter as Router } from 'react-router-dom';
import { Experimental_CssVarsProvider } from '@mui/material';

const request = {
    "id": 2,
    "text": "first",
    "created_at": "2022-07-21T19:37:35.807Z",
    "book": {
        "id": 4,
        "title": "Pat the Bunny",
        "author": "Dorothy Kunhardt",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        "status": null
    },
    "sender": {
        "id": 5,
        "name": "Dan"
    },
    "receiver": {
        "id": 3,
        "name": "Polly"
    }
}

test('Message component is rendered', () => {
    render(
        <UserProvider>
            <Router>
                <Message data={request} My_request={true}/>
            </Router>
        </UserProvider>
    )
    const card = screen.getByRole('card')
    expect(card).toBeInTheDocument()
})


test('Book displayed in the Message component', () => {
    render(
        <UserProvider>
            <Router>
                <Message data={request} My_request={true}/>
            </Router>
        </UserProvider>
    )
    const book_title = screen.getByRole('title')
    const book_author = screen.getByRole('author')
})

test('Data displayed in the Message component', () => {
    render(
        <UserProvider>
            <Router>
                <Message data={request} My_request={true}/>
            </Router>
        </UserProvider>
    )
    const date = screen.getByRole('date')
    expect(date).toBe("7/21/2022")
})

test('Receiver Name is displayed in the Message component', () => {
    render(
        <UserProvider>
            <Router>
                <Message data={request} My_request={true}/>
            </Router>
        </UserProvider>
    )
    // const receiver = screen.getByRole('receiver')
    const receiver = screen.getByText('To: Polly')
})


test('Sender Name is displayed in the Message component', () => {
    render(
        <UserProvider>
            <Router>
                <Message data={request} My_request={false}/>
            </Router>
        </UserProvider>
    )
    const receiver = screen.getByText('From: Dan')
})

test('Primary Color of my requests books', () => {
    render(
        <UserProvider>
            <Router>
                <Message data={request} My_request={true}/>
            </Router>
        </UserProvider>
    )

    expect(getByRole("Card")).toHaveAttribute("color").toMatch(/#827397/)
    // or primary
})

test('white Color of my requests books', () => {
    render(
        <UserProvider>
            <Router>
                <Message data={request} My_request={false}/>
            </Router>
        </UserProvider>
    )

    expect(getByRole("Card")).not.toHaveAttribute("color").toMatch(/white/)
    // or primary
})