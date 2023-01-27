import React, { useState, useEffect } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

const ScanBarcode = (props) => {
  const [scannedCodes, setScannedCodes] = useState([]);

  function activateLasers() {
    var decodedText = '';
    var decodedResult = '';
    console.log(scannedCodes);

    setScannedCodes(scannedCodes.concat([{ decodedText, decodedResult }]));
  }

 
  useEffect(() => {
    function onScanSuccess(decodedText, decodedResult) {
      // handle the scanned code as you like, for example:
      console.log(`Code matched = ${decodedText}`, decodedResult);
      props.setTestBar(decodedText)
      //setScannedCodes(scannedCodes.concat([{ decodedText, decodedResult }]));
      html5QrcodeScanner.clear();
    }
    let html5QrcodeScanner = new Html5QrcodeScanner(
        'reader',
        { fps: 10, qrbox: { width: 250, height: 250 } },
        /* verbose= */ false
      );
      
  
    html5QrcodeScanner.render(onScanSuccess);
  

 
  });

  return (
    <div>
      <h2>html5 barcode test</h2>
      <p>description</p>
      <div
        id="reader"
        style={{ width: '100%', height: 'auto' }}
        width="600px"
      ></div>
      {/* <ol>
        {scannedCodes.map((scannedCode, index) => (
          <li key={index}>{scannedCode.decodedText}</li>
        ))}
      </ol> */}
      {/* <button onClick={activateLasers}>Activate Lasers</button> */}
      
    </div>
  );
};

export default ScanBarcode;
