import { addProductToCart } from "../../stores/actions";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../stores/actions";
import Modal from "../../components/Modal/Modal";
import Card from "../../components/Card/Card";
import { useEffect } from "react";
import "./MainSection.scss";

function MainSection() {
  const dispatch = useDispatch();
  const products = useSelector(
    (state) => state.getAllProductsReducer.allProducts
  );
  const btnMessage = "Add to cart";

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const submitToAddToCart = () => {
    dispatch(addProductToCart());
  };
  return (
    <>
      <Modal
        header="Add this item to the cart?"
        textContent="Are you sure you want to add this item to the card? "
        submitBtnFunc={submitToAddToCart}
      />

      <div className="main-section">
        <ul className="main-section__list">
          {products.map((product) => (
            <Card
              id={product.id}
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              vendorCode={product.vendorCode}
              btnMessage={btnMessage}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default MainSection;
