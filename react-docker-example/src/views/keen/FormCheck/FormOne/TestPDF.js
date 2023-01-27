import React from 'react';
import PDFform1 from './PDFform1';
import { PDFDownloadLink } from '@react-pdf/renderer';
function TestPDF() {
  return (
    <div>
      <h2>PDF Test</h2>{' '}
      <PDFDownloadLink
        document={<PDFform1 />}
        fileName="FORM  ตรวจเช็คอุปกรณ์จ่ายน้ำยา.pdf"
      >
        {({ loading, error }) => (loading ? 'Loading ...' : 'Download')}
      </PDFDownloadLink>
    </div>
  );
}

export default TestPDF;
