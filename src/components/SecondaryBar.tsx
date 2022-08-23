import React from "react";
import {
  StyledSearchBarContainer,
  StyledSearchBarInfo,
  StyledSpanHover,
  StyledImg,
  StyledTemperatureDiv,
} from "../styles/StyledSecondaryBar";
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
  icon,
  index,
}) => {
  temp = KintoC(temp);
  temp_max = KintoC(temp_max);
  temp_min = KintoC(temp_min);
  feels_like = KintoC(feels_like);

  let navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/details/" + index);
  };

  return (
    <StyledSearchBarContainer onClick={handleNavigate}>
      <StyledSearchBarInfo>
        {handleDate(index!)}
        <StyledImg src={handleImg(icon as Icons)}></StyledImg>
        <StyledTemperatureDiv>
          <StyledSpanHover> {temp_max}°C</StyledSpanHover>
        </StyledTemperatureDiv>
      </StyledSearchBarInfo>
    </StyledSearchBarContainer>
  );
};
