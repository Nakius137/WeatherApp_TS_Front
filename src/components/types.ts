import React from "react";

export type ApiResponse = {
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
};

export type Date = {
  dt: number;
};

export type Icons = "Clouds" | "Clear" | "Rain";

export type InputValue = React.ChangeEvent<HTMLInputElement>;

export type DestinationType = string | null;
