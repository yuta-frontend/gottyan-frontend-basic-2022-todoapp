import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import BREAKPOINT from "../../../variables/breakpoint";
import FONTFAMILY from "../../../variables/font_family";
import PLUS from "../../../assets/svg/plus.svg";
const AddTaskButton = ({ onClick }) => {
  return (
    <StyledAddTaskButton onClick={onClick}>
      <Color />
      <Div>
        <Img src={PLUS} />
        <Text>タスクを追加</Text>
      </Div>
    </StyledAddTaskButton>
  );
};
export default AddTaskButton;

const StyledAddTaskButton = styled.button`
position:relative;
  background-color: transparent;
  border: 0;
  cursor: pointer;
`;
const Color = styled.div`
  position:absolute;
  background-color: ${COLOR.GREEN};
  border-radius: 100vh;
  opacity: 0;
  transition: 0.2s ease;
  z-index: 1;
  width: 126px;
  height: 24px;
  &:hover {
    opacity: 0.2;
  }
`;

const Img = styled.img`
  width: 20px;
  height: 20px;
`;
const Div= styled.div`
  display:flex;
  padding:2px 6px;
`
const Text=styled.div`
   color: ${COLOR.GREEN};
   margin-left:10px;
`
