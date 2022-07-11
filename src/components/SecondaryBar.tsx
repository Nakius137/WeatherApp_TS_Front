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
import { MainData, Icons } from "../types";
import { handleImg } from "../shared/imageChoose";
import { handleDate } from "../shared/dayWriter";
import { useNavigate } from "react-router-dom";

type Props = Omit<
  MainData,
  "grnd_level" | "sea_level" | "temp_kf" | "humidity" | `id`
>;

export const SecondaryBar: React.FC<Props> = ({
  temp,
  temp_max,
  temp_min,
  feels_like,
  pressure,
  icon,
  index,
}) => {
  temp = KintoC(temp);
  temp_max = KintoC(temp_max);
  temp_min = KintoC(temp_min);
  feels_like = KintoC(feels_like);

  const [isHover, setIsHover] = useState(false);
  let navigate = useNavigate();

  // @ts-ignore
  const handleNavigate = (index) => {
    navigate("details");
    console.log(index);
  };

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
        {handleDate(index!)}
        <StyledImg src={handleImg(icon as Icons)}></StyledImg>
        <StyledTemperatureDiv>
          <StyledSpanHover> {temp_max}°C</StyledSpanHover>
        </StyledTemperatureDiv>
      </StyledSearchBarInfo>
    </>
  );

  const text = isHover ? textOnHover : textOfHover;

  return (
    <StyledSearchBarContainer onClick={handleNavigate}>
      {text}
    </StyledSearchBarContainer>
  );
};
