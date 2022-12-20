const ApiUrl = window.location.origin.toString().slice(0, -4)+"5000";
//const ApiUrl = http://192.168.1.108:5000";
const Password = "magicPassword";
const redColor = "#C41E3A";
const blueColor = "#0096FF";


const TimerSecondsWriting = 100;
const TimerSecondsGuessing = 60;
const TimerRedMark = 15;
const GuessOnTimer = false;
const JustOne = {
  TimerSecondsWriting,
  TimerSecondsGuessing,
  TimerRedMark,
  GuessOnTimer
};


const TimerSecondsGuessingGTP = 30;
const TimerRedMarkGTP = 10;
const GuessOnTimerGTP = false;

const GuessThePrice = {
  TimerSecondsGuessingGTP,
  TimerRedMarkGTP,
  GuessOnTimerGTP
};

export const Config = {
  ApiUrl,
  Password,
  redColor,
  blueColor,
  JustOne,
  GuessThePrice
}
  