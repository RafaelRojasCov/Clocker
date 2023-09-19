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

/**
 * Button Component
 * @param children - React.ReactNode
 * @param onClick - Function to handle the click event
 * @param variant - CSS Class
 * @param active - Boolean to know if the button is active
 * @param icon - Icon to show
 * @param className - CSS Class
 * @returns React.FunctionalComponent<ButtonProps>
 */
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
