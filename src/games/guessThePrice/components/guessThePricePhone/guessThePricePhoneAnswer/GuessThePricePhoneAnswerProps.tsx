export interface GuessThePricePhoneAnswerProps {
    sendAnswer: (answer:number) => void;
    mainText: string;
    dialogText: (answer:number) => string;
}