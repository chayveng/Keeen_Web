import React from 'react';
import {
  Grid,
  Box,
  Typography
} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import SuccessIcon from './SuccessIcon.svg';
import ButtonPramary from 'src/components/keen/Buttonprimary';
import { makeStyles, withStyles } from '@material-ui/core/styles';

function AlertSuccess(props) {
  const preventDefault = event => event.preventDefault();
  const useStyles = makeStyles(theme => ({
    title: {
      textAlign: 'center',
      
    }
  }))
  const classes = useStyles();

  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
    >
      <DialogContent       style={{border:'2px solid #00336e',borderRadius:2}}
>

        <Box mb={2.5} justifyContent="space-between" display="flex" alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h2" className={classes.title} color='secondary'>
              บันทึกข้อมูลสำเร็จ
            </Typography>
            <Box className={classes.title} >
              <img
                src={SuccessIcon}
                alt="Girl in a jacket"
                width="250"
                height="350"
              />            </Box>
          </Grid >

        </Box>
        {props.href ? (
          <Box className={classes.title} >

            <ButtonPramary
              label="ตกลง"
              fullWidth
              size="small"
              //onClick={addMerchant}
              href={props.href}
            />
          </Box>
        ) : (
          <Box className={classes.title} >

            <ButtonPramary
              label="ตกลง"
              fullWidth
              size="small"
              //onClick={addMerchant}
              onClick={props.handleClose}
            />
          </Box>
        )}

      </DialogContent>


    </Dialog>
  );
}

export default AlertSuccess;
