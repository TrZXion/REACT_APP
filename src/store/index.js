import { combineReducers, createStore } from "redux";

import { cartReducer } from "./cart";
import { categoriesReducer } from "./categories";
import { productsReducer } from "./products";

// State
// {
//   categories: { ... },
//   cart: { ... }
// }
const finalReducer = combineReducers({
  categories: categoriesReducer,
  cart: cartReducer,
  products: productsReducer
});

const store = createStore(finalReducer);

export default store;
