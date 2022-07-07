import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import '@fontsource/roboto/300.css';
import Typography from '@mui/material/Typography';
import Login from "./LoginForm";
import SignUp from "./SignupForm";
import { createTheme } from '@mui/material/styles';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const theme = createTheme({
    palette: {
      primary: {
        main: '#827397',
      },
      secondary: {
        main: '#edf2ff',
      },
    },
  });
  const loginUser = (userData) =>{
    setIsLoggedIn(true)
    setUser(userData)
    
  }

  return (
      <div className="App">
        <Routes>
        <Route path="/" element={<h1>HomePage</h1>}/>
          <Route path="/login" element={<Login theme={theme} loginUser={loginUser}/>}/>
          <Route path="/signup" element={<SignUp theme={theme} loginUser={loginUser}/>}/>
        </Routes>
      </div>
  );;
}

export default App;




// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
