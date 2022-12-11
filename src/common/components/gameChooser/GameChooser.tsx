import { Box, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React, { useState } from 'react';
import Codenames from '../../../games/codenames/components/codenames/Codenames';
import CodenamesCaptain from '../../../games/codenames/components/codenamesCaptain/CodenamesCaptain';
import SettingsService from '../../../games/codenames/services/SettingsService';
import { GameContext } from '../../contexts/GameContext';
import FamilyFeud from '../../../games/familyFeud/components/familyFeud/FamilyFeud';
import FamilyFeudButton from '../../../games/familyFeud/components/familyFeudButton/FamilyFeudButton';
import LoginScreen from '../loginScreen/LoginScreen';
import { GameType } from '../../types/GameType';
import HomeIcon from '@mui/icons-material/Home';
import CodenamesAdmin from '../../../games/codenames/components/codenamesAdmin/CodenamesAdmin';
import { Config } from '../../../config';
import JustOneMain from '../../../games/justOne/components/justOneMain/JustOneMain';
import JustOnePhone from '../../../games/justOne/components/justOnePhone/JustOnePhone';
import Spectrum from '../../../games/spectrum/Spectrum';

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
            marginTop="25px"
            marginBottom="25px">
                <Box  sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper', fontSize: '10em' }} >
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton onClick={()=>setGame(GameType.JustOnePhone)}>
                                <ListItemText primaryTypographyProps={{fontSize: '50px'}} primary="Just One" />
                            </ListItemButton>
                        </ListItem>
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
                        <ListItem disablePadding>
                            <ListItemButton onClick={()=>setGame(GameType.JustOneMain)}>
                                <ListItemText primaryTypographyProps={{fontSize: '50px'}} primary="Just One Main" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton onClick={()=>setGame(GameType.Spectrum)}>
                                <ListItemText primaryTypographyProps={{fontSize: '50px'}} primary="Spectrum" />
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
        game == GameType.JustOneMain &&
        <JustOneMain />
    }
    {
        game == GameType.JustOnePhone &&
        <JustOnePhone />
    }
    {
        game == GameType.Spectrum &&
        <Spectrum />
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