import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import BREAKPOINT from "../../../variables/breakpoint";
import FONTFAMILY from "../../../variables/font_family";
import PENCIL from "../../../assets/svg/pencil.svg";
const EditButton = ({ onClick }) => {
  return (
    <StyledEditButton onClick={onClick}>
      <Circle />
      <Img src={PENCIL} />
    </StyledEditButton>
  );
};
export default EditButton;

const StyledEditButton = styled.button`
  position: relative;
  background-color: transparent;
  border: 0;
  padding: 0;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
const Circle = styled.div`
  position: absolute;
  background-color: ${COLOR.LIGHT_GRAY};
  border-radius: 50%;
  opacity: 0;
  top: 0px;
  left: 0px;
  width: 20px;
  height: 20px;
  transition: 0.2s ease;
  z-index: 1;
  &:hover {
    opacity: 0.2;
  }
`;
const Img = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 20px;
  height: 20px;
`;
