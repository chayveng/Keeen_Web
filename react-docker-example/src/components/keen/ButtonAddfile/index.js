import React from 'react';
import {Button,Box,Grid,makeStyles} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const CustomButton = withStyles({
  root: {
    // margin:3,
    marginRight:1,
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 9,
    // padding: '9px 48px',
    lineHeight: 1.5,
    background: '#EBEBEB', 
    color:'#0F8E54',
    borderRadius: 10,
    width:50,
    minWidth:45,
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
      
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#FFF',
      borderColor: '#0F8E54'
    },
    '&:focus': {
      boxShadow: 'none'
    },
    '&:disabled': {
      background: '#D3D3D3'
    }
  },
  sizeSmall: {
    fontSize: 9,
    padding: '6px 16px',
    width:90
  },
  sizeLarge: {
    fontSize: 16,
    // padding: '6px 48px'

  },
 
})(Button);  

const useStyles = makeStyles((theme) => ({
  sizeTextIcon:{
    fontSize: 10,
    color:'#ccc',
    background: '#D3D3D3'

   
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
      background={props.background}
    >
      <Grid item md={12}>
      {props.label || 'Button'}
      <Box className={classes.sizeTextIcon}>{props.text}</Box>
      </Grid>
    </CustomButton>
  );
}
