import context from "../context/context";
import { useContext } from "react";

const useAppContext = () => {
  const { contextValues, setContextValue } = useContext(context);

  if (!contextValues) {
    throw new Error("Missing context");
  }
  return { contextValues, setContextValue };
};

export default useAppContext;
