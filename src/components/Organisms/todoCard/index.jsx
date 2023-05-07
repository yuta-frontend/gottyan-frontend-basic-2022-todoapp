import React, { useState } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import BREAKPOINT from "../../../variables/breakpoint";
import FONTFAMILY from "../../../variables/font_family";
import Task from "../../Molecules/task";
import AddTaskButton from "../../Atoms/AddTaskButton";

const TodoCard = () => {
  const [taskList, setTaskList] = useState([]);
  const onAddTaskButtonClick = () => {
    setTaskList([...taskList, { name: "", initializing: true }]);
  };
  const onTaskComplete = (index) => {
    setTaskList(
      taskList.filter((value, removeindex) => {
        return removeindex !== index;
      })
    );
  };

  const onTaskChange = (value, index) => {
    if (value === "") {
      setTaskList(
        taskList.filter((value, removeindex) => {
          return removeindex !== index;
        })
      );
    } else {
      setTaskList(
        taskList.map((task, removeindex) => {
          return removeindex === index ? { name: value,initializing:task.initializing } : task;
        })
      );
    }
  };

  return (
    <StyledWrapper>
      <AddTaskButton onClick={onAddTaskButtonClick} />
      <StyledTaskList>
        {taskList.map((task, index) => {
          return (
            <Task
              key={index}
              onTaskComplete={() => onTaskComplete(index)}
              onTaskChange={(value) => onTaskChange(value, index)}
              taskName={task.name}
              defaultIsEditing={task.initializing}
            />
          );
        })}
      </StyledTaskList>
    </StyledWrapper>
  );
};
export default TodoCard;

const StyledWrapper = styled.div`
  position: relative;
  padding: 20px;
  border-radius: 4px;
  background-color: ${COLOR.LIGHT_BLACK};
`;
const StyledTaskList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
  &>div:first-child{
    padding-top:14px;
  }
`;
