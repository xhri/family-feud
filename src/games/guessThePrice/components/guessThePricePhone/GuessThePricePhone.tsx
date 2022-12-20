import { Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { RegisterPhone } from '../../../../common/components/gameComponents/registerPhone/RegisterPhone';
import { WaitingPhone } from '../../../../common/components/gameComponents/waitingPhone/WaitingPhone';
import GameService from '../../services/GameService';
import { Game } from '../../types/Game';
import { GuessThePricePhoneAnswer } from './guessThePricePhoneAnswer/GuessThePricePhoneAnswer';


export function GuessThePricePhone() {
    
    const [game, setGame] = useState<Game>({playing:false, guessing:false, question:{price:0, offerName:"", nameCategory:"", id:0}, players:[] });
    const [name, setName] = useState("");

    useEffect(() => {
        const timer = setInterval(async () => {setGame(await GameService.GetGame())}, 1000);
        return () => clearTimeout(timer);
      }, []);

    const iGaveAnswer = () => {
        let player = game.players.find(p => p.name === name);

        if (player){
            return player.answer > 0;
        }
        return false;
    };

    const showWaiting = () => name != "" && (!game.guessing || !game.playing || iGaveAnswer());
    const showGuessing = () => name != "" && game.guessing && !iGaveAnswer();

    const waitingMessage = () => {

        let text = "Oczekiwanie na start.";
        if (game.guessing && iGaveAnswer()){
            text = "Oczekiwanie na innych graczy.";
        }
        if (game.playing && !game.guessing){
            text = "Spójrz na ekran.";
        }

        return text;
    };

    const addPlayer = async (name: string) => {
        await GameService.AddPlayer(name);
        // TODO sprawdzic, czy sie udalo
        setName(name);
    };

  return (
    <>
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            sx ={{
                marginLeft:'20px',
                marginRight:'20px'
            }}>
                {
                    name == "" &&
                    <RegisterPhone mainText={'Podaj imię:'} addPlayer={addPlayer} dialogText={name => `Czy na pewno chcesz się nazywać '${name}'?`} />
                }
                {
                    showWaiting() &&
                    <WaitingPhone word={waitingMessage()} />
                }
                {
                    showGuessing() &&
                    <GuessThePricePhoneAnswer sendAnswer={a => GameService.Answer(name, a)} mainText={'Odpowiedz!'} dialogText={a => `Czy jesteś pewien, że ${a} to Twoja ostateczna odpowiedź?`} />
                }
        </Box>
    </>
  );
}