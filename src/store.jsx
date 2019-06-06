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
  return state;
};

let store = createStore(
  reducer,
  { rating: "", price: 0, counts: 0, symbol: "" },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
