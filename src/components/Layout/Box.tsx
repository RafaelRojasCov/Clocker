import React from "react";
import { StyledContainer, StyledContainerCssProps } from "./StyledContainer";
import styles from "./Box.module.scss";
import classNames from "classnames";

interface BoxProps extends StyledContainerCssProps {
  children?: React.ReactNode;
  className?: string;
}

/**
 *  Box Component
 * @param display - CSS Property for display
 * @param flexFlow - CSS Property for flex-flow
 * @param placeContent - CSS Property for place-content
 * @param w - CSS Property for width
 * @param h - CSS Property for height
 * @param maxW - CSS Property for max-width
 * @param maxH - CSS Property for max-height
 * @param bgColor - CSS Property for background-color
 * @param pd - CSS Property for padding
 * @param mg - CSS Property for margin
 * @param br - CSS Property for border-radius
 * @param gap - CSS Property for gap
 * @param children - React.ReactNode
 * @returns React.FunctionalComponent<ContainerProps>
 */
export const Box: React.FC<BoxProps> = ({ children, className, ...css }) => {
  return (
    <StyledContainer {...css} className={classNames(styles.box, className)}>
      {children}
    </StyledContainer>
  );
};
