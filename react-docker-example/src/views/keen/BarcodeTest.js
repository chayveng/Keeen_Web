// file = Html5QrcodePlugin.jsx

import { Html5QrcodeScanner } from 'html5-qrcode';
import React,{ useState } from 'react';
import Html5QrcodePlugin from './Html5QrcodePlugin ';
function BarcodeTest() {
 
  const onNewScanResult = (decodedText, decodedResult) => {
    // Handle the result here.

    console.log(decodedText);
    console.log("-------------");
    console.log(decodedResult);
  };
  return (
    <div>
      <h1>Html5Qrcode React example!</h1>
      <Html5QrcodePlugin
        fps={10}
        qrbox={250}
        disableFlip={false}
        qrCodeSuccessCallback={onNewScanResult}
      />
 
    </div>
  );
}

export default BarcodeTest;
