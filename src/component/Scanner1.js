import { useEffect, useRef, useState } from "react";
import Launch1 from "./Launch1";
import Launch2 from "./Launch2";
import Navbarr from "./navbar";

const Scanner1 = () => {

    const [launch, setLaunch] = useState('');


    const determine = (event) => {
        setLaunch(event.target.value)
    }

    return (
        <div>
            <Navbarr />
            <label>Select</label>
            <select name='launch' value={launch} onChange={determine}>
                <option></option>
                <option value='1'>1</option>
                <option value='2'>2</option>
            </select>

            {launch === '1' ? <Launch1 launch={launch}/> : launch === '2' ? <Launch2 launch={launch} /> : <h1>You need to select the .... that's being distributed</h1> }
        </div>
    )
}

export default Scanner1;