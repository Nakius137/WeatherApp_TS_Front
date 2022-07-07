import styled from "styled-components";

export const StyledSearchBarDiv = styled.div`
  display: grid;
  animation-name: animationOpacity;
  animation-duration: 1.5s;
  grid-template-columns: repeat(5, 259.2px);
  grid-template-rows: auto;
  grid-gap: 20px;
  transform: translate(110%, 15%);
  width: 259.2px;
  @keyframes animationOpacity {
    0% {
      opacity: 0%;
    }
    100% {
      opacity: 100%;
    }
  }
`;

export const StyledSearchBarContainer = styled.div`
  border: 1px solid black;
  border-radius: 15px;
  cursor: pointer;
  margin-top: 120px;
  height: 295px;
`;

export const StyledSearchBarInfo = styled.div`
  background-color: #999898;
  border: 1px solid black;
  border-radius: 15px;
  height: 295px;
  & p {
    padding-left: 15px;
    color: white;
  }
`;

export const StyledSpanHover = styled.span`
  color: wh;
  font-style: italic;
  font-size: 30px;
  padding-left: 34%;
`;

export const StyledImg = styled.img`
  width: 200px;
  height: 200px;
`;

export const StyledTemperatureDiv = styled.div`
  background-color: whitesmoke;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;
