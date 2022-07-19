import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import '@fontsource/roboto/300.css';
import Login from "./LoginForm";
import SignUp from "./SignupForm";
import AppTopBar from "./AppTopBar";
import Placeholder from "./PlaceholderNotLoggedIn";
import FooterBar from './FooterBar'
import List from "./List";
import SharedLists from './SharedLists'
import SharedHashList from './SharedHashList'
import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {
  const [user, setUser] = useState();
  const theme = createTheme({
    palette: {
      primary: { main: '#827397', },
      secondary: { main: '#edf2ff', },
      info: { main: '#5F5B5B', },
    },
  });
  useEffect(() => {
    fetch('/api/me')
      .then(responce => {
        if (responce.ok) {
          responce.json().then(user => {
            setUser(user)
          })
        } else {
          responce.json().then(error => console.error(error))
        }
      })
  }, [])
  const loginUser = (userData) => {
    setUser(userData)
  }
  const logoutUser = () => {
    setUser()
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <AppTopBar user={user} onLogout={logoutUser} />
        <Routes>
          <Route path="/" element={user  ? <List user={user} />  : <Placeholder />} />
          <Route path="/login" element={<Login loginUser={loginUser} />} />
          <Route path="/signup" element={<SignUp loginUser={loginUser} />} />
          <Route path="/shared_list/:hash" element={<SharedHashList user={user} />} />
          <Route path="/shared/" element={user ? <SharedLists user={user}/> : <Placeholder /> } />
        {/* <Route path="/shared/" element={user  ? <Requests user={user}/> : <Placeholder /> } />  */}
        </Routes>
        <FooterBar />
      </ThemeProvider>
    </div>
  );;
}

export default App;
