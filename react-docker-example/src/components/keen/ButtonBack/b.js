import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const CustomButton = withStyles({
  root: {
   
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 20,
    padding: '9px 48px',
   
    lineHeight: 1.5,
    background: 'none',

    color: '#00336E',
    fontFamily: [
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
      background: 'none',

      color: '#3777BD',
      boxShadow: 'none'
    },
    '&:active': {
      boxShadow: 'none'
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
    padding: '9px 40px'
  },
  sizeLarge: {
    fontSize: 24,
    padding: '9px 48px'
  }
})(Button);

export default function ButtonBack(props) {
  return (
    <CustomButton
      variant="contained"
      fullWidth={props.fullWidth}
      disabled={props.disabled}
      onClick={props.onClick}
      size={props.size}
      startIcon={props.startIcon}
      endIcon={props.endIcon}
      onClick={props.onClick}
    >
      {props.label}
    </CustomButton>
  );
}
