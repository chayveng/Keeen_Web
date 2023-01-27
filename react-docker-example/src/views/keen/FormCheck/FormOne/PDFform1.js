import React, { useEffect, useState } from 'react';
import { Page, Text, Font, Document, StyleSheet } from '@react-pdf/renderer';
import { getJobSearch } from '../../api/keeen/job';

//---------------error when use th font------------------
// import FontPrompt from '../../Font/Prompt-Regular.ttf';
// Font.register({
//   family: 'Prompt',
//   src: FontPrompt
// });

// Create style with font-family
const styles = StyleSheet.create({
  page: {
    // fontFamily: 'Prompt',
  },
  header: {
    fontSize: 26
  },
  body: {
    fontSize: 14
  }
});

const PDFform1 = props => {
    //------ข้อมูลยังไม่ได้ใช้--------
  const [jobDetail, setJobDetail] = useState({});
  const fetchJob = async () => {
    await getJobSearch(props.job_ID).then(res => {
      console.log(res.data.result.data);
      setJobDetail(res.data.result.data)
    }).catch(err=>{
        console.log(err);
    })
  };
  useEffect(() => {
    fetchJob();
  }, []);
  return (
    <Document>
      <Page style={styles.page}>
        <Text style={styles.header}>{props.title}</Text>
        <Text style={styles.body}>jobID :{props.job_ID}</Text>
        <Text>วันที่นัดหมาย : </Text>
        <Text>ข้อมูลใบงาน</Text>
        <Text>customerID : {jobDetail.customerId}</Text>
        <Text>customerName : {jobDetail.customerName}</Text>
        <Text>สาขา</Text>
        <Text>ที่อยู่</Text>
        <Text>อีเมล </Text>
        <Text>โทรศัพท์ </Text>
        <Text>Barcode OT-AIRDIS</Text>
        <Text>ชื่ออุปกรณ์</Text>
        <Text>Serial No</Text>
        <Text>Lot No</Text>
      </Page>
    </Document>
  );
};

export default PDFform1;
