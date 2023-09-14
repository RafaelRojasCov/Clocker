import React from "react";
import { Button } from "../Button";
import { Clock } from "./Clock";
import styles from "./TimerSelector.module.scss";
import classNames from "classnames";

interface TimerSelectorProps {
  timers: Clock[];
  currentTimer: Clock;
  className?: string;
  handleReset: (timer: Clock, options?: { forceReset?: boolean }) => void;
}

export const TimerSelector: React.FC<TimerSelectorProps> = ({
  timers,
  currentTimer,
  handleReset,
  className,
}) => {
  const onClick = (timer: Clock) => () => handleReset(timer);

  return (
    <div className={classNames(styles["timer-selector"], className)}>
      {timers.map((timer: Clock) => (
        <Button active={currentTimer === timer} onClick={onClick(timer)}>
          {timer.name}
        </Button>
      ))}
    </div>
  );
};
