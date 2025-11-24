// src/context/LoaderContext.jsx
import { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const LoaderContext = createContext();

export function LoaderProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // Run loader on route change
  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => setLoading(false), 2000); // 2 seconds
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <LoaderContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoaderContext.Provider>
  );
}
