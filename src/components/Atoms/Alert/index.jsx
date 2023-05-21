import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import BREAKPOINT from "../../../variables/breakpoint";
import FONTFAMILY from "../../../variables/font_family";

const Alert = ({ text, isActive = false }) => {
  return <StyledAlert isActive={isActive}>{text}</StyledAlert>;
};
export default Alert;

const StyledAlert = styled.div`
  background-color: ${COLOR.RED};
  border-radius: 4px;
  max-width: 400px;
  color: ${COLOR.WHITE};
  ${TEXT.S};
  padding: 10px 20px;
  transition: all 0.5s ease;
  opacity: ${(props) => (props.isActive ? 1 : 0)};
  top: ${(props) => (props.isActive ? "80px" : "0px")};
`;