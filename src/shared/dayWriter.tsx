import React from "react";
import { StyledP } from "../styles/StyledMainBar";
import useAppContext from "../context/useContext";

export const handleDate = (index: number) => {
  const {
    contextValues: { date },
  } = useAppContext();

  // @ts-ignore
  const day = new Date(date[index]).getDay();
  // @ts-ignore
  const hours = new Date(date[index]).getHours();
  // @ts-ignore
  const mins = new Date(date[index]).getMinutes() + "0";

  if (!isNaN(day))
    switch (day) {
      case 0:
        return (
          <StyledP>
            Niedziela - {hours}:{mins}
          </StyledP>
        );
      case 1:
        return (
          <StyledP>
            Poniedziałek - {hours}:{mins}
          </StyledP>
        );
      case 2:
        return (
          <StyledP>
            Wtorek - {hours}:{mins}
          </StyledP>
        );
      case 3:
        return (
          <StyledP>
            Środa - {hours}:{mins}
          </StyledP>
        );
      case 4:
        return (
          <StyledP>
            Czwartek - {hours}:{mins}
          </StyledP>
        );
      case 5:
        return (
          <StyledP>
            Piątek - {hours}:{mins}
          </StyledP>
        );
      case 6:
        return (
          <StyledP>
            Sobota - {hours}:{mins}
          </StyledP>
        );
      default:
        throw new Error("Problem with names");
    }
};
