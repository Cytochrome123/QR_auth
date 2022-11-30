import { useEffect, useRef, useState } from "react"
import axios from 'axios'


const Users = () => {
    const [users, setUsers] = useState([]);

    const ref = useRef(true);
    useEffect(() => {
        if(ref.current) {

            axios({
                method: 'get',
                url: 'https://gold-sweatsuit.cyclic.app/api/users',
            })
            .then(res => {
                console.log(res);
                setUsers(res.data.users)
            })
        }

        return () => ref.current = false;
    })

    return (
        <div>{users.map(user => (
            <div>
                <img src={user.code} alt=""/>
                <div>{user.firstName}</div>
            </div>
        ))}</div>
    )
}

export default Users;