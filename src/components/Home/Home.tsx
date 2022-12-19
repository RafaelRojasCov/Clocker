import { useState } from "react";
import { Container } from "../Container";
import { Button } from "../Button";
import { Timer } from "../Timer";

import styles from "./Home.module.scss";

enum ClockType {
  Pomodoro = 25,
  ShortBreak = 5,
  LongBreak = 15,
}

enum ClockColor {
  Pomodoro = "#BA4949",
  ShortBreak = "#4D8389",
  LongBreak = "#476F94",
}

interface IHome {
  backgroundColor: string;
  changeBackgroundColor: (color: string) => void;
}

const initialState = {
  minutes: 25,
  seconds: 0,
};

let interval: NodeJS.Timeout;
const Home = ({ backgroundColor, changeBackgroundColor }: IHome) => {
  const [state, setState] = useState(initialState);

  const timeComplete = () => {
    handleStopTimer();
    console.log("Time is up!");
  };

  const resetTimer = (minutes: number, color: string) => {
    handleStopTimer();
    setState({ minutes, seconds: 0 });
    changeBackgroundColor(color);
  };

  const timerHandler = function () {
    setState(({ minutes, seconds }) => {
      if (minutes === 0 && seconds === 0) {
        timeComplete();
        return { minutes, seconds };
      } else if (minutes > 0 && seconds === 0) {
        return { minutes: minutes - 1, seconds: 59 };
      } else {
        return { minutes, seconds: seconds - 1 };
      }
    });
  };

  const handleStartTimer = () => {
    interval = setInterval(timerHandler, 1000);
  };

  const handleStopTimer = () => {
    clearInterval(interval);
  };

  const handleResetPomodoro = () => {
    resetTimer(ClockType.Pomodoro, ClockColor.Pomodoro);
  };

  const handleResetShortBreak = () => {
    resetTimer(ClockType.ShortBreak, ClockColor.ShortBreak);
  };

  const handleResetLongBreak = () => {
    resetTimer(ClockType.LongBreak, ClockColor.LongBreak);
  };

  const minutesString =
    state.minutes < 10 ? `0${state.minutes}` : `${state.minutes}`;
  const secondsString =
    state.seconds < 10 ? `0${state.seconds}` : `${state.seconds}`;

  return (
    <div className={styles.home} style={{ backgroundColor }}>
      <h1>Welcome to the PomoFocus</h1>
      <Container backgroundColor={"rgba(255,255,255,0.1)"}>
        <div className={styles.buttonContainer}>
          <Button onClick={handleResetPomodoro}>Pomodoro</Button>
          <Button onClick={handleResetShortBreak}>Short Break</Button>
          <Button onClick={handleResetLongBreak}>Long Break</Button>
        </div>
        <Timer minutes={minutesString} seconds={secondsString} />
        <div className={styles.timerButtons}>
          <Button onClick={handleStartTimer}>Start</Button>
          <Button onClick={handleStopTimer}>Stop</Button>
        </div>
      </Container>
    </div>
  );
};

export { Home };
