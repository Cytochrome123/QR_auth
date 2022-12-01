import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Scanner = ({open}) => {

    const style = {
        width: '400px'
    }

    const ref = useRef(true);
    useEffect(() => {
        let script;
        if(ref.current) {

            script = document.createElement('script');
    
            script.src = 'https://unpkg.com/html5-qrcode';
            script.outerHTML = `
                console.log(Html5QrcodeScanner)
                var html5QrcodeScanner = new Html5QrcodeScanner(
                "reader", { fps: 10, qrbox: 250 });
                    
                function onScanSuccess(decodedText, decodedResult) {
                    // Handle on success condition with the decoded text or result.
                    // document.getElementById('result').outerHTML = '<input type="text" className="result form-control mb-3" name="fName" value=' + decodedText + 'placeholder=' + decodedText + '></input>' ;
                    // ...
                    document.getElementById('result').setAttribute('value', decodedText)
                    // html5QrcodeScanner.clear();
                    // ^ this will stop the scanner (video feed) and clear the scan area.
                }

                html5QrcodeScanner.render(onScanSuccess);
            `
    
            document.body.appendChild(script)
            script.eval();
        }

        return () => {
            ref.current = false;
            document.body.removeChild(script)
        }
    })

    if(!open) return null
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

            {/* <script type="text/javascript">
    

                console.log(Html5QrcodeScanner)
                var html5QrcodeScanner = new Html5QrcodeScanner(
                "reader", { fps: 10, qrbox: 250 });
                    
                function onScanSuccess(decodedText, decodedResult) {
                    // Handle on success condition with the decoded text or result.
                    console.log(`Scan result: ${decodedText}`, decodedResult);
                    // document.getElementById('result').outerHTML = '<input type="text" className="result form-control mb-3" name="fName" value=' + decodedText + 'placeholder=' + decodedText + '></input>' ;
                    // ...
                    document.getElementById('result').setAttribute('value', decodedText)
                    // html5QrcodeScanner.clear();
                    // ^ this will stop the scanner (video feed) and clear the scan area.
                }

                html5QrcodeScanner.render(onScanSuccess);
            </script> */}
        </div>,
        document.querySelector("#reader")
    )
}

export default Scanner;