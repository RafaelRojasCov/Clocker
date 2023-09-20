import { Input } from "../Input";
import { Box } from "../Layout";
import { Button } from "../Button";

export interface TaskFormProps {
  formVisible?: boolean;
  task?: string;
  handleInput?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addTask?: () => void;
  cancelForm?: () => void;
}

export const TaskForm: React.FC<TaskFormProps> = ({
  formVisible,
  task,
  handleInput,
  addTask,
  cancelForm,
}) => {
  return formVisible ? (
    <Box flexFlow="column" gap="1em" bgColor={"#fff"}>
      <Input
        id="task"
        name="task"
        type="text"
        onChange={handleInput}
        value={task}
        placeholder="What are you working on?"
      />
      <Box
        flexFlow="row"
        placeContent="end"
        gap="1em"
        bgColor="rgba(0,0,0,0.1)"
        br="0px 0px 0.5em 0.5em"
        pd="1em"
      >
        <Button variant="text-only" onClick={cancelForm}>
          Cancel
        </Button>
        <Button variant="solid" onClick={addTask}>
          Add
        </Button>
      </Box>
    </Box>
  ) : null;
};
