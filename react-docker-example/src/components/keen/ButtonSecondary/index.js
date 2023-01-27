import React from 'react';
import {Button,Box,Grid,makeStyles} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const CustomButton = withStyles({
  root: {
   
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 20,
    // padding: '9px 48px',
    border: '1px solid',
    lineHeight: 1.5,
    background: '#FFFFFF',
    borderColor: '#028E4E',
    borderRadius: 10,
    color: '#028E4E',
    width:180,

    fontFamily: [
   '   Prompt, sans-serif',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(','),
    '&:hover': {
      background: '#FFF',
      borderColor: '#028E4E',
      color: '#028E4E',
      boxShadow: 'none'
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#FFF',
      borderColor: '#028E4E'
    },
    '&:focus': {
      boxShadow: 'none'
    },
    '&:disabled': {
      background: '#D3D3D3'
    }
  },
  sizeSmall: {
    fontSize: '94%',
    // padding: '6px 35px'
    width:'80%',
    textAlign:'center'
  },
  sizeLarge: {
    fontSize: 16,
    // padding: '6px 48px'
    width:100

  },
 
})(Button);

const useStyles = makeStyles((theme) => ({
  sizeTextIcon:{
    fontSize: 10,
    color:'#0F8E54'
   
  }
}));



export default function ButtonSecondary(props) {
  const classes = useStyles();
  return (
    <CustomButton
      variant="contained"
      fullWidth={props.fullWidth}
      disabled={props.disabled}
      onClick={props.onClick}
      size={props.size}
      startIcon={props.startIcon}
      href={props.href}
    >
      <Grid item md={12}>
      {props.label || 'Button'}
      <Box className={classes.sizeTextIcon}>{props.text}</Box>
      </Grid>
    </CustomButton>
  );
}
