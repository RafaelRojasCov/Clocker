import React, { useEffect, useState } from "react";
import { Container } from "../Container";
import { Button } from "../Button";
import { Timer } from "../Timer";

import { pomodoro, shortBreak, longBreak, IClock } from "./Clock";

import styles from "./Home.module.scss";

const Home: React.FC = () => {
  const [currentTimer, setCurrentTimer] = useState<IClock>(pomodoro);
  const [minutes, setMinutes] = useState<number>(currentTimer.minutes!);
  const [seconds, setSeconds] = useState<number>(currentTimer.seconds!);
  const { start, stop, backgroundColor } = currentTimer;

  const handleReset = (timer: IClock) => () => {
    if (currentTimer === timer) return;
    timer.reset(timer.defaultMinutes as number);
    setCurrentTimer(timer);
  };

  useEffect(() => {
    setMinutes(currentTimer.minutes!);
    setSeconds(currentTimer.seconds!);
  }, [currentTimer.minutes, currentTimer.seconds]);

  return (
    <div className={styles.home} style={{ backgroundColor }}>
      <h1>Welcome to the PomoFocus</h1>
      <Container backgroundColor={"rgba(255,255,255,0.1)"}>
        <div className={styles.buttonContainer}>
          <Button onClick={handleReset(pomodoro)}>Pomodoro</Button>
          <Button onClick={handleReset(shortBreak)}>Short Break</Button>
          <Button onClick={handleReset(longBreak)}>Long Break</Button>
        </div>

        <Timer minutes={minutes} seconds={seconds} />

        <div className={styles.timerButtons}>
          <Button onClick={start}>Start</Button>
          <Button onClick={stop}>Stop</Button>
        </div>
      </Container>
    </div>
  );
};

export { Home };
