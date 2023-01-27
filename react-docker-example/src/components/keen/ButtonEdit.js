import React from 'react'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles';

const ButtonEdit = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: '24px',
    // padding: '6px 52px',
    width:180,

    border: '1px solid',
    lineHeight: 1.5,
    background: 'transparent linear-gradient(180deg, #FFF  0%, #FFF 100%) 0% 0% no-repeat padding-box',
    //   borderColor: '#0063cc',
    borderRadius: '10px',
    color: '#028E4E',
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
      background: '#FFF  ',
      // borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#FFF ',
      // borderColor: '#005cbf',
    },
    '&:focus': {
      // boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
      boxShadow: 'none',

    },
    '&:disabled': {
      background: '#D3D3D3',
      color: '#028E4E',

    },
  },
  sizeSmall: {
    fontSize: '16px',
    // padding: '6px 40px',
    width:100

  },
  sizeLarge: {
    fontSize: '20px',
    // padding: '6px 48px',
  }
})(Button);

export default function ButtonEdits(props) {
  return (
    <ButtonEdit variant="contained" startIcon={props.startIcon} fullWidth={props.fullWidth}
      disabled={props.disabled} onClick={props.onClick} size={props.size} href={props.href}
      type={props.type}
    >
      {props.label || 'Button'}
    </ButtonEdit>
  )
}
