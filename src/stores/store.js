import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import favoritesReducer from "./reducerFavoritesPage";
import cartReducer from "./reducerCartPage";
import modalReducer from "./reducerModalWindow";
import getAllProductsReducer from "./reducerAllProducts";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  modalReducer: modalReducer,
  cartReducer: cartReducer,
  favoritesReducer: favoritesReducer,
  getAllProductsReducer: getAllProductsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: true,
});

export default store;
