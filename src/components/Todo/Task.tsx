import classNames from "classnames";
import { faCaretSquareDown } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../Button";
import { Box } from "../Layout";
import styles from "./Task.module.scss";

export interface TaskProps {
  title?: string;
  description?: string;
  status?: string;
  createdAt?: string;
  updatedAt?: string;
  completedAt?: string;
  deletedAt?: string;
  completedPomodoros?: number;
  estimatedPomodoros?: number;
  className?: string;
  component?: React.ElementType;
}

export const Task: React.FC<TaskProps> = ({
  title,
  description,
  status,
  createdAt,
  updatedAt,
  completedAt,
  deletedAt,
  completedPomodoros,
  estimatedPomodoros,
  className,
  component: Component = "div",
}) => {
  return (
    <Component className={classNames(styles.task, className)}>
      <Box className={styles["task__header"]}>
        <h2>{title}</h2>
        <Box w="fit-content" mg="0">
          <span>
            {completedPomodoros}/{estimatedPomodoros}
          </span>
          <Button variant="icon" startIcon={faCaretSquareDown} iconSize="xl" />
        </Box>
      </Box>

      <Box>
        <p>{description}</p>
        <p>{status}</p>
        <p>{createdAt}</p>
        <p>{updatedAt}</p>
        <p>{completedAt}</p>
        <p>{deletedAt}</p>
        <p>{estimatedPomodoros}</p>
      </Box>
    </Component>
  );
};
