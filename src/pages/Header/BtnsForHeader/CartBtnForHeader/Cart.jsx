import { useSelector } from "react-redux";
import "./Cart.scss";

const CartIconForHeader = () => {
  const amountOfProdInCart = useSelector(
    (state) => state.cartReducer.allProducts.length
  );

  return (
    <div className="cart__section">
      <svg
        className="cart__icon"
        width="50px"
        height="50px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.83179 4.3866H3.34341C4.20256 4.3866 4.96125 4.94694 5.21392 5.76811L8.27786 15.7259C8.53053 16.5471 9.28921 17.1074 10.1484 17.1074H17.1114C17.9373 17.1074 18.6743 16.5889 18.9534 15.8116L20.9925 10.1313C21.679 8.2187 20.2616 6.20386 18.2295 6.20386H10.66"
          stroke="white"
        />
        <circle cx="10.1707" cy="20.5322" r="1.46779" fill="#DF1463" />
        <circle cx="17.0203" cy="20.5322" r="1.46779" fill="#DF1463" />
      </svg>
      <p className="cart__number">{amountOfProdInCart}</p>
    </div>
  );
};

export default CartIconForHeader;
