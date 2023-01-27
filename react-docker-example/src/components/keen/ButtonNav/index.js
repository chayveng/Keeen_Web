import React from 'react'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles';


const ButtonNav = withStyles({
    root: {
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: '24px',
      padding: '6px 24px',
      lineHeight: 1.5,
      background:  '#FFF',
      borderRadius: '10px',
      color:'#00336e',
      margin:5,
      width:'100%',
      justifyContent:'flex-start',
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
        background: '#FFF ',
        // borderColor: '#0062cc',
        boxShadow: 'none',
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#00336E ',
        color:'#FFF'
        // borderColor: '#005cbf',
      },
      '&:focus': {
        // boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        boxShadow: 'none',

      },
      '&:disabled':{
        background: '#D3D3D3',
        color:'#fff',

      },
    },
    sizeSmall:{
        fontSize: '16px',
        padding: '6px 40px 6px 25px',
      },
    sizeLarge:{ fontSize: '20px',
      padding: '6px 48px',}
  })(Button);

export default function ButtonNavbar(props) {
    return (
            <ButtonNav variant="contained" fullWidth={props.fullWidth} 
            disabled={props.disabled} onClick={props.onClick} size={props.size} 
            startIcon={props.startIcon} endIcon={props.endIcon}>
                {props.label}
            </ButtonNav>
    )
}
