import styled from "styled-components";

export const StyledMain = styled.div`
  display: inline-block;
  position: absolute;
  left: 50%;
  top: 60%;

  &[StyledMainImg] {
    margin-left: 50px;
  }

  transform: translate(-50%, -90%);
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

export const StyledP = styled.p`
  color: rgb(73, 73, 73);
`;

export const StyledSpan = styled.span`
  color: black;
  font-style: italic;
`;

export const Animation = styled.div`
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

export const StyledLogo = styled.img`
  width: 300px;
  height: 150;
  position: fixed;
  left: 785px;
  top: 450px;
  transform: translate(-20%, 50%);
  animation-name: animationSpin;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-duration: 4s;
  @keyframes animationSpin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const StyledMainImg = styled.img`
  width: 250px;
  height: 250px;
`;
