import React, { useState } from "react";
import {
  StyledSearchBarContainer,
  StyledSearchBarInfo,
  StyledSpanHover,
  StyledImg,
  StyledTemperatureDiv,
} from "../styles/StyledSecondaryBar";
import { StyledP, StyledSpan } from "../styles/StyledMainBar";
import { KintoC } from "../shared/temperatureConvert";
import { ApiResponse, Icons } from "./types";
import { handleImg } from "../shared/imageChoose";

type Props = Omit<
  ApiResponse,
  "grnd_level" | "sea_level" | "temp_kf" | "humidity" | `id`
>;

export const SecondaryBar: React.FC<Props> = ({
  temp,
  temp_max,
  temp_min,
  feels_like,
  pressure,
  icon,
}) => {
  temp = KintoC(temp);
  temp_max = KintoC(temp_max);
  temp_min = KintoC(temp_min);
  feels_like = KintoC(feels_like);

  const [isHover, setIsHover] = useState(false);

  const hoverChange = () => {
    setIsHover((isHover) => !isHover);
  };

  const textOnHover = (
    <StyledSearchBarInfo>
      <StyledP>
        Temperatura wynosi: <StyledSpan> {temp}°C</StyledSpan>
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
        Odczuwalna temperatura wynosi: <StyledSpan> {feels_like}°C</StyledSpan>
      </StyledP>
      <StyledP>
        Cisnienie wynosi: <StyledSpan> {pressure}Pa</StyledSpan>
      </StyledP>
    </StyledSearchBarInfo>
  );

  const textOfHover = (
    <>
      <StyledSearchBarInfo>
        {handleImg(icon as Icons)}
        <StyledTemperatureDiv>
          <StyledSpanHover> {temp_max}°C</StyledSpanHover>
        </StyledTemperatureDiv>
      </StyledSearchBarInfo>
    </>
  );

  const text = isHover ? textOnHover : textOfHover;

  return (
    <StyledSearchBarContainer onClick={hoverChange}>
      {text}
    </StyledSearchBarContainer>
  );
};
