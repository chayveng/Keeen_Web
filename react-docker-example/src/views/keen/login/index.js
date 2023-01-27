import React, { useEffect, useState, useRef } from 'react';
import Page from 'src/components/Page';
import {
  Container,
  makeStyles,
  Card,
  Typography,
  Grid,
  Box
} from '@material-ui/core';
import ButtonPramary from 'src/components/keen/Buttonprimary';
import cryto from 'crypto';
import { base64URLEncode } from '../../../utils/authHelper';
const use = makeStyles(theme => ({
  root: {
    minHeight: '100%',
    overflowX: 'hidden',
    overflowY: 'hidden'
  },
  container: {
    padding: 0
  },
  cardPad: {
    width: 300,
    height: 300,
    margin: 'auto',
    borderRadius: '20px',
    textAlign: 'center',
    padding: '20px'
  },
  logo: {
    width: 100
  }
}));

const Login = () => {
  const classes = use();
  const formRef = useRef(null);
  const [codeChallenge, setCodeChallenge] = useState('');
  useEffect(() => {
    let code_verifier = base64URLEncode(cryto.randomBytes(32));
    const localStorage = window.localStorage;
    localStorage.setItem('code_verifier', code_verifier);
    let _codeChallenge = base64URLEncode(
      cryto
        .createHash('sha256')
        .update(code_verifier)
        .digest()
    );
    setCodeChallenge(_codeChallenge);
  }, []);
  return (
    <Page className={classes.root} title="login">
      <div
        className={classes.cover}
        style={{
          backgroundImage: `url(${'/static/images/background.png'})`,
          width: '100vw',
          height: '100vh',
          backgroundRepeat: 'no-repeat',
          display: 'table-cell',
          verticalAlign: 'middle'
        }}
      >
        <form
          ref={formRef}
          id="myForm"
          method="POST"
          action="https://sso.siamtheatre.com/connect/authorize"
        >
          {/* <input
            type="hidden"
            className="form-control"
            name="redirect_uri"
            value="http://localhost:3000/callback"
          />
          <input
            type="hidden"
            className="form-control"
            name="client_id"
            value="keen-local"
          />
          <input
            type="hidden"
            className="form-control"
            name="client_secret"
            value="keen-local"
          /> */}
          <input
            type="hidden"
            className="form-control"
            name="redirect_uri"
            value="https://www.keeenservice.com/callback"
          />
          <input
            type="hidden"
            className="form-control"
            name="client_id"
            value="keen"
          />
          <input
            type="hidden"
            className="form-control"
            name="client_name"
            value="keen"
          />
          {/* ----------------------- */}
          <input
            type="hidden"
            className="form-control"
            name="scope"
            value="openid profile"
          />
          <input
            type="hidden"
            className="form-control"
            name="code_challenge"
            value={codeChallenge}
          />
          <input
            type="hidden"
            className="form-control"
            name="code_challenge_method"
            value="S256"
          />
          <input
            type="hidden"
            className="form-control"
            name="response_type"
            value="code"
          />
          <Card className={classes.cardPad}>
            <Grid item spacing={2}>
              <img
                src="/static/images/Logo_keen.svg"
                className={classes.logo}
              />
              <Box mt={4} />
              <Typography variant="h3" color="textPrimary">
                ยินดีต้อนรับเข้าสู่ " KEEEN "
              </Typography>
              <Box mt={4} />

              <ButtonPramary
                label="เข้าสู่ระบบ"
                fullWidth
                size="small"
                type="submit"
              />
            </Grid>
          </Card>
        </form>
      </div>
    </Page>
  );
};
export default Login;
