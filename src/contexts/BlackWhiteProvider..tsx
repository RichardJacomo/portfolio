import { createContext, ReactNode, useState, useEffect } from "react";

interface BlackWhiteContextType {
    setMode: (mode: boolean) => void;
    mode: boolean;
  }

interface BlackWhiteProviderProps {
    children: ReactNode;
}

export const BlackWhiteContext = createContext<BlackWhiteContextType>({} as BlackWhiteContextType);

export const BlackWhiteProvider = ({ children }: BlackWhiteProviderProps) => {

const [mode, setModeState] = useState<boolean>(() => {
  const modeInLocalStorage = localStorage.getItem("mode");
  if (modeInLocalStorage) {
    return JSON.parse(modeInLocalStorage);
  } else {
    return true;
  }
});

const setMode = (mode: boolean) => {
  localStorage.setItem("mode", JSON.stringify(mode));
  setModeState(mode);
};

useEffect(() => {
  const modeInLocalStorage = localStorage.getItem("mode");
  if (modeInLocalStorage) {
    setModeState(JSON.parse(modeInLocalStorage));
  }
  document.body.focus();
}, []);


  return (
    <>
      <BlackWhiteContext.Provider
        value={{
          setMode,
          mode
        }}
      >
        {children}
      </BlackWhiteContext.Provider>
    </>
  );
};