import {Link, Router, Route, useParams } from 'react-router-dom'
import { useState } from 'react';
import  './App.css';
import Login from './pages/login';
function App() {
  const [user , setUser] = useState();
  const [pass , setPass] = useState();
  var userKey = 'user';
  var passKey = 'pass';
  const valueUser = e => setUser(e.target.value)
  const valuePass = e => setPass(e.target.value)
  const handleSave = () =>{
      localStorage.setItem(userKey, user)
      localStorage.setItem(passKey, pass)
  }
    const newData = localStorage.getItem(userKey, user)

  return (
  <div className="App">
    <h2>Welcome</h2>
    <input id='inputApp' placeholder='UserName' onChange={valueUser}></input>
    <input id='inputApp' placeholder='PassWord' onChange={valuePass}></input>
    <button id='buttonApp' onClick={handleSave}><Link to='/login'>Login</Link></button>
  </div>
  )
}


export default App;
