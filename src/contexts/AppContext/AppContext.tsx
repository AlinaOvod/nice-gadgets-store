import React from 'react';
import { State } from '../../types/State';
import { Action } from '../../types/Action';
import { useSessionReducer } from '../../hooks/useSessionStorage';
import { reducer } from '../../utils/appReducer';

type ActionType = (action: Action) => void;

const initialState: State = {
  favorites: [],
  cart: [],
};

export const StateContext = React.createContext<State>(initialState);
export const DispatchContext = React.createContext<ActionType>(() => {});

type Props = {
  children: React.ReactNode;
};

export const GlobalStateProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useSessionReducer(reducer, initialState, 'state');

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};
