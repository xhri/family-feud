import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Question from './components/question/Question';
import Answers from './components/answers/Answers';
import AnswerProps from './components/answer/AnswerProps';
import { Console } from 'console';
import Points from './components/points/Points';

function App() {
  const [result, setResult] = useState<Array<AnswerProps>>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      let x = Math.floor(Math.random() * 7);
      console.log(x);
      if (x ==4)
      {
        setResult(result => [...result, new AnswerProps(result.length.toString(), "odpowiedz", false, 2000)]);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);


  return (
    <div className="App">
      <Points points={0} />
      <Question question='Here is the question...'/>
      <Answers answers={result} />
    </div>
  );
}

export default App;
