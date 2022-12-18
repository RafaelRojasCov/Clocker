import { useState } from "react";
import { Button } from "../Button";
import styles from "./Timer.module.scss";

interface ITimer {
  minutes: string;
  seconds: string;
}

export const Timer = ({ minutes, seconds }: ITimer) => {
  return (
    <div className={styles.timer}>
      <span>
        {minutes}:{seconds}
      </span>
    </div>
  );
};
