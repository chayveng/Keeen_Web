import React from 'react';
import Page from 'src/components/Page';
import { Container, makeStyles } from '@material-ui/core';
import FormThree from './FormThree';

const use = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  container:{padding:0}
}));

const user = () => {
  const classes = use();

  return (
    <Page className={classes.root} title="hydroMaster">
      <Container maxWidth={false}  className={classes.container}>
        <FormThree />
      </Container>
    </Page>
  );
};
export default user;
