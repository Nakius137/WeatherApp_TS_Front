import useAppContext from "../context/useContext";
import React from "react";
import { ApiResponse, Icons } from "./types";
import { SecondaryBarList } from "./SecondaryBarList";
import { KintoC } from "../shared/temperatureConvert";
import {
  StyledMain,
  StyledP,
  StyledSpan,
  StyledLogo,
  Animation,
} from "../styles/StyledMainBar";
import { StyledSearchBarDiv } from "../styles/StyledSecondaryBar";
import { handleImg } from "../shared/imageChoose";

export const MainBar: React.FC = () => {
  const {
    contextValues: { weathers, icons },
  } = useAppContext();

  let { temp, temp_max, temp_min, feels_like, pressure }: ApiResponse =
    weathers[0] || {};

  temp = KintoC(temp);
  temp_max = KintoC(temp_max);
  temp_min = KintoC(temp_min);
  feels_like = KintoC(feels_like);

  const text = (
    <StyledMain>
      <>
        {handleImg(icons[0] as Icons)}
        <StyledP>
          Temperatura wynosi:
          <StyledSpan> {temp}°C</StyledSpan>
        </StyledP>
        <StyledP>
          Maksymalna temperatura dziś wynosi:
          <StyledSpan> {temp_max}°C</StyledSpan>
        </StyledP>
        <StyledP>
          Minimalna temperatura dziś wynosi:
          <StyledSpan> {temp_min}°C</StyledSpan>
        </StyledP>
        <StyledP>
          Odczuwalna temperatura wynosi:
          <StyledSpan> {feels_like}°C</StyledSpan>
        </StyledP>
        <StyledP>
          Cisnienie wynosi:
          <StyledSpan> {pressure}Pa</StyledSpan>
        </StyledP>
      </>
    </StyledMain>
  );

  const loadingScreen = (
    <Animation>
      <StyledLogo src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"></StyledLogo>
    </Animation>
  );

  return (
    <div>
      {temp ? (
        <>
          {text}
          <StyledSearchBarDiv>
            <SecondaryBarList />
          </StyledSearchBarDiv>
        </>
      ) : (
        loadingScreen
      )}
    </div>
  );
};
