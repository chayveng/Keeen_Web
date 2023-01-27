import React, { useEffect, useState } from 'react'
import {
 
  makeStyles,
  Typography
} from '@material-ui/core';
const useStyles = makeStyles(theme => ({
  pl: {
    paddingLeft: 17,
    textAlign: 'end'
  },
}))
function Clock() {
  const classes = useStyles();
    const [clockState, setClockState] = useState();
    const [timeState, setTimeState] = useState();
    useEffect(() => {
        setInterval(() => {
          const date = new Date();
          setClockState(date.toLocaleDateString('th-TH', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
      
          }));
          setTimeState(date.toLocaleTimeString('th-TH', {
           
            hour: 'numeric',
            minute: '2-digit',
            second: '2-digit'
          }));
        }, 1000);
      }, []);
  return (
    <>
    
    <Typography color="textPrimary" variant="h4">
   ข้อมูลล่าสุด: วันที่ {clockState} เวลา {timeState}
  </Typography>
  
    </>
   
  )
}

export default Clock