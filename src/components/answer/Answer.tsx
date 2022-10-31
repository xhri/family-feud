import React from 'react';
import AnswerProps from './AnswerProps';
import './Answer.css';

function Answer(props : AnswerProps) {
  return (
    <div className={`Answer ${props.ansered ? "Answered" : ""}`}>
        <p className="AnswerName">
            {props.ansered ? props.answer : 'XXXXXXXXXXX'}
        </p>
        <p className="AnswerPoints">
            {props.points}
        </p>
    </div>
  );
}

export default Answer;