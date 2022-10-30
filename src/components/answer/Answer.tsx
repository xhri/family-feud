import React from 'react';
import AnswerProps from './AnswerProps';
//import './App.css';

function Answer(props : AnswerProps) {
  return (
    <div className="Answer">
        <p>
            {props.answer}
        </p>
    </div>
  );
}

export default Answer;