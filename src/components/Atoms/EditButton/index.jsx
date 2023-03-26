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
      <img src={PENCIL} className="pencil" />
    </StyledEditButton>
  );
};
export default EditButton;
const StyledEditButton = styled.button`
  background-color: transparent;
  border: 0;
  padding: 0;
  width: 20px;
  height: 20px;
  cursor: pointer;
  &:hover {
    background-color: rgba(184, 184, 184, 0.2); //COLOR.LIGHT_GLAY
    border-radius: 50%;
  }

  .pencil {
    width: 20px;
    height: 20px;
  }
`;
