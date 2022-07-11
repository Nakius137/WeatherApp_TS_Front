import styled from "styled-components";

export const StyledSearchBarDiv = styled.div`
  animation-name: animationOpacity;
  animation-duration: 1.5s;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 5rem;
  flex-wrap: wrap;
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
  margin-top: 2rem;
  height: 295px;
`;

export const StyledSearchBarInfo = styled.div`
  background-color: #999898;
  border: 1px solid black;
  border-radius: 15px;
  height: 298px;
  width: 250px;
  & p {
    text-align: center;
    padding-left: 15px;
    padding-right: 15px;
    color: white;
  }
`;

export const StyledSpanHover = styled.span`
  font-style: italic;
  font-size: 30px;
  padding-left: 34%;
`;

export const StyledImg = styled.img`
  width: 200px;
  height: 200px;
  padding-left: 25px;
`;

export const StyledTemperatureDiv = styled.div`
  background-color: whitesmoke;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;
