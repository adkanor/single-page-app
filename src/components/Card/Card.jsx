import FavoriteIcon from "../FavoriteIcon/FavoriteIcon";
import { addProductToFavorites } from "../../stores/actions";
import { deleteProductFromFavorites } from "../../stores/actions";
import { tryToAddToCart } from "../../stores/actions";
import { useDispatch, useSelector } from "react-redux";
import AddToCart from "../AddToCartBtn/AddToCart";
import PropTypes from "prop-types";
import "./Card.scss";

const Card = ({ id, image, name, price, vendorCode, btnMessage }) => {
  const dispatch = useDispatch();
  const allfavorites = useSelector((state) => state.favoritesReducer.favorites);
  const allprodInCart = useSelector((state) => state.cartReducer.allProducts);

  const thisCard = { id, name, price, image, vendorCode };

  const tryToAddProdToCart = () => {
    dispatch(tryToAddToCart(thisCard));
  };

  const addToFavs = (thisCard) => {
    dispatch(addProductToFavorites(thisCard));
  };
  const removeFromFavs = (id) => {
    dispatch(deleteProductFromFavorites(id));
  };
  const favoritesChecker = (id) => {
    const boolean = allfavorites.some((product) => product.id === id);
    return boolean;
  };
  // const inCartChecker = (id) => {
  //   const boolean = allprodInCart.some((product) => product.id === id);
  //   console.log(boolean);
  //   return boolean;
  // };

  return (
    <>
      <div className="card">
        <li className="card__item">
          <div className="card__image">
            <img
              className="card__image"
              src={image}
              alt="card of product"
            ></img>
          </div>
          <p className="card__name">{name} </p>
          <p className="card__vendorCode">Сode: {vendorCode}</p>
          <p className="card__price">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
              currencyDisplay: "narrowSymbol",
            }).format(price)}
          </p>
          <div className="card__action-btns">
            <AddToCart
              backgroundColor="rgb(116, 34, 50)"
              text={btnMessage}
              tryToCart={tryToAddProdToCart}
            />
            <FavoriteIcon
              thisCard={thisCard}
              addToFavs={addToFavs}
              removeFromFavs={removeFromFavs}
              favoritesChecker={favoritesChecker}
            />
          </div>
        </li>
      </div>
    </>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  vendorCode: PropTypes.number.isRequired,
  btnMessage: PropTypes.string.isRequired,
};
export default Card;
