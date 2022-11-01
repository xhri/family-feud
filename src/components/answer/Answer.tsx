import React, { useEffect, useRef, useState } from 'react';
import  { Answer as AnswerType } from '../../types/Answer';
import './Answer.css';
import correct from "../../assets/correct.mp3";

function Answer(props : AnswerType) {
  let audio = new Audio(correct);
  useEffect(()=>{
    if (props.answered){
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