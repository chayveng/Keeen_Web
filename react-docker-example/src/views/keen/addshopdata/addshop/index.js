import React from 'react';
import Page from 'src/components/Page';
import { Container, makeStyles, Grid } from '@material-ui/core';
import AddShop from './AddShop';

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
    <Page className={classes.root} title="AddShop">
      <Container maxWidth={false} style={{padding:0}}>
        <Grid container>
          <Grid item xs></Grid>
          <Grid item md={9}>
            {' '}
            <AddShop />
          </Grid>
          <Grid item xs></Grid>
        </Grid>
      </Container>
    </Page>
  );
};
export default user;
