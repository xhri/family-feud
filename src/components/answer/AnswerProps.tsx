import internal from "stream";

class AnswerProps{
    constructor(key:string, ans : string, answered: boolean, points: number){
        this.key = key;
        this.answer = ans;
        this.ansered = answered;
        this.points = points;
    }

    key: string;
    answer: string;
    ansered: boolean;
    points: number;
}


export default AnswerProps;