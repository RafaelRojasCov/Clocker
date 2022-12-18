import styles from "./Button.module.scss";

interface IButton {
  children?: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({ children = "Button", onClick }: IButton) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
};
