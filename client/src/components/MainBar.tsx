import useAppContext from "../hooks/useContext";
import React from "react";
import { MainData, Icons } from "../types";
import { SecondaryBarList } from "./SecondaryBarList";
import { KintoC } from "../shared/temperatureConvert";
import {
  StyledMain,
  StyledP,
  StyledSpan,
  StyledLogo,
  Animation,
  StyledMainP,
  StyledMainImg,
} from "../styles/StyledMainBar";
import { StyledSearchBarDiv } from "../styles/StyledSecondaryBar";
import { handleImg } from "../shared/imageChoose";
import { handleDate } from "../shared/dayWriter";
import { FetchArrayProps } from "./@types";

export const MainBar: React.FC<FetchArrayProps> = (props: FetchArrayProps) => {
  const {
    contextValues: { weathers, icons },
  } = useAppContext();

  let { temp, temp_max, temp_min, feels_like, pressure }: MainData =
    weathers[0] || {};

  const index = 0;

  temp = KintoC(temp);
  temp_max = KintoC(temp_max);
  temp_min = KintoC(temp_min);
  feels_like = KintoC(feels_like);

  return (
    <div>
      {temp && props.fetchData ? (
        <>
          <StyledMain>
            {props.fetchData
              ? props.fetchData.map(({ Favorite_City }) => {
                  return <p>{Favorite_City}</p>;
                })
              : null}
          </StyledMain>
          <StyledMain>
            <StyledMainP>{handleDate(index)}</StyledMainP>
            <StyledMainImg src={handleImg(icons[0] as Icons)}></StyledMainImg>
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
          </StyledMain>
          <StyledSearchBarDiv>
            <SecondaryBarList />
          </StyledSearchBarDiv>
        </>
      ) : (
        <Animation>
          <StyledLogo src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"></StyledLogo>
        </Animation>
      )}
    </div>
  );
};
