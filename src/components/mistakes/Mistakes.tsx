import React, { useEffect } from 'react';
import { MistakesProps } from './MistakesProps';
import './Mistakes.css';
import mistake from "../../assets/mistake.mp3";

function Mistakes(props : MistakesProps) {
  let audio = new Audio(mistake);
  const elements= []
  for (let i=0;i<props.mistakes;i++) {
    elements.push(
      <img className="Mistakes" src={require("../../cross.png")} />
    )}
    
  useEffect(() => {
    if (props.mistakes != 0)
    audio.play()
  },[props.mistakes])
  
  return (
    <div>
    {elements}
    </div>
  );
}

export default Mistakes;