import React, { createContext, useContext, useReducer } from 'react';

// Prepares the dataLayers
export const StateContext = createContext();

//Wrap our App and provide the dataLayer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Pull the information from the datalayer
export const useStateValue = () => useContext(StateContext);