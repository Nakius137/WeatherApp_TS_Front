import useAppContext from "../context/useContext";
import React from "react";
import {
  StyledDetailsP,
  StyledDetailsImg,
  StyleWraper,
  StyledContainerRight,
  StyleContainerLeft,
  StyledComponent,
  StyledButton,
  StyledLink,
} from "../styles/StyleDetails";
import { KintoC } from "../shared/temperatureConvert";
import { handleImg } from "shared/imageChoose";
import { Icons } from "types";

export const Details: React.FC = (index) => {
  const {
    contextValues: { weathers, icons },
  } = useAppContext();

  let { temp, temp_max, temp_min, feels_like, pressure } =
    weathers[index] || {};

  temp = KintoC(temp);
  temp_max = KintoC(temp_max);
  temp_min = KintoC(temp_min);
  feels_like = KintoC(feels_like);

  return (
    <StyledComponent>
      <StyledButton>
        <StyledLink to={"/"}>Powrót</StyledLink>
      </StyledButton>
      <StyleWraper>
        <StyleContainerLeft>
          <StyledDetailsP>Temperatura wynosi: {temp}°C</StyledDetailsP>
          <StyledDetailsP>
            Maksymalna temperatura dziś wynosi: {temp_max}°C
          </StyledDetailsP>
          <StyledDetailsP>
            Minimalna temperatura dziś wynosi: {temp_min}°C
          </StyledDetailsP>
        </StyleContainerLeft>
        <StyledDetailsImg
          src={handleImg(icons[index] as Icons)}
        ></StyledDetailsImg>
        <StyledContainerRight>
          <StyledDetailsP>
            Odczuwalna temperatura wynosi: {feels_like}°C
          </StyledDetailsP>
          <StyledDetailsP>Cisnienie wynosi: {pressure}Pas</StyledDetailsP>
        </StyledContainerRight>
      </StyleWraper>
    </StyledComponent>
  );
};
