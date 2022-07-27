import styled from "styled-components";

export const EntireApp = styled.body`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledInputSection = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  animation-name: animationOpacity;
  animation-duration: 1.5s;
  @keyframes animationOpacity {
    0% {
      opacity: 0%;
    }
    100% {
      opacity: 100%;
    }
  }
`;

export const StyledMainInput = styled.input`
  font-size: 25px;
  font-family: "Verdana, Geneva, Tahoma, sans-serif";
  height: 15px;
  width: 200px;
  padding: 10px;
  background-color: white;
  border: none;
  border-bottom: 2px solid red;
  border-radius: 25px;
  text-align: center;
  &:focus {
    border: none;
  }
  &::placeholder {
    color: black;
    opacity: 0.7;
  }
`;

export const StyledButton = styled.button`
  margin-left: auto;
  border: 1px solid red;
  border-radius: 15px;
  background-color: white;
  width: 75px;
  height: 25px;
  margin-top: 5px;
  &:hover {
    cursor: pointer;
    cursor: pointer;
    background-color: red;
    color: white;
    transition-duration: 0.2s;
  }
`;

export const StyledLogButton = styled.button`
  margin-right: auto;
  margin-left: 1rem;
  border: 1px solid red;
  border-radius: 15px;
  background-color: white;
  width: 100px;
  height: 25px;
  margin-top: 5px;
  &:hover {
    cursor: pointer;
    cursor: pointer;
    background-color: red;
    color: white;
    transition-duration: 0.2s;
  }
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledFavoriteButton = styled.button`
  margin-right: auto;
  margin-left: 1rem;
  border: 1px solid red;
  border-radius: 15px;
  background-color: white;
  width: 150px;
  height: 25px;
  margin-top: 5px;
  &:hover {
    cursor: pointer;
    cursor: pointer;
    background-color: red;
    color: white;
    transition-duration: 0.2s;
  }
  animation-name: animationOpacity;
  animation-duration: 1.5s;
  @keyframes animationOpacity {
    0% {
      opacity: 0%;
    }
    100% {
      opacity: 100%;
    }
  }
`;

export const StyledLogOutButton = styled.button`
  margin-right: auto;
  border: 1px solid red;
  border-radius: 15px;
  background-color: white;
  width: 100px;
  height: 25px;
  margin-top: 5px;
  &:hover {
    cursor: pointer;
    cursor: pointer;
    background-color: red;
    color: white;
    transition-duration: 0.2s;
  }
`;
