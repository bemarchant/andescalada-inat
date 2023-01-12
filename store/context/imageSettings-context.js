import { createContext, useState } from "react";
export const ImageSettingsContext = createContext({
  posX: 0,
  posY: 0,
});

const ImageSettingsContextProvider = ({ children }) => {
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);

  const value = {
    posX: posX,
    posY: posY,
  };

  return (
    <ImageSettingsContext.Provider value={value}>
      {children}
    </ImageSettingsContext.Provider>
  );
};

export default ImageSettingsContextProvider;
