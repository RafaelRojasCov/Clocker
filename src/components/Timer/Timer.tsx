import { IClock } from "../Home/Clock";
import styles from "./Timer.module.scss";

interface TimerProps {
  timer?: IClock;
  pomodoro?: IClock;
  minutes?: number;
  seconds?: number;
}

export const Timer: React.FC<TimerProps> = ({ minutes, seconds }) => {
  return (
    <div className={styles.timer}>
      <span>
        {minutes! < 10 ? `0${minutes}` : minutes!.toString()}:
        {seconds! < 10 ? `0${seconds}` : seconds!.toString()}
      </span>
    </div>
  );
};
