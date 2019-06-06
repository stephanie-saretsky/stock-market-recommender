import { createStore } from "redux";

let reducer = (state, action) => {
  if (action.type === "rating") {
    return { ...state, rating: action.value };
  }
  if (action.type === "stock-price") {
    return { ...state, price: action.value };
  }
  if (action.type === "socialMedia-counts") {
    return { ...state, counts: action.value };
  }
  if (action.type === "symbol") {
    return { ...state, symbol: action.value };
  }
  if (action.type === "daily-price") {
    return { ...state, daily: action.value };
  }
  return state;
};

let store = createStore(
  reducer,
  { rating: "", price: undefined, counts: undefined, symbol: "", daily: [] },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
