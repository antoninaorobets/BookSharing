import { render, screen, fireEvent } from '@testing-library/react';
import Requests from './Requests'
import { UserProvider } from '../context/user'
import { BrowserRouter as Router } from 'react-router-dom';
import { Experimental_CssVarsProvider } from '@mui/material';

test('Request component is rendered', () => {
    render(
    <UserProvider>
        <Router>
            <Requests />
        </Router>
    </UserProvider>)
    const title = screen.getByRole('heading')
    expect(title).toBeInTheDocument()
})