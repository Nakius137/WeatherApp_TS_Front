import styled from "styled-components";

export const StyledComponent = styled.div`
  padding: 1rem;
  animation-name: animationOpacity;
  animation-duration: 1.5s;
  @keyframes animationOpacity {
    0% {
      opacity: 0%;
    }
    100% {
      opacity: 100%;
    }
  }
`;

export const StyledInput = styled.input`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 15rem;
  margin-bottom: 0.5rem;
  height: 1.5rem;
  font-size: 1rem;
  border: 1px solid black;
  border-radius: 25px;
`;

export const StyleduSubmitButton = styled.button`
  border: 1px solid black;
  width: 5rem;
  height: 1.5rem;
  background-color: white;
  color: black;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
    background-color: black;
    transition: background, 0.5s;
    color: white;
  }
  display: flex;
  flex-direction: column;
  margin: auto;
`;

export const StyledButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 15rem;
  margin: auto;
`;
