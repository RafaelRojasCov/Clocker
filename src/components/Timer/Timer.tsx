import styles from "./Timer.module.scss";

interface TimerProps {
  minutes?: number;
  seconds?: number;
}

export const Timer: React.FC<TimerProps> = ({ minutes = 0, seconds = 0 }) => {
  return (
    <div className={styles.timer}>
      {minutes! < 10 ? `0${minutes}` : minutes!.toString()}:
      {seconds! < 10 ? `0${seconds}` : seconds!.toString()}
    </div>
  );
};
