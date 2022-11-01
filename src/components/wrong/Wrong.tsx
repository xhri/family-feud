import React from 'react';
import WrongProps from './WrongProps';
import './Wrong.css';

function Wrong(props : WrongProps) {

  const elements= []
  for (let i=0;i<props.wrong;i++) {
    elements.push(
      <img className="Wrong" src={require("../../cross.png")} />
    )}

  return (
    <div>
    {elements}
    </div>
  );
}

export default Wrong;