import React from "react";

export type MainData = {
  feels_like: number;
  grnd_level: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp: number;
  temp_kf: number;
  temp_max: number;
  temp_min: number;
  id: string;
  icon?: string;
  index?: number;
};

export type Icons = "Clouds" | "Clear" | "Rain";

export type InputValue = React.ChangeEvent<HTMLInputElement>;

export type DestinationType = string | null;

export interface ApiResponse {
  list: WeatherData[];
}

interface WeatherData {
  dt_txt: string;
  main: MainData;
  weather: WeatherName[];
}

interface WeatherName {
  main: string;
}

export interface FetchPropsArray {
  FetchData: FetchProps[];
}

interface FetchProps {
  Email: string;
  FavoriteCity: string[];
}
