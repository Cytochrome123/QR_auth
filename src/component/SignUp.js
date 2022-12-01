import { useState } from 'react';

import logo from '../logo.svg';

import axios from 'axios';
import Navbarr from './navbar';
import { useNavigate } from 'react-router-dom';


const SignUp = () => {

  const navigate = useNavigate();
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
            navigate('/');
        })
    }

        
    return (
        <header className="App-header">
          <Navbarr />
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
    )
}

export default SignUp;