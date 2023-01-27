import React from 'react'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles';

const ButtonBack = withStyles({
    root: {
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: '24px',
        lineHeight: 1.5,
        background: 'transparent ',


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
            '"Segoe UI Symbol"',
            // '"Prompt, sans-serif"'
        ].join(','),

        '&:hover': {
            // background: '#00336E ',
            // borderColor: '#0062cc',
            color:'#3777BD',
            boxShadow: 'none',
            background: 'transparent ',

        },
        '&:active': {
            boxShadow: 'none',
            // backgroundColor: '#0062cc',
            // borderColor: '#005cbf',
        },
        '&:focus': {
            boxShadow: 'none',
        },
        // '&:disabled': {
        //     // background: '#D3D3D3',
        //     color: '#fff',

        // },
    },
    sizeSmall: {
        fontSize: '16px',
        // padding: '9px 40px',
    },
    sizeLarge: {
        fontSize: '20px',
        // padding: '9px 48px',
    }
})(Button);

export default function ButtonBacks(props) {
    return (
        <ButtonBack variant="contained" fullWidth={props.fullWidth} onClick={props.onClick} size={props.size} startIcon={props.startIcon} endIcon={props.endIcon}>
            {props.label}
        </ButtonBack>
    )
}
