// context/LoaderContext.jsx
import { createContext, useState } from "react";

export const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoaderContext value={{ loading, setLoading }}>
      {children}
    </LoaderContext>
  );
};
