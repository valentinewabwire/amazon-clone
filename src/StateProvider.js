import React, { createContext, useContext, useReducer } from "react";

// Prepares the data layout
export const StateContext = createContext();

//Wrap our app
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from data layout
export const useStateValue = () => useContext(StateContext);
