import { Box, CircularProgress, Grid } from '@mui/material';
import { useContext } from 'react';
import { NameContext } from '../../../contexts/NameContext';
import { Game } from '../../../types/Game';


function JustOnePhoneWaiting(props: Game) {
    
    const { name } = useContext(NameContext);

    let text = "Oczekiwanie na start.";
    if (props.activePlayer == name && props.playing){
       text = "Zgadujesz, oczekiwanie na hasła."; 
    }
    if (props.playing && props.players.every(p => (typeof p.word === 'string' && p.word.length > 0) || p.name == props.activePlayer)){
       text = "Spójrz na ekran główny."; 
    }

    return (
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
                            fontSize: '7vh',
                            marginLeft: '5vw',
                            marginRight: '5vw'
                        }}>
                        <p>{text}</p>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <Box
                        sx={{
                            minHeight:'50vh',
                            marginLeft: '6vw',
                            marginRight: '6vw',
                            paddingTop: '3vh',
                            display:"flex",
                            justifyContent:"center",
                            alignItems:"center"
                        }}>
                            <CircularProgress size="8rem"/>


                    </Box>
                </Grid>
        </Grid>
    );
}

export default JustOnePhoneWaiting;