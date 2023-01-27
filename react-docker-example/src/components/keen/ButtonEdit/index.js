import React from 'react';
import {Button,Box,Grid,makeStyles} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const CustomButton = withStyles({
  root: {
    margin:3,
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 20,
    // padding: '9px 48px',
    border: '1px solid',
    lineHeight: 1.5,
    background: '#FFFFFF',
    borderColor: '#00336e',
    borderRadius: 10,
    color: '#00336e',
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
      background: '#3777BD',
      borderColor: '#3777BD',
      color: '#FFFFFF',
      boxShadow: 'none'
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf'
    },
    '&:focus': {
      boxShadow: 'none'
    },
    '&:disabled': {
      background: '#D3D3D3'
    }
  },
  sizeSmall: {
    fontSize: 16,
    // padding: '6px 35px'
    width:100
  },
  sizeLarge: {
    fontSize: 16,
    // padding: '6px 48px'

  },
 
})(Button);

const useStyles = makeStyles((theme) => ({
  sizeTextIcon:{
    fontSize: 10,
    color:'#084BA8'
   
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
