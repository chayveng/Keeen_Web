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




const Dialogsuc = ({ open, onClose, title }) => {

  const classes = useStyles();
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      className={classes.root}
    >
      <div className={classes.dialog}>
        <Box mb={2.5} justifyContent="space-between" display="flex" alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h4" className={classes.title} color='secondary'>
              {title}
            </Typography>
            <Box className={classes.img} >
              <img src='/static/images/saveProfile.svg' style={{ width: 200 }} />
            </Box>
          </Grid >

        </Box>

        <Box mt={4} style={{ textAlign: 'center' }} fullWidth>
          <Grid container justifyContent="center" xs={12} sm={12} md={12}>
            <Grid xs={9} sm={9} md={6}  >
              <ButtonPramary
                variant="contained"
                onClick={onClose}
                // href="http://localhost:3000/profile"
                label="ตกลง"
                size="small"

              />
            </Grid>
          </Grid>
        </Box>
      </div>
    </Dialog>
  );
};

export default Dialogsuc;