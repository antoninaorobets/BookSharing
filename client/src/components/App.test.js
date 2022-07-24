import React from 'react'
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from "../context/user"

test('render app', () => {
  render(
    <UserProvider>
      <Router>
        <App />
      </Router>
    </UserProvider>);
  const linkElement = screen.getByText(/Books Sharing/i);
  expect(linkElement).toBeInTheDocument();
});


