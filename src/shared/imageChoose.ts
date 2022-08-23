import { Icons } from "types";

export const handleImg = (icons: Icons) => {
  if (icons)
    switch (icons) {
      case "Clouds":
        const src1 = "https://openweathermap.org/img/wn/03d@2x.png";
        return src1;
      case "Rain":
        const src2 = "https://openweathermap.org/img/wn/10d@2x.png";
        return src2;
      case "Clear":
        const src3 = "https://openweathermap.org/img/wn/01d@2x.png";
        return src3;
      case "Thunderstorm":
        const src4 = "https://openweathermap.org/img/wn/11n@2x.png";
        return src4;
      case "Drizzle":
        const src5 = "https://openweathermap.org/img/wn/09d@2x.png";
        return src5;
      case "Snow":
        const src6 = "https://openweathermap.org/img/wn/13d@2x.png";
        return src6;
      default:
        throw new Error("Problems with icons");
    }
};
