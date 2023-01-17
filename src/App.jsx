import { useState } from 'react'
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import './App.css';


function App() {
  const [loggedUser, setLoggedUser] = useState()
  return(loggedUser?<Dashboard userName={loggedUser} /> : <Login setUserName={setLoggedUser} />)
}

export default App
