import {
  TRY_TO_ADD_TO_CART,
  TRY_TO_REMOVE_FROM_CART,
  REMOVE_FROM_CART,
  ADD_TO_CART,
  RESET_CART,
  CHECK_OUT_BTN_ABLED,
  CHECK_OUT_BTN_DISABLED,
} from "./actions";

const cartProducts = localStorage.getItem("cartProducts");

const initState = {
  cardToAdd: {},
  cardToRemove: {},
  allProducts: cartProducts ? JSON.parse(cartProducts) : [],
  checkOutBtn: false,
};

const cartReducer = (state = initState, action) => {
  let newState;

  switch (action.type) {
    case TRY_TO_ADD_TO_CART:
      return { ...state, cardToAdd: action.payload };

    case TRY_TO_REMOVE_FROM_CART:
      return { ...state, cardToRemove: action.payload };

    case ADD_TO_CART:
      newState = {
        ...state,
        allProducts: [...state.allProducts, state.cardToAdd],
      };
      localStorage.setItem(
        "cartProducts",
        JSON.stringify(newState.allProducts)
      );
      return newState;

    case REMOVE_FROM_CART:
      newState = {
        ...state,
        allProducts: [
          ...state.allProducts.filter(
            (product) => product.id !== state.cardToRemove.id
          ),
        ],
      };
      localStorage.setItem(
        "cartProducts",
        JSON.stringify(newState.allProducts)
      );

      return newState;
    case RESET_CART:
      newState = { ...state, allProducts: [] };
      localStorage.setItem(
        "cartProducts",
        JSON.stringify(newState.allProducts)
      );
      return newState;
    case CHECK_OUT_BTN_ABLED:
      return { ...state, checkOutBtn: true };
    case CHECK_OUT_BTN_DISABLED:
      return { ...state, checkOutBtn: false };
    default:
      return state;
  }
};
export default cartReducer;
