import context from "../context/context";
import { useContext } from "react";

const useAuth = () => {
  const {
    contextValues: { isAuth },
    setContextValue,
  } = useContext(context);

  return [setContextValue];
};

export default useAuth;
