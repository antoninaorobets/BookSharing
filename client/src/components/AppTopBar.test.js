import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import AppTopBar from './AppTopBar';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import { UserProvider, UserContext } from "../context/user"
import TestRenderer from 'react-test-renderer';
import React from 'react';

const userPolly = {
  id: "1",
  name: "Polly"
}

test('renders app name', () => {
  render(
    <UserProvider>
      <Router>
        <AppTopBar />
      </Router>
    </UserProvider>)
  const element = screen.getByText(/Books Sharing/i);
  expect(element).toBeInTheDocument();
});

test('renders login button', () => {
  render(
    <UserProvider>
      <Router>
        <AppTopBar />
      </Router>
    </UserProvider>)
  const element = screen.getByText(/login/i);
  expect(element).toBeInTheDocument();
});

const user = {
  id: 4,
  name: "Jhon"
}
const setUser =jest.fn()

test('renders my books button when logged in', () => {
  const testRenderer = new TestRenderer.create(
    <UserContext.Provider value={{user, setUser}}>
        <Router>
        <AppTopBar  />
        </Router>
    </UserContext.Provider>
);
  const testInstance = testRenderer.root;
  const element = testInstance.findByProps({className: "my-books"}).children;

});

test('renders Requests button when logged in', () => {
  const testRenderer = new TestRenderer.create(
    <UserContext.Provider value={{user, setUser}}>
        <Router>
        <AppTopBar  />
        </Router>
    </UserContext.Provider>
);
  const testInstance = testRenderer.root;
  const element = testInstance.findByProps({className: "requests"}).children;
});

