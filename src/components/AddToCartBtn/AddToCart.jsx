import { TOOGLE_MODAL } from "../../stores/actions";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import "./AddToCart.scss";

function AddToCart({
  backgroundColor = "rgb(116, 34, 50)",
  text,
  tryToCart,
  inCartChecker,
  thisCard,
}) {
  const bgColor = {
    backgroundColor: backgroundColor,
  };
  const dispatch = useDispatch();

  return (
    <button
      className="button"
      style={bgColor}
      onClick={() => {
        tryToCart();
        dispatch({ type: TOOGLE_MODAL });
      }}
    >
      {text}
    </button>
  );
}
AddToCart.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  tryToCart: PropTypes.func.isRequired,
};
export default AddToCart;
