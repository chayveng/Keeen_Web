import React, { useState } from 'react';
import {
  Box,
  makeStyles,
  Typography,
  Dialog,
  Button,
  Grid,
  DialogContent
} from '@material-ui/core';
import ButtonPramary from 'src/components/keen/Buttonprimary';
import ScanBarcode from './ScanBarcode';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Html5QrcodePlugin from './Html5QrcodePlugin ';
import { useTheme } from '@material-ui/core/styles';
import ButtonSecondary from '../ButtonSecondary';
const useStyles = makeStyles(theme => ({
  root: {
    // width: 600,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  dialog: {
    background: 'white',
    padding: 30
  },
  title: {
    color: '#014426',
    fontFamily: 'Prompt, sans-serif',
    textAlign: 'center',
    fontWeight: 900,
    fontSize: '28px'
  },
  img: {
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontFamily: 'Prompt, sans-serif'
  }
}));

function Dialogbarcode(props) {
  const classes = useStyles();
  const [barcode, setBarcode] = useState();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [dialog, setDialog] = useState(false);
  const onNewScanResult = (decodedText, decodedResult) => {
    // Handle the result here.
    props.handleSerialNumber(decodedText);
    setDialog(true);
    setBarcode(decodedText);
    // props.setTestBar(decodedText)
    console.log(decodedText);
    console.log('-------------');
    console.log(decodedResult);
  };
  const closeDialog = () => {
    setDialog(false);
  };
  return (
    <>
      {dialog ? (
        <Dialog
          fullScreen={fullScreen}
          open={dialog && props.open}
          onClose={closeDialog}
          maxWidth="sm"
          fullWidth
          className={classes.root}
        >
          <DialogContent>
            <Grid container justifyContent="center" xs={12} sm={12} md={12}>
              <Grid item xs={12}>
                <Typography
                  variant="h4"
                  className={classes.title}
                  color="secondary"
                >
                  ข้อมูลที่ได้
                </Typography>
                <Box mt={4} />
                <Typography
                  variant="h4"
                  className={classes.title}
                  color="secondary"
                >
                  {barcode}
                </Typography>
              </Grid>
            </Grid>
            <Box mt={4} />
            <Grid container justifyContent="center" xs={12} sm={12} md={12}>
              <Grid xs={5} sm={5} md={3} style={{ textAlign: 'end' }}>
                <ButtonSecondary
                  label="แสกนใหม่"
                  fullWidth
                  size="small"
                  onClick={closeDialog}
                />
              </Grid>
              <Box ml={2} />
              <Grid xs={5} sm={5} md={3} style={{ textAlign: 'start' }}>
                <ButtonPramary
                  variant="contained"
                  onClick={props.onClose}
                  label="นำไปใช้"
                  size="small"
                />
              </Grid>
            </Grid>
            <Box mt={2} />
          </DialogContent>
        </Dialog>
      ) : (
        <Dialog
          fullScreen={fullScreen}
          open={props.open}
          onClose={props.onClose}
          maxWidth="sm"
          fullWidth
          className={classes.root}
        >
          <div className={classes.dialog}>
            <Box
              mb={2.5}
              justifyContent="space-between"
              display="flex"
              alignItems="center"
            >
              <Grid item xs={12}>
                <Typography
                  variant="h4"
                  className={classes.title}
                  color="secondary"
                >
                  {props.title}
                </Typography>
                {/* <ScanBarcode setTestBar={props.setTestBar}/> */}
                <Html5QrcodePlugin
                  fps={10}
                  qrbox={250}
                  disableFlip={false}
                  qrCodeSuccessCallback={onNewScanResult}
                />
              </Grid>
            </Box>

            <Box mt={4} style={{ textAlign: 'center' }} fullWidth>
              <Grid container justifyContent="center" xs={12} sm={12} md={12}>
                <Grid xs={9} sm={9} md={6}>
                  <ButtonPramary
                    variant="contained"
                    onClick={props.onClose}
                    // href="http://localhost:3000/profile"
                    label="ย้อนกลับ"
                    size="small"
                  />
                </Grid>
              </Grid>
            </Box>
          </div>
        </Dialog>
      )}
    </>
  );
}

export default Dialogbarcode;
