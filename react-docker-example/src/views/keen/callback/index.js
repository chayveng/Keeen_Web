import React, { useEffect, useRef } from 'react';
import {
  Container,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import axios from 'axios';
import querystring from 'querystring'
import { useHistory } from 'react-router';
import Loading from 'src/components/LoadingScreen.js';

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const Callback = () => {
  const classes = useStyles();
  const history = useHistory();

  const queryParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(queryParams.entries());

  const getToken = async () => {
    const code_verifier = await localStorage.getItem('code_verifier')

    console.log('params = '+params.code);
    console.log('code_verifier = '+code_verifier);
    try {
      var response = await axios.post('https://sso.siamtheatre.com/connect/token',
        querystring.stringify({
          // redirect_uri: "http://localhost:3000/callback",
          // client_id: "keen-local",
          // client_secret: "keen-local",
          redirect_uri: "https://www.keeenservice.com/callback",
          client_id: "keen",
          client_name: "keen",
          code: params.code,
          code_verifier: code_verifier,
          grant_type: "authorization_code"
        }), {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })

      console.log(response);
      let id_token = response?.data?.id_token;
      let access_token = response?.data?.access_token;
      console.log(id_token, access_token);

      localStorage.setItem("id_token", id_token)
      localStorage.setItem("access_token", access_token)

      history.push('/')

    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getToken();
  }, [])

  return (
    <Page
      className={classes.root}
      title="Login"
    >
      <Container
        className={classes.cardContainer}
        maxWidth="sm"
      >
        <Loading text="กรุณารอสักครู่..." />
      </Container>
    </Page>
  );
};

export default Callback;