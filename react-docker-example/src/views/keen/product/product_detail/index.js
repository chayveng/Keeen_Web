import React from 'react';
import Page from 'src/components/Page';
import { Container, makeStyles } from '@material-ui/core';
import ProductDetail from './ProductDetail';

const use = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  }
}));

const user = () => {
  const classes = use();

  return (
    <Page className={classes.root} title="รายการสินค้าและอุปกรณ์">
      <Container maxWidth={false} style={{padding:0}}>
        <ProductDetail />
      </Container>
    </Page>
  );
};
export default user;
