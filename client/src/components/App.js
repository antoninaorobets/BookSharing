import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import '@fontsource/roboto/300.css';
import Login from "./LoginForm";
import SignUp from "./SignupForm";
import AppTopBar from "./AppTopBar";
import List from "./List";
import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
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
  const onLogout =()=>{
    setIsLoggedIn(false)
    setUser({})
  }

  return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <AppTopBar user={user} isLoggedIn={isLoggedIn} onLogout={onLogout} />
          <Routes>
            <Route path="/" element={<List user={user}/>}/>
            <Route path="/login" element={<Login loginUser={loginUser}/>}/>
            <Route path="/signup" element={<SignUp loginUser={loginUser}/>}/>
          </Routes>
        </ThemeProvider>
      </div>
  );;
}

export default App;
