import { createPortal } from "react-dom";

const Scanner = () => {

    const style = {
        width: '400px'
    }
    return createPortal(
        <div className="form-group col-lg-6 col-md-12">
            <div className="col-lg-6 col-md-9">
                <div className="text-center"><h3>Scanner</h3></div>
                <div style={style} id="reader"></div>
                
                <div className="col" style={{padding:'30px'}}></div>
                
            </div>
            <div className="col-lg-6 col-md-12">
                <h4>SCANNN RESULT</h4>
                <div id="result">Result Here</div>
            </div>
        </div>,
        document.querySelector("#reader")
    )
}

export default Scanner;