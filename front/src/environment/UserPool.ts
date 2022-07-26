import { CognitoUserPool } from "amazon-cognito-identity-js";

import checkForEnv from "../utils/checkForEnv";

const userPoolData = {
  UserPoolId: checkForEnv(process.env.REACT_APP_USER_POOL_ID),
  ClientId: checkForEnv(process.env.REACT_APP_CLIENT_ID),
};

export default new CognitoUserPool(userPoolData);
