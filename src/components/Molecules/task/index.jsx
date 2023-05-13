import React, { useState } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import BREAKPOINT from "../../../variables/breakpoint";
import FONTFAMILY from "../../../variables/font_family";
import Checkbox from "../../Atoms/Checkbox";
import EditButton from "../../Atoms/EditButton";
import Input from "../../Atoms/Input";
const Task = ({
  onTaskChange,
  onTaskComplete,
  taskName = "",
  defaultIsEditing,
}) => {
  const [isEditing, setisEditing] = useState(defaultIsEditing);
  const onEditComplete = (value) => {
    setisEditing(false);
    onTaskChange(value);
  };
  const onEditButtonClick = () => {
    setisEditing(true);
  };
  const IfisEditing = () => {
    if (isEditing === true) {
      return(
      <InputWrapper>
        <Input onEditComplete={onEditComplete} defaultValue={taskName} />
      </InputWrapper>
      );
    } else {
      return (
        <StyledNameAndButtonWrapper>
          <StyledTaskName>{taskName}</StyledTaskName>
          <StyledEditButtonWrapper>
            <EditButton onClick={onEditButtonClick} />
          </StyledEditButtonWrapper>
        </StyledNameAndButtonWrapper>
      );
    }
  };

  return (
    <StyledWrapper>
      <StyledCheckboxWrapper>
        <Checkbox onClick={onTaskComplete} />
      </StyledCheckboxWrapper>
      <IfisEditing />
    </StyledWrapper>
  );
};
export default Task;
const InputWrapper =styled.div`
  width: 100%;
  display: flex;
  height: 20px;
`;
const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${COLOR.LIGHT_GRAY};
`;
const StyledCheckboxWrapper = styled.div`
  margin-right: 10px;
`;
const StyledNameAndButtonWrapper = styled.div`
  display: flex;
  width:100%;
  height: 20px;
`;
const StyledTaskName = styled.div`
  margin-right: 10px;
  font-size: 14px;
  width:100%;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const StyledEditButtonWrapper = styled.div`
  display: flex;

`;
