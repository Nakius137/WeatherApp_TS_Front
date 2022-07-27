import UserPool from "../environment/UserPool";
//@ts-ignore
import { find } from "lodash";

import { useEffect } from "react";
import useAppContext from "./useContext";
const useAuth = () => {
  const { setContextValue } = useAppContext();
  useEffect(() => {
    const user = UserPool.getCurrentUser();
    if (user) {
      setContextValue((currentContext) => ({
        ...currentContext,
      }));
      user.getSession((err: Error) => {
        if (!err) {
          user.getUserAttributes((_: any, attributes: any) => {
            const email = find(
              attributes,
              (data: { Name: string }) => data.Name === "email"
            )?.Value as string;
            setContextValue((currentContext) => ({
              ...currentContext,
              isAuth: true,
              email,
            }));
          });
        }
      });
    }
  }, [setContextValue]);
};
export default useAuth;
