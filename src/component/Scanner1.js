
import jwtDecode from 'jwt-decode';
import { useEffect, useRef, useState } from "react";
import axios from 'axios';
import { Table } from 'react-bootstrap';

import Navbarr from './navbar';

const Scanner1 = () => {

    const resultRef = useRef();
    const ref = useRef(true);

    const [data, setData] = useState({
        msg: '',
        collected: []
    })

    useEffect(() => {
        if(ref.current) {
            load()
        }  
        return () => ref.current = false;
    })
console.log(data.collected)
    const Add = (event) => {
        event.preventDefault();
        console.log(resultRef.current.value)
        const decoded = jwtDecode(resultRef.current.value);
        console.log(decoded)

        axios({
            method: 'patch',
            url: 'https://gold-sweatsuit.cyclic.app/api/souvenier',
            data: decoded
        })
        .then(res => {
            console.log(res.data.msg)
            setData(prev => ({
                ...prev,
                msg: res.data.msg
            }))
            load();
        })
        .catch(err => {
            console.log(err.data.msg)
        })
    }

    function load(){
        axios({
            method: 'get',
            url: 'https://gold-sweatsuit.cyclic.app/api/collected'
        })
        .then(res => {
            console.log(res)
            setData(prev => ({
                ...prev,
                collected: res.data.data 
            }))
        })
    }

    return (
        <div>
            <Navbarr />
            <form onSubmit={Add}>

                {/* <div id="reader"></div> */}
                <div className="col-lg-6 col-md-12">
                    <h4>SCANNN RESULT</h4>
                    {/* <div id="result">Result Here</div> */}
                </div>
                    <input type='text' ref={resultRef} name='result' placeholder="Result"  id='result'/>
                    <button type='submit' >Add</button>
            </form>
{data.msg}
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>S/N</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {data.collected.map((collectd,index) => (
                        <tr key={index} >
                            <td>{index + 1}</td>
                            <td>{collectd.firstName}</td>
                            <td> {collectd.email} </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default Scanner1;