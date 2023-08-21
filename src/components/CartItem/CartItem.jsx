import { tryToRemoveFromCart } from "../../stores/actions";
import AddToCart from "../AddToCartBtn/AddToCart";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import "./CartItem.scss";

function CartItem(props) {
  const { id, btnMessage, name, image, vendorCode, price } = props;
  const thisCard = { id, name, price, image, vendorCode };
  const dispatch = useDispatch();

  const tryToAddRemoveProdFromCart = () => {
    dispatch(tryToRemoveFromCart(thisCard));
    console.log(thisCard);
  };

  return (
    <div className="cartItem">
      <div className="cartItem__img">
        <img
          className="cartItem__image"
          src={image}
          alt="card of product in the cart"
        ></img>
      </div>
      <div className="cartItem__info">
        <p className="cartItem__name">{name} </p>
        <p className="cartItem__vendorCode">Сode: {vendorCode}</p>
        <p className="cartItem__price">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            currencyDisplay: "narrowSymbol",
          }).format(price)}
        </p>
      </div>
      <div className="cartItem__action">
        <AddToCart
          backgroundColor="rgb(116, 34, 50)"
          text={btnMessage}
          tryToCart={tryToAddRemoveProdFromCart}
        />
      </div>
    </div>
  );
}
CartItem.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  vendorCode: PropTypes.number.isRequired,
  btnMessage: PropTypes.string.isRequired,
};
export default CartItem;
