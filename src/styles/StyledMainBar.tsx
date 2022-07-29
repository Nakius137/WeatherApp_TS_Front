import styled from "styled-components";

export const StyledMain = styled.div`
  & p {
    text-align: center;
    color: white;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

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
  margin-top: 20rem;
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

export const StyledMainP = styled.p`
  font-size: 45px;
`;

export const StyledFrontImg = styled.img`
  width: 250px;
  height: 250px;
`;

export const StyledFavoriteCity = styled.p`
  padding-left: 10px;
  padding-right: 10px;

  &:hover {
    cursor: pointer;
  }
`;

export const StyledFavoriteCityCotainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-left: auto;
  margin-right: auto;
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

export const StyledFavoriteDelete = styled.button`
  position: absolute;
  margin-top: 2.5rem;
  border-radius: 15px;
  padding-left: 1.25rem;
  padding-right: 1.5rem;
  color: white;
  background-color: #cc3838;
  &:hover {
    cursor: pointer;
    cursor: pointer;
    background-color: white;
    color: black;
    transition-duration: 0.2s;
  }
`;
