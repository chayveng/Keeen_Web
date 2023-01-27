import React from 'react';
import Page from 'src/components/Page';
import { Container, makeStyles } from '@material-ui/core';
import Detaileperson from './detaileperson';

const use = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  container: { padding: 0 }
}));

const merchant = () => {
  const classes = use();

  return (
    <Page className={classes.root} title="รายชื่อพนักงาน">
      <Container maxWidth={false} className={classes.container}>
        <Detaileperson />
      </Container>
    </Page>
  );
};
export default merchant;
