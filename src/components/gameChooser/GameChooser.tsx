import { Box, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React, { useState } from 'react';
import Codenames from '../../codenames/components/codenames/Codenames';
import CodenamesCaptain from '../../codenames/components/codenamesCaptain/CodenamesCaptain';
import SettingsService from '../../codenames/services/SettingsService';
import { GameContext } from '../../contexts/GameContext';
import FamilyFeud from '../../familyFeud/components/familyFeud/FamilyFeud';
import FamilyFeudButton from '../../familyFeud/components/familyFeudButton/FamilyFeudButton';
import LoginScreen from '../loginScreen/LoginScreen';
import { GameType } from './GameType';
import HomeIcon from '@mui/icons-material/Home';
import CodenamesAdmin from '../../codenames/components/codenamesAdmin/CodenamesAdmin';
import { Config } from '../../config';

function GameChooser() {
    const [game, setGame] = useState<GameType>(GameType.None);

  return (
    <GameContext.Provider value={{game, setGame}}>
    <Box
        sx={{
            position: 'absolute',
            top: '0.5%',
            left: '0.5%',
            zIndex: 5,
        }}>
            {
                game != GameType.None &&
                <HomeIcon onClick={()=>setGame(GameType.None)} />
            }      
    </Box>

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
                                <ListItemText primaryTypographyProps={{fontSize: '50px'}} primary="Codenames Captain" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton onClick={()=>setGame(GameType.CodenamesAdmin)}>
                                <ListItemText primaryTypographyProps={{fontSize: '50px'}} primary="Codenames Admin" />
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
        <LoginScreen getPassword={SettingsService.GetPassword}>
            <CodenamesCaptain />
        </LoginScreen>
    }
    {
        game == GameType.CodenamesAdmin &&
        <LoginScreen getPassword={() => new Promise(r => r(Config.Password))}>
            <CodenamesAdmin />
        </LoginScreen>
    }
    {
        game == GameType.FamilyFeudButton &&
        <FamilyFeudButton />
    }
    </GameContext.Provider >
  );
}

export default GameChooser;