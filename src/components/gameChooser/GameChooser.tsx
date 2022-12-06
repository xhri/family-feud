import { Box, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React, { useState } from 'react';
import Codenames from '../../codenames/components/codenames/Codenames';
import CodenamesCaptain from '../../codenames/components/codenamesCaptain/CodenamesCaptain';
import FamilyFeud from '../familyFeud/FamilyFeud';
import FamilyFeudButton from '../familyFeudButton/FamilyFeudButton';
import { GameType } from './GameType';

function GameChooser() {
    const [game, setGame] = useState<GameType>(GameType.None);

  return (
    <>
    {
        game == GameType.None &&
        <Box 
            display="flex"
            justifyContent="center"
            alignItems="center"
            marginTop="100px">
                <Box  sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper', fontSize: '10em' }}>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton onClick={()=>setGame(GameType.FamilyFeud)}>
                                <ListItemText primaryTypographyProps={{fontSize: '50px'}} primary="Family Feud" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton onClick={()=>setGame(GameType.CodenamesMain)}>
                                <ListItemText primaryTypographyProps={{fontSize: '50px'}} primary="Codenames" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primaryTypographyProps={{fontSize: '50px'}} primary="Family Feud Finale" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton onClick={()=>setGame(GameType.FamilyFeudButton)}>
                                <ListItemText primaryTypographyProps={{fontSize: '50px'}} primary="Family Feud Button" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton onClick={()=>setGame(GameType.CodenamesCaptain)}>
                                <ListItemText primaryTypographyProps={{fontSize: '50px'}} primary="Codenames captain" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
        </Box> 
    }
    {
        game == GameType.FamilyFeud &&
        <FamilyFeud />
    }
    {
        game == GameType.CodenamesMain &&
        <Codenames />
    }
    {
        game == GameType.CodenamesCaptain &&
        <CodenamesCaptain />
    }
    {
        game == GameType.FamilyFeudButton &&
        <FamilyFeudButton />
    }
    </>
  );
}

export default GameChooser;