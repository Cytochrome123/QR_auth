import { useEffect, useRef, useState } from "react"
import axios from 'axios'

import Navbarr from './navbar';
import {BASEURL} from '../App'


const Users = () => {
    const [users, setUsers] = useState([]);

    const ref = useRef(true);
    useEffect(() => {
        if(ref.current) {

            axios({
                method: 'get',
                url: `${BASEURL}/users`
            })
            .then(res => {
                console.log(res);
                setUsers(res.data.users)
            })
        }

        return () => ref.current = false;
    })

    return (
        <div>
            <Navbarr />
            {users.map(user => (
                <div>
                    <img src={user.code} alt=""/>
                    <div>{user.firstName}</div>
                </div>
            ))}
        </div>
    )
}

export default Users;