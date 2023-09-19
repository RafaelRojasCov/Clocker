import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Button.module.scss";
import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  variant?: string;
  active?: boolean;
  startIcon?: IconProp;
  endIcon?: IconProp;
  iconSize?: SizeProp;
  className?: string;
}

/**
 * Button Component
 * @param children - React.ReactNode
 * @param onClick - Function to handle the click event
 * @param variant - CSS Class
 * @param active - Boolean to know if the button is active
 * @param endIcon - Icon to show at the end of the button
 * @param startIcon - Icon to show at the start of the button
 * @param iconSize - Icon size
 * @param className - CSS Class
 * @returns React.FunctionalComponent<ButtonProps>
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "basic",
  active,
  startIcon,
  endIcon,
  iconSize = "2xl",
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
          [styles[`button__icon`]]: endIcon || startIcon,
          [styles[`button__icon--start`]]: startIcon,
          [styles[`button__icon--end`]]: endIcon,
        },
        className
      )}
    >
      {startIcon && <FontAwesomeIcon icon={startIcon} size={iconSize} />}
      {children}
      {endIcon && <FontAwesomeIcon icon={endIcon} size={iconSize} />}
    </button>
  );
};
