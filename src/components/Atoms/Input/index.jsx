import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import BREAKPOINT from "../../../variables/breakpoint";
import FONTFAMILY from "../../../variables/font_family";
const Input = ({ defaultValue = "", onEditComplete }) => {
  const ref = useRef();

  useEffect(() => {
    ref.current.value = defaultValue;
    ref.current.onblur = (e) => onEditComplete(e.target.value);
    ref.current.focus();
    ref.current.onkeypress = (e) => {
      if (e.key === "Enter") {
        onEditComplete(e.target.value);
      }
     ;
    };
  }, []);
  return <StyledInput ref={ref} defaultValue={defaultValue} />;
};
export default Input;

const StyledInput = styled.input`
  display: flex;
  align-items: center;
  color: ${COLOR.LIGHT_GRAY};
  background-color: ${COLOR.BLACK};
  border: none;
  outline: none;
  width: 100%;
  height: 20px;
  padding:0 4px;
  font-size:14px;
  line-height: 20px;
  border-radius: 2px;
  ${TEXT.S};
  font-family: ${FONTFAMILY.ROBOTO};
`;
