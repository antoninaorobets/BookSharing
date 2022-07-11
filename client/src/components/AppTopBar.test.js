import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import AppTopBar from './AppTopBar';
import {BrowserRouter as Router} from 'react-router-dom';

const userPolly = {
  id: "1",
  name: "Polly"
}

test('renders app name', () => {
  render(
    <Router>
      <AppTopBar />
    </Router>);
  const element = screen.getByText(/Books Sharing/i);
  expect(element).toBeInTheDocument();
});

test('renders login button', () => {
  render(
    <Router>
      <AppTopBar />
    </Router>);
  const element = screen.getByText(/login/i);
  expect(element).toBeInTheDocument();
});

test('renders logout button', () => {
  render(
    <Router>
      <AppTopBar  user={userPolly} />
    </Router>);
  const element = screen.getByText(/logout/i);
  expect(element).toBeInTheDocument();
});

beforeAll(() => {
})

afterAll(() => {
  jest.restoreAllMocks();
})

test('When Logout button is clicked onLogout() is called', (done) => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    ok: true,
    json: jest.fn().mockResolvedValue('')
  })
  const onLogoutMock = done
  render(
    <Router>
      <AppTopBar user={userPolly} onLogout={onLogoutMock} />
    </Router>);
  const logout = screen.getByText(/logout/i);
  userEvent.click(logout)
});

test('do not renders My Books link when logged out', () => {
  render(
    <Router>
      <AppTopBar />
    </Router>);
  const element = screen.queryByTestId(/my-books/i);
  expect(element).toBeNull();
});


test('renders my books button when logged in', () => {
  render(
    <Router>
      <AppTopBar user={userPolly} />
    </Router>);
  const element = screen.getByTestId(/my-books/i);
  expect(element).toBeInTheDocument();
});

test('highlight my books button when active', () => {
  render(
    <Router>
      <AppTopBar user={userPolly} />
    </Router>);
  const element = screen.getByTestId(/my-books/i);

  expect(element).toBeInTheDocument();
});

test('do not renders Shared link when logged out', () => {
  render(
    <Router>
      <AppTopBar />
    </Router>);
  const element = screen.queryByTestId(/shared/i);
  expect(element).toBeNull();
});


test('renders Shared button when logged in', () => {
  render(
    <Router>
      <AppTopBar user={userPolly} />
    </Router>);
  const element = screen.getByTestId(/shared/i);
  expect(element).toBeInTheDocument();
});

test('do not renders Requests link when logged out', () => {
  render(
    <Router>
      <AppTopBar />
    </Router>);
  const element = screen.queryByTestId(/requests/i);
  expect(element).toBeNull();
});


test('renders Requests button when logged in', () => {
  render(
    <Router>
      <AppTopBar user={userPolly} />
    </Router>);
  const element = screen.getByTestId(/requests/i);
  expect(element).toBeInTheDocument();
});


 // test logout changes to login