import { Component, createRef } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode'

import jwtDecode from 'jwt-decode';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import {BASEURL} from '../App';

class Launch1 extends Component{
    constructor() {
		super();
		// this.shadow = this.attachShadow({ mode: 'open' });
		// this.currentCount = 0;
		// this.update();
        this.html5QrcodeScanner = new Html5QrcodeScanner(
        "reader", { fps: 10, qrbox: 250 });
        this.resultRef = createRef();
        this.state = {
            msg: '',
            collected: [],
            visible: true
        }
	}

    toggleVisible = () => { 
        const scrolled = document.documentElement.scrollTop; 
        if (scrolled > 0){ 
        this.setState({visible: false}) 
        }  
        else if (scrolled <= 0){ 
        this.setState({visible: true}) 
        } 
    }; 

    scrollToBottom = () =>{ 
        window.scrollTo({ 
          top: document.documentElement.scrollHeight, 
          behavior: 'auto'
          /* you can also use 'auto' behaviour 
             in place of 'smooth' */
        }); 
    }; 
        
      
    // console.log(Html5QrcodeScanner)
    // var html5QrcodeScanner = 
        
    onScanSuccess(decodedText, decodedResult){
        // Handle on success condition with the decoded text or result.
        console.log(`Scan result: ${decodedText}`, decodedResult);
        // document.getElementById('result').outerHTML = '<input type="text" className="result form-control mb-3" name="fName" value=' + decodedText + 'placeholder=' + decodedText + '></input>' ;
        // ...
        document.getElementById('result').setAttribute('value', decodedText)
        // html5QrcodeScanner.clear();
        // ^ this will stop the scanner (video feed) and clear the scan area.
    }

    componentDidMount() {
        // console.log(Html5QrcodeScanner)
        // this.html5QrcodeScanner = new Html5QrcodeScanner(
        //     "reader", { fps: 10, qrbox: 250 });
        // this.html5QrcodeScanner.render(this.onScanSuccess);
        // console.log(this.resultRef);
        this.load();
    }

    Add = (event) => {
        event.preventDefault();
        console.log(this.resultRef.current.value)
        const decoded = jwtDecode(this.resultRef.current.value);
        console.log(decoded)

        axios({
            method: 'patch',
            url: `${BASEURL}/souvenier1`,
            data: decoded
        })
        .then(res => {
            console.log(res.data.msg)
            this.setState({
                msg: res.data.msg
            })
            this.load();
        })
        .catch(err => {
            console.log(err.response.data.msg)
        })
    }

    load(){
        axios({
            method: 'get',
            url: `${BASEURL}/collected1`
        })
        .then(res => {
            console.log(res)
            this.setState({
                collected: res.data.data 
            })
        })
    }

    render(){
        window.addEventListener('scroll', this.toggleVisible);
        this.html5QrcodeScanner.render(this.onScanSuccess);
        return(
            <div>
                
                <form onSubmit={this.Add}>

                    {/* <div id="reader"></div> */}
                    <div className="col-lg-6 col-md-12">
                        <h4>SCANNN RESULT</h4>
                        {/* <div id="result">Result Here</div> */}
                    </div>
                        <input type='text' ref={this.resultRef} name='result' placeholder="Result"  id='result'/>
                        <button type='submit' >Add</button>
                </form>

                {this.state.msg}
                
                <div className='text-left'>

                    <a onClick={this.scrollToBottom}>Down</a>    
                    <i className='fa fa-arrow-down'></i>  
                    <i className="bi bi-arrow-bar-down" onClick={this.scrollToBottom}></i> 
                </div>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>S/N</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.collected.map((collectd,index) => (
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
}


export default Launch1;
// import jwtDecode from 'jwt-decode';
// import { useEffect, useRef, useState } from "react";
// import axios from 'axios';
// import { Table } from 'react-bootstrap';

// import {BASEURL} from '../App';

// const Launch1 = ({launch}) => {

//     const resultRef = useRef();
//     const ref = useRef(true);

//     const [data, setData] = useState({
//         msg: '',
//         collected: []
//     })

//     const [visible, setVisible] = useState(true)

//     useEffect(() => {
//         if(ref.current) {
//             load()
//         }  
//         return () => ref.current = false;
//     })
// console.log(data.collected)


//     const toggleVisible = () => { 
//         const scrolled = document.documentElement.scrollTop; 
//         if (scrolled > 0){ 
//         setVisible(false) 
//         }  
//         else if (scrolled <= 0){ 
//         setVisible(true) 
//         } 
//     }; 

//     const scrollToBottom = () =>{ 
//         window.scrollTo({ 
//           top: document.documentElement.scrollHeight, 
//           behavior: 'auto'
//           /* you can also use 'auto' behaviour 
//              in place of 'smooth' */
//         }); 
//       }; 
        
//       window.addEventListener('scroll', toggleVisible);

//     const Add = (event) => {
//         event.preventDefault();
//         console.log(resultRef.current.value)
//         const decoded = jwtDecode(resultRef.current.value);
//         console.log(decoded)

//         axios({
//             method: 'patch',
//             url: `${BASEURL}/souvenier1`,
//             data: decoded
//         })
//         .then(res => {
//             console.log(res.data.msg)
//             setData(prev => ({
//                 ...prev,
//                 msg: res.data.msg
//             }))
//             load();
//         })
//         .catch(err => {
//             console.log(err.response.data.msg)
//         })
//     }

//     function load(){
//         axios({
//             method: 'get',
//             url: `${BASEURL}/collected1`
//         })
//         .then(res => {
//             console.log(res)
//             setData(prev => ({
//                 ...prev,
//                 collected: res.data.data 
//             }))
//         })
//     }

    

//     return (
//         <div>     
//             <div className='text-left'>

//                 <a onClick={scrollToBottom}>Down</a>    
//                 <i className='fa fa-arrow-down'></i>  
//                 <i className="bi bi-arrow-bar-down" onClick={scrollToBottom}></i> 
//             </div>
//             <form onSubmit={Add}>

//                 {/* <div id="reader"></div> */}
//                 <div className="col-lg-6 col-md-12">
//                     <h4>SCANNN RESULT</h4>
//                     {/* <div id="result">Result Here</div> */}
//                 </div>
//                     <input type='text' ref={resultRef} name='result' placeholder="Result"  id='result'/>
//                     <button type='submit' >Add</button>
//             </form>
// {data.msg}
//             <Table striped bordered hover variant="dark">
//                 <thead>
//                     <tr>
//                         <th>S/N</th>
//                         <th>Name</th>
//                         <th>Email</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {data.collected.map((collectd,index) => (
//                         <tr key={index} >
//                             <td>{index + 1}</td>
//                             <td>{collectd.firstName}</td>
//                             <td> {collectd.email} </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </Table>
//         </div>
//     )
// }

