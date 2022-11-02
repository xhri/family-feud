import React, { useContext, useEffect, useRef, useState } from 'react';
import  { Answer as AnswerType } from '../../types/Answer';
import './Answer.css';
import correct from "../../assets/correct.mp3";
import { SettingsContext } from '../../SettingsContext';

function Answer(props : AnswerType) {
  let audio = new Audio(correct);
  const settings = useContext(SettingsContext);
  useEffect(()=>{
    if (props.answered && !settings.soundOff){
      audio.play();
    }
  }, [props.answered])
  return (
    <div className="Answer">
        <div className={`AnswerName Appear ${props.answered?'':'Hidden'}`}>
            {props.answered ? props.value : ''}
        </div>
        <div className={`AnswerPoints Appear ${props.answered?'':'Hidden'}`}>
            {props.answered ? props.points : ''}
        </div>
    </div>
  );
}

export default Answer;