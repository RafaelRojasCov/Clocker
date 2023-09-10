type TimerType = "Pomodoro" | "ShortBreak" | "LongBreak";

export interface IClock {
  timer?: TimerType;
  defaultMinutes?: number;
  minutes?: number;
  seconds?: number;
  interval?: NodeJS.Timeout | undefined;
  backgroundColor?: string;

  start(): void;
  stop(): void;
  reset(minutes?: number, callback?: () => void): void;
  timeComplete(): void;
  handleTimer(): void;
}

interface stateProps {
  timer?: TimerType;
  minutes?: number;
  seconds?: number;
  backgroundColor?: string;
}

export class Clock implements IClock {
  timer?: TimerType;
  defaultMinutes?: number;
  minutes?: number;
  seconds?: number;
  interval?: NodeJS.Timeout | undefined;
  backgroundColor?: string;

  constructor(state: stateProps) {
    const {
      timer = "Pomodoro",
      minutes = 25,
      seconds = 0,
      backgroundColor = "#BA4949",
    } = state || {};

    this.timer = timer;
    this.defaultMinutes = minutes;
    this.minutes = minutes;
    this.seconds = seconds;
    this.backgroundColor = backgroundColor;
  }

  start = () => {
    if (!this.interval) {
      this.interval = setInterval(this.handleTimer, 1000);
      console.log("Timer started!", this.timer);
    }
  };

  stop = () => {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = undefined;
      console.log("Timer stopped!", this.timer);
    }
  };

  reset = (minutes: number, callback: () => void = () => {}) => {
    this.stop();
    this.minutes = minutes;
    this.seconds = 0;
    callback();
  };

  timeComplete = () => {
    this.stop();
    console.log("Time is up!");
  };

  handleTimer = () => {
    if (this.minutes === 0 && this.seconds === 0) {
      this.timeComplete();
    } else if (this.minutes! > 0 && this.seconds === 0) {
      this.minutes! -= 1;
      this.seconds = 59;
    } else {
      this.seconds! -= 1;
    }
  };
}

export const pomodoro = new Clock({
  timer: "Pomodoro",
  minutes: 25,
  backgroundColor: "#BA4949",
});

export const shortBreak = new Clock({
  timer: "ShortBreak",
  minutes: 5,
  backgroundColor: "#4D8389",
});

export const longBreak = new Clock({
  timer: "LongBreak",
  minutes: 15,
  backgroundColor: "#476F94",
});
