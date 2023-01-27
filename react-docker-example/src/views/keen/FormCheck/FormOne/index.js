import React from 'react';
import Page from 'src/components/Page';
import { Container, makeStyles } from '@material-ui/core';
import FormOne from './FormOne';
// import { PDFDownloadLink } from '@react-pdf/renderer';
// import PDFform1 from './PDFform1';

const use = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  container: { padding: 0 }
}));

const user = () => {
  const classes = use();

  return (
    <Page className={classes.root} title="liquidDispenser">
      <Container maxWidth={false} className={classes.container}>
        {/* <PDFDownloadLink document={<PDFform1 title='หัว' />} fileName="FORM 1">
          {({ loading, error }) =>
            loading ? <button>Loading ...</button> : <button>Download</button>
          }
        </PDFDownloadLink> */}
        <FormOne />
      </Container>
    </Page>
  );
};
export default user;
