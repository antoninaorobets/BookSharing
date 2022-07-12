import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import '@fontsource/roboto/300.css';
import Login from "./LoginForm";
import SignUp from "./SignupForm";
import AppTopBar from "./AppTopBar";
import Placeholder from "./PlaceholderNotLoggedIn";
import FooterBar from './FooterBar'
import List from "./List";
import SharedList from './SharedList'
import SharedHashList from './SharedHashList'
import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState();
  const theme = createTheme({
    palette: {
      primary: {  main: '#827397', },
      secondary: { main: '#edf2ff',},
      info: {  main: '#5F5B5B',},
    },
  });
  useEffect(() => {
    fetch('/api/me')
    .then(responce => {
      if (responce.ok) {
        responce.json().then(user => {
          setIsLoggedIn(true)
          setUser(user)})
      } else {
        responce.json().then(error => console.error(error))
      }
    })
  },[])
  const loginUser = (userData) =>{
    setIsLoggedIn(true)
    setUser(userData)
  }
  const logoutUser =()=>{
   // setIsLoggedIn(false)
    setUser({a: "a"})
  }

  return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <AppTopBar user={user} onLogout={logoutUser} />
          <Routes>
            <Route path="/" element={ isLoggedIn
              ? <List user={user}/>
              : <Placeholder />
            }/>
            <Route path="/login" element={<Login loginUser={loginUser}/>}/>
            <Route path="/signup" element={<SignUp loginUser={loginUser}/>}/>
            <Route path="/shared/:hash" element={<SharedHashList/>}/>
            <Route path="/shared/" element={<SharedList user={user}/>}/>
          </Routes>
          <FooterBar />
        </ThemeProvider>
      </div>
  );;
}

export default App;
