import axios from "axios";
export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const TOOGLE_MODAL = "TOOGLE_MODAL";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const TRY_TO_ADD_TO_CART = "TRY_TO_ADD_TO_CART";
export const TRY_TO_REMOVE_FROM_CART = "TRY_TO_REMOVE_FROM_CART";
export const RESET_CART = "RESET_CART";
export const CHECK_OUT_BTN_ABLED = "CHECK_OUT_BTN_ABLED";
export const CHECK_OUT_BTN_DISABLED = "CHECK_OUT_BTN_DISABLED";
// Fetching products

export const fetchProducts = () => async (dispatch, getState) => {
  const response = await axios.get(
    `${document.location.href}products-data.json`
  );

  return dispatch({
    type: FETCH_PRODUCTS,
    payload: response.data,
  });
};

// FAVORITES  add or remove actions

export const addProductToFavorites = (thisCard) => {
  return {
    type: ADD_TO_FAVORITES,
    payload: thisCard,
  };
};

export const deleteProductFromFavorites = (id) => {
  return {
    type: REMOVE_FROM_FAVORITES,
    payload: id,
  };
};

// Cart add or remove actions

export const tryToAddToCart = (thisCard) => {
  return {
    type: TRY_TO_ADD_TO_CART,
    payload: thisCard,
  };
};
export const tryToRemoveFromCart = (thisCard) => {
  return {
    type: TRY_TO_REMOVE_FROM_CART,
    payload: thisCard,
  };
};
export const addProductToCart = () => {
  return {
    type: ADD_TO_CART,
  };
};
export const removeProdFromCart = () => {
  return {
    type: REMOVE_FROM_CART,
  };
};
export const resetCartItems = () => {
  return {
    type: RESET_CART,
  };
};
export const checkOutBtnAbled = () => {
  return {
    type: CHECK_OUT_BTN_ABLED,
  };
};
export const checkOutBtnDisabled = () => {
  return {
    type: CHECK_OUT_BTN_DISABLED,
  };
};
