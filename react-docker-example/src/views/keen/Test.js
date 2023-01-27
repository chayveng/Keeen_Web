import { PDFDownloadLink } from '@react-pdf/renderer';
import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom';
import { getJobSearch } from './api/keeen/job';

import ImgResizeTest from './ImgResizeTest';
import PdfBtn from './Test/PDF64/PdfBtn';
import PDFtest from './Test/PDFtest';

export default function Test() {
  // const classes = useStyles();
  const history = useHistory();

  let [product, setproduct] = useState({});
  let [load, setLoad] = useState(false);

  let testA = <PDFtest />;
  useEffect(() => {
    async function fetchData() {
      await getJobSearch('JOK01-220819-008')
       .then(res=>{
        const data = res.data.result.data
        console.log(data)
        setLoad(true)
       }).catch(err=>{
        console.log(err);
       })

    }
    fetchData();
  }, []);

  return (
    <div>
      {load ? (
        <PDFDownloadLink document={testA} fileName="FORM">
          {({ loading, error }) =>
            loading ? <button>Loading ...</button> : <button>Download</button>
          }
        </PDFDownloadLink>
      ) : null}
      <PdfBtn/>
    </div>
  );
}
