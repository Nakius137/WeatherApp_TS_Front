import { FavCity, MainData } from "types";
import React, { Dispatch, SetStateAction } from "react";

export interface ContextProperties {
  weathers: MainData[];
  icons: string;
  date: number;
  favCities: FavCity[];
  isAuth: boolean;
}

interface Context {
  contextValues: ContextProperties;
  setContextValue: Dispatch<SetStateAction<ContextProperties>>;
}

export const defaultContext: ContextProperties = {
  weathers: [],
  icons: "",
  date: 0,
  favCities: [],
  isAuth: false,
};

export default React.createContext<Context>({
  contextValues: defaultContext,
  setContextValue: () => {},
});
