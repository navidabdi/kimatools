import React, { useContext, useReducer } from "react";

const modalReducer = (state, action) => {
  switch (action.type) {
    case "show":
      return {
        visible: true,
        svg: action.svg,
      };
    case "hide":
      return {
        visible: false,
        svg: "",
      };
    default:
      return state;
  }
};

const ModalContext = React.createContext();

export const useModal = () => {
  return useContext(ModalContext);
};

export const ModalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(modalReducer, {
    visible: false,
    svg: "",
  });

  const show = (text) => dispatch({ type: "show", svg: text });
  const hide = () => dispatch({ type: "hide" });

  return (
    <ModalContext.Provider
      value={{
        show,
        hide,
        visible: state.visible,
        svg: state.svg,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
