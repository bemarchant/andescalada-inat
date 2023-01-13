import { createContext, useState } from "react";
export const ImageSettingsContext = createContext({
  posX: 0,
  posY: 0,
  scale: 0,
  setPosX: () => {},
  setPosY: () => {},
  setScale: () => {},
});

const ImageSettingsContextProvider = ({ children }) => {
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);
  const [scale, setScale] = useState(1);

  const value = {
    posX: posX,
    posY: posY,
    scale: scale,

    setPosX: (posX) => {
      setPosX(posX);
    },
    setPosY: (posY) => {
      setPosY(posY);
    },
    setScale: (scale) => {
      setScale(scale);
    },
  };
  return (
    <ImageSettingsContext.Provider value={value}>
      {children}
    </ImageSettingsContext.Provider>
  );
};

export default ImageSettingsContextProvider;
