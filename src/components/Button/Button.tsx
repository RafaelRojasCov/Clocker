import classNames from "classnames";
import styles from "./Button.module.scss";

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  variant?: string;
  active?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children = "Button",
  onClick,
  variant = "basic",
  active,
}) => {
  return (
    <button
      onClick={onClick}
      className={classNames(styles.button, {
        [styles[`button__${variant}`]]: variant,
        [styles[`button__${variant}--active`]]: variant && active,
      })}
    >
      {children}
    </button>
  );
};
