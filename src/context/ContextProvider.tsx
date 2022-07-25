import context, { defaultContext } from "./context";
import React, { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
}

const ContextProvider: React.FC<Props> = ({ children }) => {
  const [contextValues, setContextValue] = useState(defaultContext);
  return (
    <context.Provider value={{ contextValues, setContextValue }}>
      {children}
    </context.Provider>
  );
};

export default ContextProvider;
