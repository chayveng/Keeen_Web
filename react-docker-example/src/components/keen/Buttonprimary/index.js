import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const ButtonPramary = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: '16px',
    // padding: '6px 52px',
    width: 126,

    border: '1px solid',
    lineHeight: 1.5,
    background:
      'transparent linear-gradient(180deg, #1F8F5B  0%, #028E4E 100%) 0% 0% no-repeat padding-box',
    //   borderColor: '#0063cc',
    borderRadius: '10px',
    color: '#fff',
    fontFamily: [
      'Prompt',
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
      background: '#1F8F5B  ',
      // borderColor: '#0062cc',
      boxShadow: 'none'
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#1F8F5B '
      // borderColor: '#005cbf',
    },
    '&:focus': {
      // boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
      boxShadow: 'none'
    },
    '&:disabled': {
      background: '#D3D3D3',
      color: '#fff'
    }
  },
  sizeSmall: {
    fontSize: '16px',
    // padding: '6px 40px',
    width: '80%'
  },
  sizeLarge: {
    fontSize: '20px'
    // padding: '6px 48px',
  },
})(Button);

export default function ButtonPramarys(props) {
  return (
    <ButtonPramary
      variant="contained"
      startIcon={props.startIcon}
      fullWidth={props.fullWidth}
      disabled={props.disabled}
      onClick={props.onClick}
      size={props.size}
      href={props.href}
      width={props.width}
      type={props.type}
    >
      {props.label || 'Button'}
    </ButtonPramary>
  );
}
