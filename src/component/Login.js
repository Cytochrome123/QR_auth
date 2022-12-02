import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import cookies from 'js-cookie'

import Navbarr from './navbar';
import {BASEURL} from '../App'

const Login = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
      });

      const navigate = useNavigate();
  
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
              url: `${BASEURL}/login`,
              data: formData
          })
          .then(res => {
              console.log(res.data);
              cookies.set('token', res.data.token);

              if(res.data.role === 'admin') {
                navigate('/scn');
              } else {
                navigate('/profile');
              }
          })
          .catch(e => console.log(e.response.data.msg));
      }


    return (
        <div>
            <Navbarr />
            <form onSubmit={handleSubmit}>
                <input type='email' name='email' placeholder='email' value={formData.email} onChange={handleChange} />
                <input type='password' name='password' placeholder='Password' value={formData.password} onChange={handleChange} />
                <button type='submit'>Submit</button>
             </form>
        </div>
    )
}


export default Login;