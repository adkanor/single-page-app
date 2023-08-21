import FavouriteIconForHeader from "./BtnsForHeader/FavouriteBtnForHeader/FavoriteBtn";
import CartIconForHeader from "./BtnsForHeader/CartBtnForHeader/Cart";
import GoBackIcon from "./BtnsForHeader/GoBackIcon/GoBackIcon";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <div className="header__links">
        <Link to="/" className="header__link">
          <div className="header__link-to-main">
            <GoBackIcon /> Main page
          </div>
        </Link>
        <div className="header__links-group">
          <Link to="/cart" className="header__link">
            <CartIconForHeader />
          </Link>
          <Link to="/favourites" className="header__link">
            <FavouriteIconForHeader />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
