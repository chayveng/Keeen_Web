import React, { useState } from 'react';
import {
  Box,
  makeStyles,
  Typography,
  Dialog,
  Button,
  Grid
} from '@material-ui/core';
// import Img from ''
import ButtonPramary from 'src/components/keen/Buttonprimary'
import ButtonSecondary from 'src/components/keen/ButtonSecondary';

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
    color: "#014426",
    fontFamily: "Prompt, sans-serif",
    textAlign: "center",
    fontWeight: 900,
    fontSize: '28px'
  },
  img: {
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontFamily: "Prompt, sans-serif",


  }


}));




const DialogLogOut = ({ open, onClose,cancel }) => {

  const classes = useStyles();
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth={true}
      className={classes.root}
    >
      <div className={classes.dialog}>
        <Box mb={2.5} justifyContent="space-between" display="flex" alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h4" className={classes.title} color='secondary'>
              ต้องการออกจากระบบ?
            </Typography>
            <Box mt={2}/>
            <Box className={classes.img} >
              <img src='/static/images/logOut.svg' style={{ width: 200 }} />
            </Box>
          </Grid >

        </Box>
     

        <Box mt={4} style={{ textAlign: 'center' }} fullWidth>
            <Grid container justifyContent="center" xs={12} sm={12}md={12}>
            <Grid  xs={5} sm={5}md={5} style={{textAlign:'end'}}>
            <ButtonSecondary
              variant="contained"
              onClick={onClose}
              label="ยกเลิก"
              size="small"
            /> 
              </Grid>
              <Box ml={2} />
              <Grid  xs={5} sm={5}md={5}  style={{textAlign:'start'}}>
              <ButtonPramary
              variant="contained"
              onClick={onClose}
              // href="http://localhost:3000/login"
              label="ยืนยัน"
              size="small"
            />
            </Grid>
            </Grid>
          </Box>

      </div>
    </Dialog>
  );
};

export default DialogLogOut;