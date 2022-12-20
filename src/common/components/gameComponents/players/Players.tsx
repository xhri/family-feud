import { Box, Grid } from '@mui/material';
import { PlayerLabel } from './playerLabel/PlayerLabel';
import { PlayersProps } from './PlayersProps';


export function Players(props: PlayersProps) {
    
  return (
    <>
        {
            props.players.length == 0 &&
            <Grid item xs={6} ><Box sx={{ minHeight:'12vh' }} /></Grid>
        }
        {
            props.players.length < 4 &&
            props.players.map(p => {
                return (
                    <Grid item xs={2} >
                        <Box
                            sx={{
                                minHeight:'12vh'
                            }}>
                                <PlayerLabel key={p.name} name={p.name} points={p.points} active={p.active}  />
                        </Box>
                    </Grid>
                )
            })
        }
        {
            props.players.length == 1 &&
            <Grid item xs={4} ><Box sx={{ minHeight:'12vh' }} /></Grid>
        }
        {
            props.players.length > 3 &&
            props.players.map(p => {
                return (
                    <Grid item xs={1} >
                        <Box
                            sx={{
                                minHeight:'12vh'
                            }}>
                            <PlayerLabel key={p.name} name={p.name} points={p.points} active={p.active}  />
                        </Box>
                    </Grid>
                )
            })
        }
        {
            props.players.length > 6 && props.players.length < 9 &&
            <Grid item xs={3} ><Box sx={{ minHeight:'12vh' }} /></Grid>
        }
    </>
  );
}