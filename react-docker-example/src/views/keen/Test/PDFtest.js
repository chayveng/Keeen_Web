import React from 'react';
import { Page, Text, Font, Document, StyleSheet } from '@react-pdf/renderer';
import FontPrompt from '../Font/Prompt-Regular.ttf';

Font.register({
  family: 'Prompt',
  src: FontPrompt
});

// Create style with font-family
const styles = StyleSheet.create({
  page: {
    fontFamily: 'Prompt',
  },
  header:{
    fontSize: 26
  },
  body:{
    fontSize: 14
  }
});

const PDFtest = (props) => {
  return (
    <Document>
      <Page style={styles.page}>
        <Text style={styles.header}>{props.header}</Text>
        <Text style={styles.header}>เลขที่ใบงาน</Text>
        <Text>วันที่นัดหมาย</Text>
        <Text>ข้อมูลใบงาน</Text>
        <Text>รหัสร้านค้า</Text>
        <Text>ชื่อร้านค้า</Text>
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

export default PDFtest;
