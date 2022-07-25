import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledDetailsP = styled.p`
  font-size: 2rem;
  color: white;
  &:nth-child(n + 2) {
    padding-top: 15rem;
  }
`;

export const StyledDetailsImg = styled.img`
  height: 35rem;
  width: 35rem;
  justify-content: center;
  border-radius: 15px;
`;

export const StyleWraper = styled.div`
  display: flex;
`;

export const StyleContainerLeft = styled.div`
  flex-direction: column;
  margin-right: auto;
`;

export const StyledContainerRight = styled.div`
  flex-direction: column;
  margin-left: auto;
`;

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: white;
    transition-duration: color, 2.5s;
  }
`;

export const StyledButton = styled.div`
  border: 1px solid black;
  width: 4rem;
  height: 1rem;
  padding-left: 1.5rem;
  padding-right: 0.5rem;
  padding-bottom: 1rem;
  padding-top: 0.5rem;
  background-color: white;
  &:hover {
    background-color: black;
    transition: background, 0.5s;
  }
`;

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
