import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, ButtonGroup, Button } from 'react-bootstrap';
// import Launch1 from "./Launch1";
// import Launch2 from "./Launch2";
import Navbarr from "./navbar";

const Scanner1 = () => {

    const [launch, setLaunch] = useState('');
    const launchRef = useRef();
    const navigate = useNavigate()


    const determine = (event) => {
        setLaunch(event.target.value)
    }
console.log(launchRef.current)
    function determ(){
        // setLaunch(event.target.value)
        if(launchRef.current.value === '1') {
            navigate('/scn/1')
        } else {
            navigate('/scn/2')
        }
    }

    return (
        <div>
            <Navbarr />


            <ButtonGroup size="sm">
                <Button variant="secondary" onClick={() => navigate('/users')}>All Users</Button>
                <Button variant="secondary" onClick={() => navigate('/scn/1')}>Mark Attendance</Button>
                <Button variant="secondary" onClick={() => navigate('/scn/2')}>Issue Lunch</Button>
                <Button variant="secondary" onClick={() => navigate('/scn/3')}>Issue Swags</Button>
            </ButtonGroup>
            {/* <Form> */}

                {/* <input type='text' value='hkdhck' ref={launchRef} /> */}
                {/* <Form.Check
                    inline
                    label='1'
                    name="1"
                    type='radio'
                    id={`inline-}-1`}
                    onChange={determ}
                    value='1'
                    ref={launchRef}
                    // onClick={() => handleCorrectAnswer(formData.optionType, index)}
                />
                <Form.Check
                    inline
                    label='2'
                    name="1"
                    type='radio'
                    id={`inline-}-1`}
                    onChange={determ}
                    value='2'
                    ref={launchRef}
                    // onClick={() => handleCorrectAnswer(formData.optionType, index)}
                /> */}
            {/* </Form> */}

            {/* <label>Select</label>
            <select name='launch' value={launch} onChange={determine}>
                <option></option>
                <option value='1'>1</option>
                <option value='2'>2</option>
            </select>
            <button onClick={determ}>Proceed</button> */}

            {/* {launch === '1' ? <Launch1 launch={launch}/> : launch === '2' ? <Launch2 launch={launch} /> : <h1>You need to select the .... that's being distributed</h1> } */}
        </div>
    )
}

export default Scanner1;