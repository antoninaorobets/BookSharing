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

// test('renders logout button', () => {
//  render(
//    <UserProvider value={{user, setUser}}>
//      <Router>
//        <AppTopBar  />
//      </Router>
//    </UserProvider>)
//  const element = screen.getByText(/logout/i);
//  expect(element).toBeInTheDocument();
// });

// afterAll(() => {
//   jest.restoreAllMocks();
// })

// test('When Logout button is clicked onLogout() is called', (done) => {
//   jest.spyOn(global, 'fetch').mockResolvedValue({
//     ok: true,
//     json: jest.fn().mockResolvedValue('')
//   })
//   const onLogoutMock = done
//   render(
//     <UserProvider value={{user, setUser}}>
//       <Router>
//         <AppTopBar onLogout={onLogoutMock} />
//       </Router>
//     </UserProvider>)
//   const logout = screen.getByText(/logout/i);
//   userEvent.click(logout)
// });

// test('do not renders My Books link when logged out', () => {
//   render(
//     <UserProvider>
//       <Router>
//         <AppTopBar />
//       </Router>
//     </UserProvider>)
//   const element = screen.queryByTestId(/my-books/i);
//   expect(element).toBeNull();
// });


// test('renders my books button when logged in', () => {
//   render(
//     <UserProvider value={{user, setUser}}>
//       <Router>
//         <AppTopBar  />
//       </Router>
//     </UserProvider>)
//   const element = screen.getByTestId(/my-books/i);
//   expect(element).toBeInTheDocument();
// });
test('renders  my books button when logged in', () => {
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

// test('highlight my books button when active', () => {

//   render(
//     <UserProvider>
//       <Router>
//         <AppTopBar user={userPolly} />
//       </Router>
//     </UserProvider>)
//   const element = screen.getByTestId(/my-books/i);

//   expect(element).toBeInTheDocument();
// });

// test('do not renders Shared link when logged out', () => {
//   render(
//     <UserProvider>
//       <Router>
//         <AppTopBar />
//       </Router>
//     </UserProvider>)
//   const element = screen.queryByTestId(/shared/i);
//   expect(element).toBeNull();
// });


// test('renders Shared button when logged in', () => {
//   render(
//     <UserProvider>
//       <Router>
//         <AppTopBar user={userPolly} />
//       </Router>
//     </UserProvider>)
//   const element = screen.getByTestId(/shared/i);
//   expect(element).toBeInTheDocument();
// });
test('renders Shared button when logged in', () => {
  const testRenderer = new TestRenderer.create(
    <UserContext.Provider value={{user, setUser}}>
        <Router>
        <AppTopBar  />
        </Router>
    </UserContext.Provider>
);
  const testInstance = testRenderer.root;
  const element = testInstance.findByProps({className: "shared"}).children;
});

// test('do not renders Requests link when logged out', () => {
//   render(
//     <UserProvider>
//       <Router>
//         <AppTopBar />
//       </Router>
//     </UserProvider>)
//   const element = screen.queryByTestId(/requests/i);
//   expect(element).toBeNull();
// });

// test('renders Requests button when logged in', () => {
//   render(
//     <UserProvider value={user, setUser}>
//       <Router>
//         <AppTopBar  />
//       </Router>
//     </UserProvider>)
//   const element = screen.getByTestId(/requests/i);
//   expect(element).toBeInTheDocument();
// });


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
  //expect(element).toEqual('Requests');
});

