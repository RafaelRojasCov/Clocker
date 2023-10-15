import classNames from "classnames";
import { Box } from "../Layout";
import { Task } from "./Task";
import styles from "./TaskList.module.scss";

export interface TaskListProps {
  taskList: string[];
}

export const TaskList: React.FC<TaskListProps> = ({ taskList = [] }) => {
  return (
    <>
      {!!taskList.length && (
        <Box className={classNames(styles["task-list"])}>
          <ul className={styles["task-list__ul"]}>
            {taskList.map((task, i) => (
              <Task key={i} component="li" title={task} />
            ))}
          </ul>
        </Box>
      )}
    </>
  );
};
