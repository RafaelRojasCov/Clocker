import { useState } from "react";
import { Container } from "../Layout";
import { Button } from "../Button";
import { TaskForm } from "./TaskForm";
import { TaskList } from "./TaskList";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

export const Todo = () => {
  const [formVisible, setFormVisible] = useState<boolean>(false);
  const [taskList, setTaskList] = useState<string[]>([]);
  const [task, setTask] = useState<string>("");

  const handleFormVisibility = () => {
    setFormVisible(!formVisible);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    const trimmedTask = task.trim();
    if (trimmedTask === "") {
      return;
    }
    setTaskList([...taskList, trimmedTask]);
    setTask("");
  };

  return (
    <Container maxW="500px" flexFlow="column" gap="var(--spacing-md)">
      <h2 style={{ opacity: 0.6, fontSize: "1.2rem", textAlign: "center", width: "100%" }}>
        Time to focus!
      </h2>
      <Button
        startIcon={faPlusCircle}
        iconSize="xl"
        variant="dashed"
        onClick={handleFormVisibility}
      >
        Add Task
      </Button>
      <TaskList taskList={taskList} />
      <TaskForm
        formVisible={formVisible}
        handleInput={handleInput}
        cancelForm={handleFormVisibility}
        addTask={addTask}
        task={task}
      />
    </Container>
  );
};
