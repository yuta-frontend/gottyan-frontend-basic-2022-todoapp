import React from "react";
import styled from "styled-components";
import TEXT from "../../../variables/texts";
import BREAKPOINT from "../../../variables/breakpoint";
import FONTFAMILY from "../../../variables/font_family";
import Title from "../../Atoms/Title";
import TodoCard from "../../Organisms/todoCard";
import AlertManager from "../../Organisms/AlertManager";
const MainPage = () => {
  return (
    <StyledWrapper>
      <Title />
      <AlertContainer>
        <AlertManager />
      </AlertContainer>
      <TodoCard />
    </StyledWrapper>
  );
};

export default MainPage;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  @media screen and (min-width: ${BREAKPOINT.MEDIUM}) {
    padding-top: 60px;
  }
  & > div:last-child {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
  }
`;

const AlertContainer=styled.div`
  top: 20px;
  display: flex;
  justify-content: center;
  width: 100%;
  position: absolute;
`
