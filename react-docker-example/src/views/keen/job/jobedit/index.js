import React from 'react';
import Page from 'src/components/Page';
import { Container, makeStyles } from '@material-ui/core';
import JobEdit from './JobEdit';

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
    <Page className={classes.root} title="แก้ไขใบงาน">
      <Container maxWidth={false}  className={classes.container}>
        <JobEdit />
      </Container>
    </Page>
  );
};
export default user;
