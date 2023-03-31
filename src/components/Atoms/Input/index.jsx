import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import BREAKPOINT from "../../../variables/breakpoint";
import FONTFAMILY from "../../../variables/font_family";
const Title = () => {
  return <StyledInput></StyledInput>;
};
export default Title;

const StyledInput = styled.input`
  color: ${COLOR.LIGHT_GRAY};
  background-color: ${COLOR.BLACK};
  border:none;
  outline:none;
  width: 100%;
  height:20px;
  
  ${TEXT.S};
  font-family: ${FONTFAMILY.ROBOTO};
`;

