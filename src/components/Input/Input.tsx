import classNames from "classnames";
import type { ComponentPropsWithoutRef } from "react";
import styles from "./Input.module.scss";

export interface InputProps extends ComponentPropsWithoutRef<"input"> {
  value?: HTMLInputElement["value"];
  type?: HTMLInputElement["type"];
  className?: HTMLInputElement["className"];
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Input Component
 * @param onChange - onChange event handler
 * @returns React.FunctionalComponent<InputProps>
 */
export const Input: React.FC<InputProps> = ({
  value,
  type,
  onChange,
  className,
  ...props
}) => {
  return (
    <input
      {...props}
      className={classNames(styles.input, className)}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};
