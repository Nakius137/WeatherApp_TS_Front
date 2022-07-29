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
  StyledFavoriteCityCotainer,
  StyledFavoriteCity,
  StyledFavoriteDelete,
} from "../styles/StyledMainBar";
import { StyledSearchBarDiv } from "../styles/StyledSecondaryBar";
import { handleImg } from "../shared/imageChoose";
import { handleDate } from "../shared/dayWriter";
import UserPool from "../environment/UserPool";
import { getWeatherData } from "../shared/API";

export const MainBar: React.FC = () => {
  const { contextValues, setContextValue } = useAppContext();

  const { icons, weathers, favCities } = contextValues;

  let { temp, temp_max, temp_min, feels_like, pressure }: MainData =
    weathers[0] || {};

  const index = 0;

  temp = KintoC(temp);
  temp_max = KintoC(temp_max);
  temp_min = KintoC(temp_min);
  feels_like = KintoC(feels_like);

  const handleDelete = async (favoriteCity: string) => {
    const postData = {
      email: UserPool.getCurrentUser()?.getUsername().toString() as string,
      favoriteCity: favoriteCity,
    };

    try {
      await fetch("http://localhost:5000/favcity", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });
      setContextValue({
        ...contextValues,
        favCities: favCities.filter(
          (favCity) => favCity.favoriteCity !== postData.favoriteCity
        ),
      });
      console.log(contextValues.favCities);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  const handleOnSearchClick = async (destination: string) => {
    const { weathers, icons, date } = await getWeatherData(destination);
    setContextValue({ ...contextValues, weathers, icons, date });
  };

  return (
    <div>
      {temp && favCities ? (
        <>
          <StyledFavoriteCityCotainer>
            {favCities.map(({ favoriteCity }) => {
              return (
                <StyledFavoriteCityCotainer>
                  <StyledFavoriteCity
                    onClick={() => handleOnSearchClick(favoriteCity)}
                  >
                    {favoriteCity}{" "}
                  </StyledFavoriteCity>

                  <StyledFavoriteDelete
                    //@ts-ignore
                    onClick={() => {
                      handleDelete(favoriteCity);
                    }}
                  >
                    Usuń
                  </StyledFavoriteDelete>
                </StyledFavoriteCityCotainer>
              );
            })}
          </StyledFavoriteCityCotainer>
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
