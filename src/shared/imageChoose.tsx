import { Icons } from "components/types";
import React from "react";
import { StyledMainImg } from "../styles/StyledMainBar";

export const handleImg = (icons: Icons) => {
  if (icons)
    switch (icons) {
      case "Clouds":
        return (
          <StyledMainImg
            className="img"
            src="https://openweathermap.org/img/wn/03d@2x.png"
          ></StyledMainImg>
        );
      case "Rain":
        return (
          <StyledMainImg
            className="img"
            src="https://openweathermap.org/img/wn/10d@2x.png"
          ></StyledMainImg>
        );
      case "Clear":
        return (
          <StyledMainImg
            className="img"
            src="https://openweathermap.org/img/wn/01d@2x.png"
          ></StyledMainImg>
        );
      default:
        throw new Error("Problems with icons");
    }
};
