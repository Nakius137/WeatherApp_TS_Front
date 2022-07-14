import React from "react";
import { SecondaryBar } from "./SecondaryBar";
import useAppContext from "../hooks/useContext";

export const SecondaryBarList: React.FC = () => {
  const {
    contextValues: { weathers, icons },
  } = useAppContext();

  return (
    <>
      {weathers.map(
        ({ temp, temp_max, temp_min, feels_like, pressure, id }, index) => {
          return (
            <div>
              <SecondaryBar
                icon={icons[index]}
                index={index}
                key={id}
                temp={temp}
                temp_max={temp_max}
                temp_min={temp_min}
                feels_like={feels_like}
                pressure={pressure}
              />
            </div>
          );
        }
      )}
    </>
  );
};
