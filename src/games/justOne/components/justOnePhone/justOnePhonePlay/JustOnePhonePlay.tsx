import { Box, Button, Grid, TextField } from '@mui/material';
import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { RegisterContext } from '../../../contexts/RegisterContext';
import GameService from '../../../services/GameService';
import { TeamGame } from '../../../types/TeamGame';
import AreYouSure from '../../../../../common/components/gameComponents/areYouSure/AreYouSure';


export function JustOnePhonePlay(props: TeamGame) {
    
    const { name } = useContext(RegisterContext);

    const [word, setWord] = React.useState("");
    const [open, setOpen] = React.useState(false);

    const toggleOpen = () => {
        setOpen(x => !x);
    };
    
    const handleTextFieldChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setWord(event.target.value);
      };
    
    const setUserName = async () => {
        if (setWord.length > 0)
        {
            toggleOpen();
        }
      };

    const doChange = async () =>{
        await GameService.AddWord(name, word);
    };

    return (
            <>
                <AreYouSure open={open} description={`Czy na pewno chcesz dać hasło '${word}'?`} onClose={toggleOpen} onAccept={doChange} />
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
                            <p>Hasło to '{props.question}'</p>
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
                                    value={word}
                                    margin="dense"
                                    id="word"
                                    label="Podpowiedź"
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
                                    Wyślij
                            </Button>
                        </Box>
                    </Grid>
            </Grid>
        </>
    );
}