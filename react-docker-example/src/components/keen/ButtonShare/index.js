import React from 'react'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles';

const ButtonShare = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: '12px',
    padding: '4px 8px',
    border: '1px solid',
    lineHeight: 1.5,
    background: 'transparent linear-gradient(180deg, #729ECC 0%, #084BA8 100%) 0% 0% no-repeat padding-box',
    minWidth:80,
    //   borderColor: '#0063cc',
    width:10,

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
      '"Segoe UI Symbol"',
    ].join(','),

    '&:hover': {
      background: '#00336E ',
      // borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      // borderColor: '#005cbf',
    },
    '&:focus': {
      // boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
      boxShadow: 'none',

    },
    '&:disabled': {
      background: '#D3D3D3',
      color: '#fff',

    },
  },
  sizeSmall: {
    fontSize: '10px',
    // padding: '6px 15px',
    width:10
  },
  sizeLarge: {
    fontSize: '20px',
    padding: '6px 48px',
  }
})(Button);

export default function ButtonShares(props) {
  return (
    <ButtonShare variant="contained" startIcon={props.startIcon} fullWidth={props.fullWidth}
      disabled={props.disabled} onClick={props.onClick} size={props.size} href={props.href}
      type={props.type}
    >
      {props.label || 'Button'}
    </ButtonShare>
  )
}
