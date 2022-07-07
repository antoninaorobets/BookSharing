import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import '@fontsource/roboto/300.css';
import Typography from '@mui/material/Typography';
import Login from "./LoginForm";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
      <div className="App">
        <Routes>
          <Route path="/testing"element={  <Typography mt={2} variant="h3" component="div" gutterBottom>Test Route</Typography>}/>
          <Route path="/" element={ <h1>Page Count: {count}</h1>}/>
          <Route path="/login" element={ <Login/>}/>
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
