import React from "react";
import styles from "./Container.module.scss";

interface ContainerProps {
  backgroundColor?: string;
  children?: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({
  backgroundColor,
  children,
}) => {
  return (
    <div style={{ backgroundColor }} className={styles.container}>
      {children}
    </div>
  );
};
