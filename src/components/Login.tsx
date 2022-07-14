import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";
import UserPool from "../environment/UserPool";
import React, { useState } from "react";
import {
  StyledButton,
  StyledComponent,
  StyledLink,
  StyledInput,
  StyleduSubmitButton,
  StyledButtonsContainer,
} from "../styles/StyledLogin";

export const Login = () => {
  const handleOnSubmit = () => {
    console.log(login, "\n", password);
    console.log(process.env.REACT_APP_USER_POOL_ID);
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
      onFailure: (error) => console.log(`Fail - ${error}`),
      newPasswordRequired: () => console.log("newpaswddreq"),
    });
  };

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <StyledComponent>
      <StyledButton>
        <StyledLink to={"/"}>Powrót</StyledLink>
      </StyledButton>
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
        <StyleduSubmitButton onClick={handleOnSubmit}>
          Zaloguj się
        </StyleduSubmitButton>
        <StyleduSubmitButton>Rejestracja</StyleduSubmitButton>
      </StyledButtonsContainer>
    </StyledComponent>
  );
};
