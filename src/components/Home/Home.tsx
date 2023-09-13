import React, { useReducer, useState, useEffect } from "react";
import { Container } from "../Container";
import { Button } from "../Button";
import { Timer } from "../Timer";
import mouseClick from "../../assets/sounds/mouseClick.mp3";
import { pomodoro, shortBreak, longBreak, Clock } from "./Clock";
import styles from "./Home.module.scss";

const Home: React.FC = () => {
  // remove this hack when change approach for Clock.tsx
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);
  const [currentTimer, setCurrentTimer] = useState<Clock>(pomodoro);
  const clickSound = new Audio(mouseClick);
  const {
    start,
    stop,
    backgroundColor,
    minutes,
    seconds,
    maxTimeProgress,
    currentTimeProgress,
    isRunning,
  } = currentTimer;

  const handleReset = (timer: Clock) => () => {
    if (currentTimer === timer) return;
    const confirmation =
      isRunning && window.confirm("¿Quieres reiniciar el timer?");
    if (isRunning && !confirmation) return;
    timer.reset(timer.defaultMinutes);
    setCurrentTimer(timer);
  };

  const handleStartStop = () => {
    clickSound.play();
    isRunning ? stop() : start();
  };

  useEffect(() => {
    currentTimer.forceUpdateCallback = forceUpdate;
  }, [currentTimer]);

  return (
    <div className={styles.home} style={{ backgroundColor }}>
      <h1 className={styles.home__title}>Welcome to Pomodoro</h1>
      <progress
        className={styles["home__progress-bar"]}
        max={maxTimeProgress}
        value={currentTimeProgress}
      />
      <Container backgroundColor={"rgba(255,255,255,0.1)"}>
        <div className={styles["home__button-timers"]}>
          <Button
            active={currentTimer === pomodoro}
            onClick={handleReset(pomodoro)}
          >
            Pomodoro
          </Button>
          <Button
            active={currentTimer === shortBreak}
            onClick={handleReset(shortBreak)}
          >
            Short Break
          </Button>
          <Button
            active={currentTimer === longBreak}
            onClick={handleReset(longBreak)}
          >
            Long Break
          </Button>
        </div>

        <Timer minutes={minutes} seconds={seconds} />

        <Button variant="primary" active={isRunning} onClick={handleStartStop}>
          {isRunning ? "Pause" : "Start"}
        </Button>
      </Container>
    </div>
  );
};

export { Home };
