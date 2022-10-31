import { useEffect, useState } from 'react';
import './App.css';
import Question from './components/question/Question';
import Answers from './components/answers/Answers';
import AnswerProps from './components/answer/AnswerProps';
import Points from './components/points/Points';
import TeamProps from './components/team/TeamProps';
import GameService from "./GameService"
import AppProps from './AppProps';
import AnswersProps from './components/answers/AnswersProps';
import PointsProps from './components/points/PointsProps';

function App() {
  const [appProps, setAppProps] = useState<AppProps>(new AppProps("example", new AnswersProps(), new PointsProps()));
  //const [result, setResult] = useState<Array<AnswerProps>>([]);

  useEffect(() => {
    const timer = setInterval(async () => {

      let result = await GameService.GetGame();
      let answers : AnswersProps = new AnswersProps();
      answers.answers = [];
      result.answers.map(a => {answers.answers = [...answers.answers, new AnswerProps(a.key, a.answerValue, a.answered, a.points)]});

      let points : PointsProps = new PointsProps();
      points.teams = [];
      result.points.map(t => {points.teams = [...points.teams, new TeamProps(t.key, t.points, t.name, result.activeTeam==t.key)]});

      setAppProps(new AppProps(result.question, answers, points))


      //let x = Math.floor(Math.random() * 7);
      //console.log(x);
      //if (x ==4)
      //{
      //  setResult(result => [...result, new AnswerProps(result.length.toString(), "odpowiedz", false, 2000)]);
      //}
    }, 1200);

    return () => clearTimeout(timer);
  }, []);


  return (
    <div className="App">
      <header><Points teams={appProps.teams.teams} /></header>
      <nav><Question question={appProps.question}/></nav>
      <section><Answers answers={appProps.answers.answers} /></section>
      <aside>        WRONG!      </aside>
    </div>
  );
}

export default App;
