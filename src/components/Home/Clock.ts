import { DispatchWithoutAction } from "react";
import alarm from "../../assets/sounds/alarm.wav";

type TimerName = "Pomodoro" | "ShortBreak" | "LongBreak";

export class Clock {
  name: TimerName = "Pomodoro";
  defaultMinutes: number = 30;
  minutes: number = 30;
  seconds: number = 0;
  currentTimeProgress: number = 0;
  maxTimeProgress: number = 0;
  isRunning: boolean = false;
  interval: NodeJS.Timeout | undefined;
  backgroundColor: string = "#ff22ff";
  forceUpdateCallback?: DispatchWithoutAction = () => {};
  alarmSound: HTMLAudioElement;

  constructor(params: Partial<Clock>) {
    Object.assign(this, params);
    this.defaultMinutes = this.minutes;
    this.maxTimeProgress = this.minutes * 60;
    this.currentTimeProgress = 0;
    this.alarmSound = new Audio(alarm);
  }

  start = () => {
    if (!this.interval) {
      this.isRunning = true;
      this.interval = setInterval(() => {
        this.handleTimer();
        this.forceUpdateCallback!();
      }, 1000);
      this.forceUpdateCallback!();
      console.log("Timer started!", this.name);
    }
  };

  stop = () => {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = undefined;
      this.isRunning = false;
      this.forceUpdateCallback!();
      console.log("Timer stopped!", this.name);
    }
  };

  reset = (minutes: number) => {
    this.stop();
    this.minutes = minutes;
    this.seconds = 0;
    this.currentTimeProgress = 0;
  };

  timeComplete = () => {
    this.stop();
    this.alarmSound.play();
    console.log("Time is up!");
  };

  handleTimer = () => {
    if (this.minutes === 0 && this.seconds === 0) {
      this.timeComplete();
    } else if (this.minutes > 0 && this.seconds === 0) {
      this.minutes -= 1;
      this.seconds = 59;
    } else {
      this.seconds -= 1;
    }

    this.currentTimeProgress =
      this.maxTimeProgress - (this.minutes * 60 + this.seconds);
  };
}

export const pomodoro = new Clock({
  name: "Pomodoro",
  minutes: 25,
  backgroundColor: "#BA4949",
});

export const shortBreak = new Clock({
  name: "ShortBreak",
  minutes: 5,
  backgroundColor: "#4D8389",
});

export const longBreak = new Clock({
  name: "LongBreak",
  minutes: 15,
  backgroundColor: "#476F94",
});
