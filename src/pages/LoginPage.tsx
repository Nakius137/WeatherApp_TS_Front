import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserAttribute,
} from "amazon-cognito-identity-js";
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
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

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
      onSuccess: (session) => {
        setContextValue({ ...contextValues, isAuth: true });
        const tokens = {
          accessToken: session.getAccessToken().getJwtToken(),
        };
      },
      onFailure: () => {
        alert("Wpisz poprawne dane lub się zarejestruj");
      },
    });
  };

  const setCognitoUserAttribute = (
    attributeKey: string,
    attributeValue: string
  ) => {
    let data = {
      Name: attributeKey,
      Value: attributeValue,
    };

    return new CognitoUserAttribute(data);
  };

  const handleRegisterOnSubmit = () => {
    let email = login;
    let attributeList = [];

    attributeList.push(setCognitoUserAttribute("email", email));

    UserPool.signUp(
      email,
      password,
      attributeList,
      //@ts-ignore
      null,
      (err, data) => {
        if (err) console.error(err);
        alert("Udało się zarejestrować, możesz przejść do logowania");
      }
    );
  };

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
        <StyleduSubmitButton onClick={handleRegisterOnSubmit}>
          Rejestracja
        </StyleduSubmitButton>
      </StyledButtonsContainer>
    </StyledComponent>
  );
};
