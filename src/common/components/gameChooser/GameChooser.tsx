import { Box, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React, { useState } from 'react';
import Codenames from '../../../games/codenames/components/codenames/Codenames';
import CodenamesCaptain from '../../../games/codenames/components/codenamesCaptain/CodenamesCaptain';
import SettingsService from '../../../games/codenames/services/SettingsService';
import { GameContext } from '../../contexts/GameContext';
import FamilyFeud from '../../../games/familyFeud/components/familyFeud/FamilyFeud';
import FamilyFeudButton from '../../../games/familyFeud/components/familyFeudButton/FamilyFeudButton';
import LoginScreen from '../loginScreen/LoginScreen';
import { GameType } from './GameType';
import HomeIcon from '@mui/icons-material/Home';
import CodenamesAdmin from '../../../games/codenames/components/codenamesAdmin/CodenamesAdmin';
import { Config } from '../../../config';
import JustOneMain from '../../../games/justOne/components/justOneMain/JustOneMain';
import JustOnePhone from '../../../games/justOne/components/justOnePhone/JustOnePhone';
import Spectrum from '../../../games/spectrum/Spectrum';
import { GuessThePriceMain } from '../../../games/guessThePrice/components/guessThePriceMain/GuessThePriceMain';
import { GuessThePricePhone } from '../../../games/guessThePrice/components/guessThePricePhone/GuessThePricePhone';
import { HomeButton } from './homeButton/HomeButton';
import { GameChooserProps } from './GameChooserProps';
import { GameChooserListElement } from './gameChooserListElement/GameChooserListElement';
import { GameChooserElement } from './gameChooserElement/GameChooserElement';

function GameChooser() {
    const [game, setGame] = useState<GameType>(GameType.None);

    let types: GameChooserProps[] = [
        {label:"Just One", currentType:game, type:GameType.JustOnePhone, children:<JustOnePhone />, onClick:() => setGame(GameType.JustOnePhone)},
        {label:"Guess the price", currentType:game, type:GameType.GuessThePricePhone, children:<GuessThePricePhone />, onClick:() => setGame(GameType.GuessThePricePhone)},
        {label:"Family Feud", currentType:game, type:GameType.FamilyFeud, children:<FamilyFeud />, onClick:() => setGame(GameType.FamilyFeud)},
        {label:"Codenames", currentType:game, type:GameType.CodenamesMain, children:<Codenames />, onClick:() => setGame(GameType.CodenamesMain)},
        {label:"Family Feud Button", currentType:game, type:GameType.FamilyFeudButton, children:<FamilyFeudButton />, onClick:() => setGame(GameType.FamilyFeudButton)},
        {label:"Codenames Captain", currentType:game, type:GameType.CodenamesCaptain, children:<LoginScreen getPassword={SettingsService.GetPassword}><CodenamesCaptain /></LoginScreen>, onClick:() => setGame(GameType.CodenamesCaptain)},
        {label:"Just One TV", currentType:game, type:GameType.JustOneMain, children:<JustOneMain />, onClick:() => setGame(GameType.JustOneMain)},
        {label:"Guess the price TV", currentType:game, type:GameType.GuessThePriceMain, children:<GuessThePriceMain />, onClick:() => setGame(GameType.GuessThePriceMain)},
        {label:"Codenames Admin", currentType:game, type:GameType.CodenamesAdmin, children:<LoginScreen getPassword={() => new Promise(r => r(Config.Password))}><CodenamesAdmin /></LoginScreen>, onClick:() => setGame(GameType.CodenamesAdmin)}
    ];

  return (
    <GameContext.Provider value={{game, setGame}}>
        <HomeButton label={''} type={GameType.None} currentType={game} onClick={() => setGame(GameType.None)} children={<></>} />
        
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
                            {types.map(t => <GameChooserListElement label={t.label} type={t.type} currentType={t.currentType} onClick={t.onClick} children={t.children} />)}
                        </List>
                    </Box>
            </Box> 
        }
        {types.map(t => <GameChooserElement label={t.label} type={t.type} currentType={t.currentType} onClick={t.onClick} children={t.children} />)}
    </GameContext.Provider >
  );
}

export default GameChooser;