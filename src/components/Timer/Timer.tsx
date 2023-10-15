import styles from "./Timer.module.scss";

export interface TimerProps {
  minutes?: number;
  seconds?: number;
}

/**
 * Timer Component
 * @param minutes - Number of minutes
 * @param seconds - Number of seconds
 * @returns React.FunctionalComponent<TimerProps>
 */
export const Timer: React.FC<TimerProps> = ({ minutes = 0, seconds = 0 }) => {
  return (
    <div className={styles.timer}>
      {minutes! < 10 ? `0${minutes}` : minutes!.toString()}:
      {seconds! < 10 ? `0${seconds}` : seconds!.toString()}
    </div>
  );
};
