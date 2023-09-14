import React from "react";
import { Clock } from "./Clock";
import { Button } from "../Button";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "./TimerActions.module.scss";

type OnClickProps = (
  timer: Clock,
  options?: { forceReset?: boolean }
) => () => void;

interface TimerActionsProps {
  handleReset: (timer: Clock, options?: { forceReset?: boolean }) => void;
  handleStartStop: () => void;
  isRunning: boolean;
  currentTimer: Clock;
}

export const TimerActions: React.FC<TimerActionsProps> = ({
  handleReset,
  handleStartStop,
  isRunning,
  currentTimer,
}) => {
  const onClick: OnClickProps = (timer, options) => () =>
    handleReset(timer, options);

  return (
    <div className={styles["timer-actions"]}>
      <Button variant="primary" active={isRunning} onClick={handleStartStop}>
        {isRunning ? "Pause" : "Start"}
      </Button>
      {isRunning && (
        <>
          <Button
            className={styles["timer-actions__button-reset"]}
            icon={faRotateLeft}
            onClick={onClick(currentTimer, { forceReset: true })}
          />
        </>
      )}
    </div>
  );
};
