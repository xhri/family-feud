import AnswersProps from "./components/answers/AnswersProps";
import PointsProps from "./components/points/PointsProps";

class AppProps{
    constructor(question: string, answers: AnswersProps, teams: PointsProps){
        this.question = question;
        this.answers = answers;
        this.teams = teams;
    }
    answers: AnswersProps;
    question: string;
    teams: PointsProps;
}


export default AppProps;