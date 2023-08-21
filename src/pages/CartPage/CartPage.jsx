import CartItem from "../../components/CartItem/CartItem";
import EmptyCartIcon from "./EmptyCartIcon/EmptyCartIcon";
import { removeProdFromCart, checkOutBtnAbled } from "../../stores/actions";
import { useSelector, useDispatch } from "react-redux";
import Modal from "../../components/Modal/Modal";
import { Link } from "react-router-dom";
import "./CartPage.scss";

function CartPage() {
  const productsInCart = useSelector((state) => state.cartReducer.allProducts);
  const btnMessage = "Delete from cart";
  let key = 1;
  let totalPrice = productsInCart.reduce(
    (acc, item) => acc + Number(item.price),
    0
  );

  const dispatch = useDispatch();
  const submitToRemoveFromCart = () => {
    dispatch(removeProdFromCart());
  };
  return (
    <>
      {Number(productsInCart.length) > 0 ? (
        <>
          <Modal
            header="Delete this item from cart?"
            textContent="Are you sure you want to delete this item to the card? "
            submitBtnFunc={submitToRemoveFromCart}
          />

          <div className="cart-section">
            <ul className="cart__list">
              {productsInCart.map((cartItem) => (
                <CartItem
                  id={cartItem.id}
                  key={key++}
                  name={cartItem.name}
                  price={cartItem.price}
                  image={cartItem.image}
                  vendorCode={cartItem.vendorCode}
                  btnMessage={btnMessage}
                />
              ))}
            </ul>
            <div className="cart__total-price">
              Total price:{" "}
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                currencyDisplay: "narrowSymbol",
              }).format(totalPrice)}
            </div>
            <div className="cart__actionToPay">
              <Link to="/cart/action" className="cart__link">
                <button
                  className="cart__button"
                  onClick={() => {
                    dispatch(checkOutBtnAbled());
                  }}
                >
                  Buy products
                </button>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>
          <EmptyCartIcon />
        </>
      )}
    </>
  );
}

export default CartPage;
