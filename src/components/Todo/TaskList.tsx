import { Box } from "../Layout";
import classNames from "classnames";
import styles from "./TaskList.module.scss";

export interface TaskListProps {
  taskList: string[];
}

export const TaskList: React.FC<TaskListProps> = ({ taskList = [] }) => {
  return (
    <>
      {!!taskList.length && (
        <Box className={classNames(styles["task-list"])}>
          <ul>
            {taskList.map((task, i) => (
              <li key={i}>{task}</li>
            ))}
          </ul>
        </Box>
      )}
    </>
  );
};
