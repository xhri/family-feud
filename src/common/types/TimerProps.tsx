export interface TimerProps {
  seconds: number;
  redTimerMark: number;
  doAction: boolean;
  actionOnEnd: () => void;
}