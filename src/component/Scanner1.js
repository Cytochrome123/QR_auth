// import {Html5QrcodeScanner} from "html5-qrcode"

const Scanner1 = () => {

    const style = {
        width: '400px'
    };

    // var html5QrcodeScanner = new Html5QrcodeScanner(
    // "reader", { fps: 10, qrbox: 250 });
        
    // function onScanSuccess(decodedText, decodedResult) {
    //     // Handle on success condition with the decoded text or result.
    //     console.log(`Scan result: ${decodedText}`, decodedResult);
    //     // ...
    //     html5QrcodeScanner.clear();
    //     // ^ this will stop the scanner (video feed) and clear the scan area.
    // }

    // html5QrcodeScanner.render(onScanSuccess);
    return (
        <div className="form-group col-lg-6 col-md-12">
            <div className="col-lg-6 col-md-9">
                <div className="text-center"><h3>Scanner</h3></div>
                <div style={style} id="reader"></div>
                
                <div className="col" style={{padding:'30px'}}></div>
                
            </div>
            <div className="col-lg-6 col-md-12">
                <h4>SCAN RESULT</h4>
                <div id="result">Result Here</div>
            </div>
        </div>
    )
}

export default Scanner1;