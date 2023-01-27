import React from 'react';
import Page from 'src/components/Page';
import {
  Container,
  makeStyles,
} from '@material-ui/core';
import Detail from './profile'


const use = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
}));

const user = () => {

  const classes = use();

  return (
    <Page
      className={classes.root}
      title="โปรไฟล์"
    >
      <Container maxWidth={false} >
        <Detail />
      </Container>
    </Page>
  )
}
export default user