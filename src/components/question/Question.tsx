import React, { useContext } from 'react';
import QuestionProps from './QuestionProps';
import './Question.css';
import { SettingsContext } from '../../SettingsContext';

function Question(props : QuestionProps) {
  const settings = useContext(SettingsContext);
  return (
    <div className="Question">
        <p>
            {settings.hideQuestion?' ':props.question}
        </p>
    </div>
  );
}

export default Question;