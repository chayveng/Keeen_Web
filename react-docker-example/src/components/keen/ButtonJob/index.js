import React from 'react'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles';
import { Grid ,Box} from '@material-ui/core';

const ButtonJob = withStyles({
    root: {
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: '16px',
        padding: '16px ',
        width: '90%',
        marginBottom:5,
        border: '1px solid',
        lineHeight: 1.5,
        background: 'transparent linear-gradient(180deg, #fff  0%, #fff 100%) 0% 0% no-repeat padding-box',
        borderRadius: '10px',
        color: '#1F8F5B',
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
            background: '#fff  ',
            // borderColor: '#0062cc',
            boxShadow: 'none',
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#fff ',
            color: '#1F8F5B',
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
        fontSize: '16px',
        // padding: '6px 40px',
        width: 180

    },
    sizeLarge: {
        fontSize: '20px',
        // padding: '6px 48px',
    }
})(Button);

export default function ButtonJobs(props) {
    return (
        <ButtonJob variant="contained" startIcon={props.startIcon} fullWidth={props.fullWidth}
            disabled={props.disabled} onClick={props.onClick} size={props.size} href={props.href}
            type={props.type}
        >
            <Grid items md={12}>
            <Grid  style={{textAlign:'start' ,fontSize:'12px'}}>
                {props.headlabel || 'Button'}
            </Grid>
            <Box mt={1}/>
            <Grid  style={{textAlign:'center'}}>
                {props.label || 'Button'}
            </Grid>
            </Grid>
        </ButtonJob>
    )
}
