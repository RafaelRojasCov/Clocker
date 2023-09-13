import React, { useReducer, useState, useEffect } from "react";
import classNames from "classnames";
import { Container } from "../Container";
import { Button } from "../Button";
import { Timer } from "../Timer";
import mouseClick from "../../assets/sounds/mouseClick.mp3";
import { pomodoro, shortBreak, longBreak, Clock } from "./Clock";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";

import styles from "./Home.module.scss";

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

  const handleReset =
    (timer: Clock, options?: { forceReset?: boolean }) => () => {
      if (currentTimer === timer && !options?.forceReset) return;
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

        <div
          className={classNames(styles["home__actions"], {
            [styles["home__actions--running"]]: isRunning,
          })}
        >
          <Button
            variant="primary"
            active={isRunning}
            onClick={handleStartStop}
          >
            {isRunning ? "Pause" : "Start"}
          </Button>
          {isRunning && (
            <>
              <Button
                className={classNames({
                  [styles[`home__button-reset--running`]]: isRunning,
                })}
                icon={faRotateLeft}
                onClick={handleReset(currentTimer, { forceReset: true })}
              />
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export { Home };
