import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";
import UserPool from "../environment/UserPool";
import React, { useState } from "react";
import {
  StyledComponent,
  StyledInput,
  StyleduSubmitButton,
  StyledButtonsContainer,
} from "../styles/StyledLogin";
import useAppContext from "../hooks/useContext";

export const Login = () => {
  const { setContextValue, contextValues } = useAppContext();

  const handleOnSubmit = () => {
    const user = new CognitoUser({
      Username: login,
      Pool: UserPool,
    });

    const authDetails = new AuthenticationDetails({
      Username: login,
      Password: password,
    });

    user.authenticateUser(authDetails, {
      onSuccess: () => {
        console.log("Sukces");
        setContextValue({ ...contextValues, isAuth: true });
      },
      onFailure: (error) => console.log(`Fail - ${error}`),
      newPasswordRequired: () => console.log("newpaswddreq"),
    });
  };

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <StyledComponent>
      <StyledInput
        placeholder="Wpisz email"
        onChange={(e) => {
          setLogin(e.target.value);
        }}
      ></StyledInput>
      <StyledInput
        placeholder="Wpisz hasło"
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      ></StyledInput>
      <StyledButtonsContainer>
        <StyleduSubmitButton onClick={handleOnSubmit}>
          Zaloguj się
        </StyleduSubmitButton>
        <StyleduSubmitButton>Rejestracja</StyleduSubmitButton>
      </StyledButtonsContainer>
    </StyledComponent>
  );
};
