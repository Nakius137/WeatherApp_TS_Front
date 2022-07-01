import React, { useState, ChangeEventHandler, createContext } from 'react';

import './App.css';
// import MainBar from "./components/MainBar"

export const MainApi = createContext(undefined);
export const SecondaryApi = createContext(undefined);

const App: React.FC = () => {

  type InputValue = React.ChangeEvent<HTMLInputElement>

  const [destination, setDestination] = useState<string | undefined>(undefined)
  const [weatherData, setWeatherData] = useState<object | undefined>(undefined)
  const [secondaryWeatherData, setSecondaryWeatherData] = useState<string | undefined>(undefined);

  const handleOnChange = (e: InputValue): void => {
    setDestination(e.target.value); 
};                        

  const handleGetData = async (destination: string | undefined)  => {
    
    const API = `https://api.openweathermap.org/data/2.5/forecast?q=${destination}&appid=bfd9e24dfea0d5fd385e2137bce7cb95`
    
      try {
        const result  = await fetch(API);
        
        const rawData = await result.json();
        const trimedMainData = rawData.list[0].main;
        const trimedSecondaryData = rawData.list

        setWeatherData(trimedMainData);
        setSecondaryWeatherData(trimedSecondaryData);
    } catch (error) {
        throw Error
    }


  }
  return (
    <div className="App">
      <p>zyje</p>
      <>
      <label>Wpisz nazwe</label>
      <input 
        type="text" 
        value={destination} 
        onChange={handleOnChange}>
      </input>
      <button 
        onClick={() => handleGetData(destination)}>
        Szukaj
      </button>
      {/* <MainApi.Provider value={weatherData} >
        <SecondaryApi.Provider value={secondaryWeatherData}>
            <MainBar/>
        </SecondaryApi.Provider>
      </MainApi.Provider> */}
       
    </>
    </div>
  );
}

export default App;
