import { render, screen, fireEvent } from '@testing-library/react';
import Message from './Message'
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
        "id": 3,
        "name": "Polly"
    },
    "receiver": {
        "id": 5,
        "name": "Dan"
    }
}
const me = {
    "id": 3,
    "name": "Polly"
}
const me2 = {
    "id": 5,
    "name": "Dan"
}

test('Message component is rendered', () => {
    render(
        <UserProvider>
            <Router>
                <Message data={request} user={me}/>
            </Router>
        </UserProvider>
    )
    expect(screen.getByRole('card')).toBeInTheDocument()
})

test('Book title displayed in the Message component', () => {
    render(
        <UserProvider>
            <Router>
                <Message data={request} user={me}/>
            </Router>
        </UserProvider>
    )
    expect(screen.getByText(/Pat the Bunny/)).toBeInTheDocument()
})

test('Book author displayed in the Message component', () => {
    render(
        <UserProvider>
            <Router>
                <Message data={request} user={me}/>
            </Router>
        </UserProvider>
    )
    expect(screen.getByText(/Dorothy Kunhardt/)).toBeInTheDocument()
})

test('Data displayed in the Message component', () => {
    render(
        <UserProvider>
            <Router>
                <Message data={request} user={me}/>
            </Router>
        </UserProvider>
    )
    expect(screen.getByText(/Jul 21,2022/)).toBeInTheDocument()
})

test('Receiver Name is displayed in the Message component', () => {
    render(
        <UserProvider>
            <Router>
                <Message data={request} user={me}/>
            </Router>
        </UserProvider>
    )
    // const receiver = screen.getByRole('receiver')
    const receiver = screen.getByText(/To: Dan/)
})

test('Sender Name is displayed in the Message component', () => {
    render(
        <UserProvider>
            <Router>
                <Message data={request} user={me2}/>
            </Router>
        </UserProvider>
    )
    const receiver = screen.getByText('From: Polly')
})

test('Sent request differ from received request', () => {
    render(
        <UserProvider>
            <Router>
                <Message data={request} user={me}/>
            </Router>
        </UserProvider>
    )

    expect(screen.getByText(/You sent request/)).not.toContain(/has requested/)
})

test('Sent request differ from received request', () => {
    render(
        <UserProvider>
            <Router>
                <Message data={request} user={me2}/>
            </Router>
        </UserProvider>
    )
    expect(screen.getByText(/has requested/)).not.toContain(/You sent request/)
})