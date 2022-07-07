import styled from "styled-components";

export const EntireApp = styled.body`
  width: 100%;
`;

export const StyledInputSection = styled.div`
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translate(-65%, -65%);
  width: 200px;
  height: 200px;
  display: inline-block;
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

export const StyledMainInput = styled.input`
  font-size: 25px;
  font-family: "Verdana, Geneva, Tahoma, sans-serif";
  height: 15px;
  width: 200px;
  padding: 10px;
  background-color: white;
  border: none;
  border-bottom: 2px solid red;
  border-radius: 25px;
  text-align: center;
  &:focus {
    border: none;
  }
  &::placeholder {
    color: black;
    opacity: 0.7;
  }
`;

export const StyledButton = styled.button`
  float: right;
  transform: translate(15px, 15px);
  border: 1px solid red;
  border-radius: 15px;
  background-color: white;
  width: 75px;
  height: 25px;
  &:hover {
    cursor: pointer;
  }
  &:active {
    cursor: pointer;
    background-color: red;
    color: white;
    transition-duration: 0.2s;
  }
`;
