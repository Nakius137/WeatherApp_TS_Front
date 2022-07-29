import { Icons, ApiResponse, MainData } from "types";

const trimData = (result: any) => {
  const icons = result.list.map((elem: any) => elem.weather[0].main as Icons);

  const date = result.list.map((elem: any) => elem.dt_txt as ApiResponse);

  const weathers = result.list.map((elem: any) => elem.main) as MainData[];

  return [icons, date, weathers];
};

export const getWeatherData = async (destination: string) => {
  const API = `https://api.openweathermap.org/data/2.5/forecast?q=${destination}&appid=bfd9e24dfea0d5fd385e2137bce7cb95`;
  try {
    const result = await (await fetch(API)).json();

    const [icons, date, weathers] = trimData(result);

    if (!weathers) {
      throw new Error("Problem with correctness of the API response ");
    } else {
      return { weathers, icons, date };
    }
  } catch (error) {
    throw new Error("Problem with getting the API response");
  }
};
