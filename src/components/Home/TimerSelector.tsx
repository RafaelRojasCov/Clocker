import React from "react";
import { Button } from "../Button";
import { Clock } from "./Clock";
import styles from "./TimerSelector.module.scss";
import classNames from "classnames";

export interface TimerSelectorProps {
  timers: Clock[];
  currentTimer: Clock;
  className?: string;
  handleReset: (timer: Clock, options?: { forceReset?: boolean }) => void;
}

/**
 * TimerSelector Component
 * @param timers - Array of timers
 * @param currentTimer - Current timer
 * @param className - CSS Class
 * @param handleReset - Function to reset the timer
 * @returns React.FunctionalComponent<TimerSelectorProps>
 */
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
        <Button
          key={timer.name}
          active={currentTimer === timer}
          onClick={onClick(timer)}
        >
          {timer.name}
        </Button>
      ))}
    </div>
  );
};
