import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import BookToRequest from './BookToRequest';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from "../context/user"


const book = {
    author: "Dorothy Kunhardt",
    id: 8,
    title: "Pat the Bunny"
}
const user = {
    id: 2,
    name: "Polly"
}
const owner = {
    id: 1,
    name: "Anna"
}

test('Book conponent has title ', () => {
    render(
        <UserProvider>
            <Router>
                < BookToRequest
                    book={book}
                    user={user}
                    owner={owner}
                    showName={false}
                />
            </Router>
        </UserProvider>)
    const title = screen.getByRole('title')
    expect(title).toBeInTheDocument()
})

test('Book conponent has author ', () => {
    render(
        <UserProvider>
            <Router>
                < BookToRequest
                    book={book}
                    user={user}
                    owner={owner}
                    showName={false}
                />
            </Router>
        </UserProvider>)
    const title = screen.getByRole('author')
    expect(title).toBeInTheDocument()
})

test('Book conponent has owner name ', () => {
    render(
        <UserProvider>
            <Router>
                < BookToRequest
                    book={book}
                    user={user}
                    owner={owner}
                    showName={true}
                />
            </Router>
        </UserProvider>)
    const title = screen.getByRole('owner')
    expect(title).toBeInTheDocument()
})

test('book component has Request button', () => {
    render(
        <UserProvider>
            <Router>
                < BookToRequest
                    book={book}
                    user={user}
                    owner={owner}
                    showName={true}
                />  
            </Router >
        </UserProvider>)
    const button = screen.getByText(/Request/i)
    expect(button).toHaveTextContent(/request/i)
})

afterEach(() => {
    jest.restoreAllMocks();
  })

test('calls fetch prop when Request clicked', () => {
    const spy = jest.spyOn(global, 'fetch')
    render(
        <UserProvider>
            <Router>
                < BookToRequest
                    book={book}
                    user={user}
                    owner={owner}
                    showName={true}
                />  
            </Router >
        </UserProvider>)
    const button = screen.getByText(/Request/i)
    fireEvent.click(button)
    expect(spy).toHaveBeenCalledTimes(1)
})


