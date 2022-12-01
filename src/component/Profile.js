import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import cookies from 'js-cookie'

import Navbarr from './navbar';
import {BASEURL} from '../App';

const Profile = () => {

    const ref = useRef(true);

    const navigate = useNavigate();

    const [profile, setProfile] = useState({
        firstName: '',
        lastName: '',
        email: '',
        code: ''
    })

    useEffect(() => {
        if (ref.current) {
            const token = cookies.get('token');
            axios({
                method: 'get',
                url: `${BASEURL}/profile`,
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            })
            .then(res => {
                console.log(res.data.user.code)
                setProfile(prev => ({
                    ...prev,
                    firstName: res.data.user.firstName,
                    lastName: res.data.user.lastName,
                    email: res.data.user.email,
                    code: res.data.user.code
                }))
            })
            .catch(err => {
                console.log(err.response.data);
                navigate('/login')
            })
        }

        return () => ref.current = false;
    })

    return (
        <div>
            <Navbarr />
            <img src={profile.code} alt='qr'/>
            <div>{profile.firstName}{profile.lastName}</div>
            <div>{profile.email}</div>
        </div>
    )
}

export default Profile