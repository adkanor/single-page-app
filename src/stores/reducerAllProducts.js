import { FETCH_PRODUCTS } from "./actions";

const initState = {
  allProducts: [],
};
const getAllProductsReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, allProducts: action.payload };
    default:
      return state;
  }
};
export default getAllProductsReducer;
