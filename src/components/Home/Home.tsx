import React, { useReducer, useState, useEffect } from "react";
import { Container } from "../Layout";
import { Timer } from "../Timer";
import { pomodoro, shortBreak, longBreak, Clock } from "./Clock";
import { TimerSelector } from "./TimerSelector";
import { Todo } from "../Todo";

import mouseClick from "../../assets/sounds/mouseClick.mp3";

import styles from "./Home.module.scss";
import { TimerActions } from "./TimerActions";

/**
 * Home Component
 * @returns React.FunctionalComponent
 */
const Home: React.FC = () => {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
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

  const handleReset = (timer: Clock, options?: { forceReset?: boolean }) => {
    if (currentTimer === timer && !options?.forceReset) return;
    const question = "¿Quieres reiniciar el timer?";
    if (isRunning && !window.confirm(question)) return;
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

      <Container maxW={"500px"} pd="var(--spacing-xl) var(--spacing-md)" bgColor="rgba(255,255,255,0.1)">
        <TimerSelector
          timers={[pomodoro, shortBreak, longBreak]}
          handleReset={handleReset}
          currentTimer={currentTimer}
        />

        <Timer minutes={minutes} seconds={seconds} />

        <TimerActions
          currentTimer={currentTimer}
          handleReset={handleReset}
          handleStartStop={handleStartStop}
          isRunning={isRunning}
        />
      </Container>
      <Todo />
    </div>
  );
};

export { Home };
