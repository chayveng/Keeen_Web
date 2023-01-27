import React from 'react'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles';

const CustomButton = withStyles({
    root: {
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 16,
      padding: '9px 30px',
      border: '1px solid',
      lineHeight: 1.5,
      background: 'linear-gradient(red, yellow)',
      borderColor: '#0063cc',
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
        '"Segoe UI Symbol"',
      ].join(','),
      '&:hover': {
        background: '#D45E60',
        borderColor: '#0062cc',
        boxShadow: 'none',
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
      },
      '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
      },
      '&:disabled':{
        background: '#D3D3D3',
      }
    },
  
  })(Button);

export default function ButtonRedGradient(props) {
    return (
            <CustomButton variant="contained" size={props.size} fullWidth={props.fullWidth} disabled={props.disabled} onClick={props.onClick}>
                {props.label||'Button'}
            </CustomButton>
    )
}
