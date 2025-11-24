// src/components/LoaderWrapper.jsx
import { useContext } from "react";
import { LoaderContext } from "../context/LoaderContext";
import Loader from "./Loader";

export default function LoaderWrapper({ children }) {
  const { loading } = useContext(LoaderContext);

  return (
    <>
      {loading && <Loader />}
      <div className={`${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
        {children}
      </div>
    </>
  );
}
