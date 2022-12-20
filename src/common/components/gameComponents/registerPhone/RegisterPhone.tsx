import { Box, Button, Grid, TextField } from '@mui/material';
import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import AreYouSure from '../areYouSure/AreYouSure';
import { RegisterPhoneProps } from './RegisterPhoneProps';


export function RegisterPhone(props: RegisterPhoneProps) {
    
    const [name, setName] = React.useState("");
    const [open, setOpen] = React.useState(false);

    const toggleOpen = () => setOpen(x => !x);
    const doChange = () => props.addPlayer(name);
    const handleTextFieldChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setName(event.target.value);
    
    const setUserName = async () => {
        if (name.length > 0)
        {
            toggleOpen();
        }
      };

    return (
        <>
            <AreYouSure open={open} description={props.dialogText(name)} onClose={toggleOpen} onAccept={doChange} />
            <Grid container spacing={{ xs: 2 }} columns={{ xs: 6 }} >
                <Grid item xs={6} >
                    <Box
                        sx={{
                            minHeight:'25vh',
                            bgcolor: 'background.paper',
                            padding:'1vh',
                            boxShadow: 2,
                            borderRadius: 2,
                            fontWeight: 'medium',
                            fontSize: '8vh',
                            marginLeft: '5vw',
                            marginRight: '5vw'
                        }}>
                        <p>{props.mainText}</p>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <Box
                        sx={{
                            minHeight:'25vh',
                            marginLeft: '6vw',
                            marginRight: '6vw',
                            paddingTop: '3vh'
                        }}>
                            
                            <TextField
                                sx={{
                                    minHeight:'12vh'
                                }}
                                autoFocus
                                onChange={handleTextFieldChange}
                                value={name}
                                margin="dense"
                                id="imie"
                                label="Imię"
                                fullWidth
                                variant="standard"
                            />
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <Box
                        sx={{
                            minHeight:'25vh',
                            marginLeft: '5vw',
                            marginRight: '5vw'
                        }}>
                        <Button
                            variant="outlined"
                            onClick={setUserName}
                            sx={{
                                minHeight:'20vh',
                                width: '100%'
                            }}>
                                Start!
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </>
            
    );
}