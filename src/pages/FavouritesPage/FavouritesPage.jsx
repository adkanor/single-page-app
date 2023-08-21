import EmptyFavoriteIcon from "./EmptyFavoriteIcon/EmptyFavoriteIcon";
import { useSelector, useDispatch } from "react-redux";
import { addProductToCart } from "../../stores/actions";
import Modal from "../../components/Modal/Modal";
import Card from "../../components/Card/Card";
import "./FavouritesPage.scss";

function FavouritesPage() {
  const dispatch = useDispatch();
  const btnMessage = "Add to cart";

  const favoriteProducts = useSelector(
    (state) => state.favoritesReducer.favorites
  );

  const submitToAddToCart = () => {
    dispatch(addProductToCart());
  };
  return (
    <>
      {Number(favoriteProducts.length) > 0 ? (
        <>
          <Modal
            header="Add this item to the cart?"
            textContent="Are you sure you want to add this item to the card? "
            submitBtnFunc={submitToAddToCart}
          />
          <div className="favorite__section">
            <ul className="favorite__list">
              {favoriteProducts.map((fav) => (
                <Card
                  id={fav.id}
                  key={fav.id}
                  name={fav.name}
                  price={fav.price}
                  image={fav.image}
                  vendorCode={fav.vendorCode}
                  btnMessage={btnMessage}
                />
              ))}
            </ul>
          </div>
        </>
      ) : (
        <>
          <EmptyFavoriteIcon />
        </>
      )}
    </>
  );
}

export default FavouritesPage;
