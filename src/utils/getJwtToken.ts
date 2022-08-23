import UserPool from "../environment/UserPool";

const getJwtToken = () => {
  const user = UserPool.getCurrentUser();
  let jwt: string | undefined;

  user?.getSession(() => {
    jwt = user.getSignInUserSession()?.getAccessToken().getJwtToken();
  });

  if (!jwt) throw "UnauthorizedException";

  return jwt;
};

export default getJwtToken;
