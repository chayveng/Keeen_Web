import React from 'react';
import Page from 'src/components/Page';
import { Container, makeStyles } from '@material-ui/core';
import JobDetail from './JobDetail';

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
    <Page className={classes.root} title="รายละเอียดใบงาน">
      <Container maxWidth={false}  className={classes.container}>
        <JobDetail />
      </Container>
    </Page>
  );
};
export default user;
