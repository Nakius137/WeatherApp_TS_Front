export interface ApiResponse {
  feels_like: number;
  grnd_level: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp: number;
  temp_kf: number;
  temp_max: number;
  temp_min: number;
  childreen?: string;
}

export type InputValue = React.ChangeEvent<HTMLInputElement>;

export type DestinationType = string | null;

export type ResponseType = object | null;

export interface FetchArrayProps {
  fetchData: FetchProps[];
}

interface FetchProps {
  Email: string;
  Favorite_City: string[];
}
