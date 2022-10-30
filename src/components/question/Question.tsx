import React from 'react';
import QuestionProps from './QuestionProps';
//import './App.css';

function Question(props : QuestionProps) {
  return (
    <div className="Question">
        <p>
            {props.question}
        </p>
    </div>
  );
}

export default Question;