import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";
import UserPool from "../environment/UserPool";
import React, { useState } from "react";
import {
  StyledComponent,
  StyledInput,
  StyleduSubmitButton,
  StyledButtonsContainer,
} from "../styles/StyledLogin";

export const Login = () => {
  const handleLoginOnSubmit = () => {
    const user = new CognitoUser({
      Username: login,
      Pool: UserPool,
    });

    const authDetails = new AuthenticationDetails({
      Username: login,
      Password: password,
    });

    user.authenticateUser(authDetails, {
      onSuccess: () => console.log("Sukces"),
      onFailure: () => alert("Wprowadź poprawne dane lub się zarejestruj"),
      newPasswordRequired: () => console.log("newpaswddreq"),
    });
  };

  const handleRegisterOnSubmit = () => {
    //@ts-ignore
    UserPool.signUp(login, password, [], null, (err) => {
      if (err) console.error(err);
    });
  };
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <StyledComponent>
      <StyledInput
        onChange={(e) => {
          setLogin(e.target.value);
        }}
      ></StyledInput>
      <StyledInput
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      ></StyledInput>
      <StyledButtonsContainer>
        <StyleduSubmitButton onClick={handleLoginOnSubmit}>
          Zaloguj się
        </StyleduSubmitButton>
        <StyleduSubmitButton onClick={handleRegisterOnSubmit}>
          Rejestracja
        </StyleduSubmitButton>
      </StyledButtonsContainer>
    </StyledComponent>
  );
};
