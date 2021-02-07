import { createStore, combineReducers } from "redux";
// Reducers
import Product from "./reducers/product";

const reducers = combineReducers({
  Product: Product
});

const store = createStore(reducers);

export default store;
