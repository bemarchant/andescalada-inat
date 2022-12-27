import { createContext, useState } from "react";
export const PopMenuContext = createContext({
  visibility: true,
  options: {},
  selectedOption: {},

  setVisibility: () => {},
  setOptions: () => {},
  setSelectedOption: () => {},
});

const PopMenuContextProvider = ({ children }) => {
  const [visibility, setVisibility] = useState(false);
  const [options, setOptions] = useState({});
  const [selectedOption, setSelectedOption] = useState({});

  const value = {
    visibility: visibility,
    options: options,

    selectedOption: selectedOption,

    setVisibility: (isVisible) => {
      setVisibility(isVisible);
    },

    setOptions: (options) => {
      setOptions({ ...options });
    },

    setSelectedOption: (option) => {
      setSelectedOption(option);
    },
  };

  return (
    <PopMenuContext.Provider value={value}>{children}</PopMenuContext.Provider>
  );
};

export default PopMenuContextProvider;
