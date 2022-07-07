import React from "react";
import { ApiResponse } from "./types";
import { SecondaryBar } from "./SecondaryBar";
import useAppContext from "../context/useContext";

export const SecondaryBarList: React.FC = () => {
  const {
    contextValues: { weathers, icons },
  } = useAppContext();

  return (
    <>
      {weathers.map(
        ({ temp, temp_max, temp_min, feels_like, pressure, id }, index) => (
          <div>
            <SecondaryBar
              icon={icons[index]}
              key={id}
              temp={temp}
              temp_max={temp_max}
              temp_min={temp_min}
              feels_like={feels_like}
              pressure={pressure}
            />
          </div>
        )
      )}
    </>
  );
};
