import React from 'react'
import { render, screen } from '@testing-library/react';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';

test('render app', () => {
  render(
    <Router>
      <App />
    </Router>);
  const linkElement = screen.getByText(/Books Sharing/i);
  expect(linkElement).toBeInTheDocument();
});

//loginUser
//logoutUser
