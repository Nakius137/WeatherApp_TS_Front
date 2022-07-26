import useAppContext from "../hooks/useContext";
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
import { handleImg } from "../shared/imageChoose";
import { Icons } from "types";
import { useParams } from "react-router-dom";

type DetailParams = {
  id: string;
};

export const Details: React.FC = () => {
  const {
    contextValues: { weathers, icons },
  } = useAppContext();

  console.log(useParams());
  const id = useParams<DetailParams>().id as unknown as number;
  console.log(id);

  let { temp, temp_max, temp_min, feels_like, pressure } = weathers[id] || {};

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
          src={handleImg(icons[id] as Icons)}
        ></StyledDetailsImg>
        <StyledContainerRight>
          <StyledDetailsP>
            Odczuwalna temperatura wynosi: {feels_like}°C
          </StyledDetailsP>
          <StyledDetailsP>Cisnienie wynosi: {pressure}Pa</StyledDetailsP>
        </StyledContainerRight>
      </StyleWraper>
    </StyledComponent>
  );
};
