import React from 'react';
import { MistakesProps } from './MistakesProps';
import './Mistakes.css';

function Mistakes(props : MistakesProps) {

  const elements= []
  for (let i=0;i<props.mistakes;i++) {
    elements.push(
      <img className="Mistakes" src={require("../../cross.png")} />
    )}

  return (
    <div>
    {elements}
    </div>
  );
}

export default Mistakes;