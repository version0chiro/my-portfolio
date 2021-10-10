import { createContext, useReducer } from "react";

export const Store = createContext();

const initialState = {
  show: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "showAll":
      return {
        ...state,
        show: true,
      };
    case "hideAll":
      return {
        ...state,
        show: false,
      };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
