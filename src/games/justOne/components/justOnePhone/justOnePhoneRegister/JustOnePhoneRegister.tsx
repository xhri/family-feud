import { Box, Button, Grid, TextField } from '@mui/material';
import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { NameContext } from '../../../contexts/NameContext';
import GameService from '../../../services/GameService';
import { Game } from '../../../types/Game';
import AreYouSure from '../areYouSure/AreYouSure';


function JustOnePhoneRegister() {
    

    const { setName } = useContext(NameContext);

    const [nameTemp, setNameTemp] = React.useState("");
    const [open, setOpen] = React.useState(false);

    const toggleOpen = () => {
        setOpen(x => !x);
    };
    

    const handleTextFieldChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setNameTemp(event.target.value);
      };
    
    const setUserName = async () => {
        if (nameTemp.length > 0)
        {
            toggleOpen();
        }
      };

      const doChange = async () =>{

        await GameService.AddPlayer(nameTemp);
        // TODO sprawdzic, czy sie udalo
        setName(nameTemp);
      };

    return (
            <>
                <AreYouSure open={open} description={`Czy na pewno chcesz się nazywać '${nameTemp}'?`} onClose={toggleOpen} onAccept={doChange} />
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
                            <p>Podaj imię:</p>
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
                                    value={nameTemp}
                                    margin="dense"
                                    id="name"
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

export default JustOnePhoneRegister;