import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import axios from 'axios';
import Users from './component/Users';
import Scanner from './component/Scanner';
import Scanner1 from './component/Scanner1';
import Scanner2 from './component/Scanner2';

function App() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })

  const handleChange = (event) => {
    setFormData(prev => ({
      ...prev,
      [event.target.name]: event.target.value
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios({
      method: 'post',
      url: 'https://gold-sweatsuit.cyclic.app/api/signup',
      data: formData
    })
    .then(res => {
      console.log(res.data.msg)
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <form onSubmit={handleSubmit}>
          <input type='text' name='firstName' placeholder='first Name' value={formData.firstName} onChange={handleChange} />
          <input type='text' name='lastName' placeholder='Last Name' value={formData.lastName} onChange={handleChange} />
          <input type='email' name='email' placeholder='email' value={formData.email} onChange={handleChange} />
          <input type='password' name='password' placeholder='Password' value={formData.password} onChange={handleChange} />
          <button type='submit'>Submit</button>
        </form>
      </header>
      <Router>
        <Routes>
          <Route exact path='/users' element={<Users />} />
          <Route exact path='/scan' element={<Scanner />} />
          <Route exact path='/scn' element={<Scanner1 />} />
          <Route exact path='/scann' element={<Scanner2 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
