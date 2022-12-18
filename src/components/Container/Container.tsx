import React from "react";
import styles from "./Container.module.scss";

interface IContainer {
  backgroundColor: string;
  children: React.ReactNode;
}

export const Container = ({ backgroundColor, children }: IContainer) => {
  return (
    <div style={{ backgroundColor }} className={styles.container}>
      {children}
    </div>
  );
};
