import { TOOGLE_MODAL } from "./actions";

const initState = {
  isOpened: false,
};
const modalReducer = (state = initState, action) => {
  switch (action.type) {
    case TOOGLE_MODAL:
      return { ...state, isOpened: !state.isOpened };
    default:
      return state;
  }
};
export default modalReducer;
