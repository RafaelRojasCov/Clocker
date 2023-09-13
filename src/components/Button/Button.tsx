import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Button.module.scss";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  variant?: string;
  active?: boolean;
  icon?: IconProp;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "basic",
  active,
  icon,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        styles.button,
        {
          [styles[`button__${variant}`]]: variant,
          [styles[`button__${variant}--active`]]: variant && active,
          [styles[`button__icon`]]: icon,
        },
        className
      )}
    >
      {children}
      {icon && <FontAwesomeIcon icon={icon} size="2xl" />}
    </button>
  );
};
