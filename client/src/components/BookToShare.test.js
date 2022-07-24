import { render, screen, fireEvent } from '@testing-library/react';
import BookToShare from './BookToShare';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from "../context/user"

    const book = {
        author: "Dorothy Kunhardt",
        id: 8,
        title: "Pat the Bunny"
    }
    const handleDelete = jest.fn()
    const handleEditButton =  jest.fn()
    
    test('Book conponent has title ', () => {
        render(
            <UserProvider>
                <Router>
                <BookToShare book={book}  handleDelete={handleDelete} handleEdit={handleEditButton} />
                </Router>
            </UserProvider>)
        const title = screen.getByRole('title')
        expect(title).toBeInTheDocument()
    })

    test('Book conponent has author ', () => {
        render(
            <UserProvider>
                <Router>
                <BookToShare book={book}  handleDelete={handleDelete} handleEdit={handleEditButton} />
                </Router>
            </UserProvider>)
        const title = screen.getByRole('author')
        expect(title).toBeInTheDocument()
    })
    test('Book conponent has description ', () => {
        render(
            <UserProvider>
                <Router>
                <BookToShare book={book}  handleDelete={handleDelete} handleEdit={handleEditButton} />
                </Router>
            </UserProvider>)
        const title = screen.getByRole('description')
        expect(title).toBeInTheDocument()
    })

    test('calls handleDelete prop when Delete clicked', () => {
        render(
            <UserProvider>
                <Router>
                <BookToShare book={book}  handleDelete={handleDelete} handleEdit={handleEditButton} />
                </Router>
            </UserProvider>)   
        fireEvent.click(screen.getByText(/delete/i))
        expect(handleDelete).toHaveBeenCalledTimes(1)
      })
    
      test('calls handleEdit prop when Edit clicked', () => {
        render(
            <UserProvider>
                <Router>
                <BookToShare book={book}  handleDelete={handleDelete} handleEdit={handleEditButton} />
                </Router>
            </UserProvider>)   
        fireEvent.click(screen.getByText(/edit/i))
        expect(handleEditButton).toHaveBeenCalledTimes(1)
      })


