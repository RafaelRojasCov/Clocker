import React, { useReducer, useState, useEffect } from "react";
import { Container } from "../Container";
import { Button } from "../Button";
import { Timer } from "../Timer";
import { pomodoro, shortBreak, longBreak, IClock } from "./Clock";

import styles from "./Home.module.scss";

const Home: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);
  const [currentTimer, setCurrentTimer] = useState<IClock>(pomodoro);
  const { start, stop, backgroundColor, minutes, seconds } = currentTimer;

  const handleReset = (timer: IClock) => () => {
    if (currentTimer === timer) return;
    timer.reset(timer.defaultMinutes);
    setCurrentTimer(timer);
  };

  useEffect(() => {
    currentTimer.forceUpdateCallback = forceUpdate;
  }, [currentTimer]);

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
