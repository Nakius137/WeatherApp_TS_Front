import { MainData, ApiResponse, Icons, InputValue, FavCity } from "types";
import useAppContext from "../hooks/useContext";
import React, { useState, useEffect } from "react";
import { MainBar } from "../components/MainBar";
import UserPool from "../environment/UserPool";

import {
  EntireApp,
  StyledButton,
  StyledInputSection,
  StyledMainInput,
  StyledLogOutButton,
  StyledButtonContainer,
  StyledFavoriteButton,
} from "../styles/StyleApp";
import { getWeatherData } from "../shared/API";

const App: React.FC = () => {
  const { contextValues, setContextValue } = useAppContext();

  const [destination, setDestination] = useState<string>("");

  const email = UserPool.getCurrentUser()?.getUsername().toString() as string;
  const favCities = contextValues.favCities;

  const handleFavorite = async () => {
    const postData: FavCity = {
      email: email,
      favoriteCity: destination,
    };
    try {
      const result = await fetch("http://localhost:5000/favcity", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });
      if (result.status === 200) {
        setContextValue({
          ...contextValues,
          favCities: [...favCities, postData],
        });
      }
    } catch (error: unknown) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch(`/favcity?email=${email}`)
      .then((response) => response.json())
      .then((data) => setContextValue({ ...contextValues, favCities: data }))
      .catch((err) => console.log(err));
  }, []);

  const handleLogOut = () => {
    setContextValue({ ...contextValues, isAuth: false });
    const user = UserPool.getCurrentUser();
    user?.signOut();
  };

  const handleOnChange = (e: InputValue): void => {
    setDestination(e.target.value);
  };

  const handleOnSearchClick = async () => {
    const { weathers, icons, date } = await getWeatherData(destination);
    setContextValue({ ...contextValues, weathers, icons, date });
  };

  return (
    <EntireApp>
      <StyledLogOutButton onClick={handleLogOut}>
        Wyloguj sie
      </StyledLogOutButton>
      <StyledInputSection>
        <StyledMainInput
          placeholder="Wpisz miejscowość"
          type="text"
          value={destination || ""}
          onChange={handleOnChange}
        ></StyledMainInput>
        <StyledButtonContainer>
          <StyledButton onClick={handleOnSearchClick}>Szukaj</StyledButton>
          {destination ? (
            <StyledFavoriteButton onClick={handleFavorite}>
              Dodaj do ulubionych
            </StyledFavoriteButton>
          ) : null}
        </StyledButtonContainer>
      </StyledInputSection>
      <MainBar />
    </EntireApp>
  );
};

export default App;
