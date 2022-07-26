import {
  MainData,
  ApiResponse,
  DestinationType,
  Icons,
  InputValue,
} from "types";
import useAppContext from "../hooks/useContext";
import React, { useState, useEffect } from "react";
import { MainBar } from "../components/MainBar";
import UserPool from "../environment/UserPool";

import {
  EntireApp,
  StyledButton,
  StyledInputSection,
  StyledMainInput,
  StyledLogButton,
  StyledButtonContainer,
  StyledFavoriteButton,
} from "../styles/StyleApp";

const handleTrimedData = (result: any) => {
  const icons = result.list.map((elem: any) => elem.weather[0].main as Icons);

  const date = result.list.map((elem: any) => elem.dt_txt as ApiResponse);

  const weathers = result.list.map((elem: any) => elem.main) as MainData[];

  return [icons, date, weathers];
};

const App: React.FC = () => {
  const [destination, setDestination] = useState<DestinationType>(null);
  const [backendData, setBackendData] = useState();

  const Email = UserPool.getCurrentUser()?.getUsername().toString();

  useEffect(() => {
    fetch(`/login?email=${Email}`)
      .then((response) => response.json())
      .then((data) => setBackendData(data))
      .catch((err) => console.log(err));
  }, []);

  const { setContextValue, contextValues } = useAppContext();

  const handleOnChange = (e: InputValue): void => {
    setDestination(e.target.value);
  };

  const handleGetData = async (destination: DestinationType) => {
    const API = `https://api.openweathermap.org/data/2.5/forecast?q=${destination}&appid=bfd9e24dfea0d5fd385e2137bce7cb95`;
    try {
      const result = await (await fetch(API)).json();

      const [icons, date, weathers] = handleTrimedData(result);

      if (!weathers) {
        throw new Error("Problem with correctness of the API response ");
      } else {
        setContextValue({ ...contextValues, weathers, icons, date });
      }
    } catch (error) {
      throw new Error("Problem with getting the API response");
    }
  };

  const handleFavorite = async () => {
    const postData = {
      //@ts-ignore
      email: Email,
      //@ts-ignore
      favoriteCity: destination,
    };
    await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      //@ts-ignore
      body: JSON.stringify(postData),
    });
  };

  return (
    <EntireApp>
      <StyledInputSection>
        <StyledMainInput
          placeholder="Wpisz miejscowość"
          type="text"
          value={destination || ""}
          onChange={handleOnChange}
        ></StyledMainInput>
        <StyledButtonContainer>
          <StyledButton onClick={() => handleGetData(destination)}>
            Szukaj
          </StyledButton>
          {destination ? (
            <StyledFavoriteButton onClick={handleFavorite}>
              Dodaj do ulubionych
            </StyledFavoriteButton>
          ) : null}
        </StyledButtonContainer>
      </StyledInputSection>
      {/*@ts-ignore*/}
      <MainBar fetchData={backendData} />
    </EntireApp>
  );
};

export default App;
