import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import BREAKPOINT from "../../../variables/breakpoint";
import FONTFAMILY from "../../../variables/font_family";
import CHECK from "../../../assets/svg/check.svg";
const Checkbox = ({ onClick }) => {
  return (
    <StyledCheckbox onClick={onClick}>
      <Img src={CHECK} />
    </StyledCheckbox>
  );
};
export default Checkbox;

const StyledCheckbox = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  border-radius: 2px;
  border: 2px solid ${COLOR.LIGHT_GRAY};
  cursor: pointer;
`;

const Img = styled.img`
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  &:hover {
    opacity: 1;
  }
`;
