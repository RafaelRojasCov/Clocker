import { DispatchWithoutAction } from "react";

type TimerType = "Pomodoro" | "ShortBreak" | "LongBreak";

export interface IClock {
  timer?: TimerType;
  defaultMinutes?: number;
  minutes?: number;
  seconds?: number;
  isRunning?: boolean;
  interval?: NodeJS.Timeout | undefined;
  backgroundColor?: string;
  forceUpdateCallback?: React.DispatchWithoutAction;

  start(): void;
  stop(): void;
  reset(minutes?: number): void;
  timeComplete(): void;
  handleTimer(): void;
}

export class Clock implements IClock {
  timer?: TimerType = "Pomodoro";
  defaultMinutes?: number = 30;
  minutes?: number = 30;
  seconds?: number = 0;
  isRunning?: boolean = false;
  interval?: NodeJS.Timeout | undefined;
  backgroundColor?: string = "#ff22ff";
  forceUpdateCallback?: DispatchWithoutAction = () => {};

  constructor(params: Partial<Clock>) {
    Object.assign(this, params);
    this.defaultMinutes = this.minutes;
  }

  start = () => {
    if (!this.interval) {
      this.isRunning = true;
      this.interval = setInterval(() => {
        this.handleTimer();
        this.forceUpdateCallback!();
      }, 1000);
      this.forceUpdateCallback!();
      console.log("Timer started!", this.timer);
    }
  };

  stop = () => {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = undefined;
      this.isRunning = false;
      this.forceUpdateCallback!();
      console.log("Timer stopped!", this.timer);
    }
  };

  reset = (minutes: number) => {
    this.stop();
    this.minutes = minutes;
    this.seconds = 0;
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