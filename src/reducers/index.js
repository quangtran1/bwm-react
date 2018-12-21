import * as redux from "redux";
import thunk from "redux-thunk";
import { rentalReducer, selectedRentalReducer } from "./rental-reducer";
import { createStore, applyMiddleware, compose } from "redux";

export const init = () => {
  const reducer = redux.combineReducers({
    rentals: rentalReducer,
    rental: selectedRentalReducer
  });
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
  return store;
};
