import React, { useState, useEffect } from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import Page from 'src/components/Page';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'white',
    height: '100vh',
  },
}));

const Home = () => {
  const classes = useStyles();
  
  useEffect(() => {
    window.location = '/joblist'
  }, [])

  return (
    <Page
      className={classes.root}
      title="Home"
    >
     {/* <Typography>home</Typography> */}
    </Page>
  );
};

export default Home;
