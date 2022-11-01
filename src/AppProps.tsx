import AnswersProps from "./components/answers/AnswersProps";
import PointsProps from "./components/points/PointsProps";

class AppProps{
    constructor(question: string, answers: AnswersProps, teams: PointsProps, wrong: number, breakV: boolean){
        this.question = question;
        this.answers = answers;
        this.teams = teams;
        this.wrong = wrong;
        this.break = breakV;
    }
    answers: AnswersProps;
    question: string;
    teams: PointsProps;
    wrong: number;
    break: boolean;
}


export default AppProps;