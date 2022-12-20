import { Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Config } from '../../../../config';
import { TimerProps } from './TimerProps';


function Timer(props: TimerProps) {
    
    const [seconds, setSeconds] = useState(props.seconds);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(s => s>0 ? s-1 : s);
        }, 1000);
        return () => clearInterval(interval);
      }, []);

      useEffect(() => {
        const timeout = setTimeout(() => {
            if (props.doAction){
                props.actionOnEnd();
            }
        }, props.seconds*1000);
        return () => clearTimeout(timeout);
      }, []);

    const minutesStr = ("0" + ((seconds-(seconds%60))/60)).slice(-2);
    const secondsStr = ("0" + (seconds % 60)).slice(-2);

    return (
            <Box
                sx ={{
                    minHeight: props.height,
                    bgcolor: 'background.paper',
                    paddingTop:'1vh',
                    boxShadow: 2,
                    borderRadius: 2,
                    fontWeight:seconds <= props.redTimerMark ? 'bold' :  'medium',
                    fontSize: '2.2vw',
                    color: seconds <= props.redTimerMark ? 'red' :'black'
                }}>
                    <p>{minutesStr} : {secondsStr}</p>
            </Box>
    );
}

export default Timer;