import React, { useContext, useEffect } from 'react';
import { MistakesProps } from './MistakesProps';
import './Mistakes.css';
import mistake from "../../assets/mistake.mp3";
import { SettingsContext } from '../../contexts/SettingsContext';

function Mistakes(props : MistakesProps) {
  let audio = new Audio(mistake);
  const settings = useContext(SettingsContext);
  const elements= []
  for (let i=0;i<props.mistakes;i++) {
    elements.push(
      <img className="Mistakes" src={require("../../cross.png")} />
    )}
    
  useEffect(() => {
    if (props.mistakes != 0 && !settings.soundOff)
      audio.play()
  },[props.mistakes])
  
  return (
    <div>
    {elements}
    </div>
  );
}

export default Mistakes;