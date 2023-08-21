import PropTypes from "prop-types";
import "./FavoriteIcon.scss";

const FavoriteIcon = ({
  thisCard,
  favoritesChecker,
  addToFavs,
  removeFromFavs,
}) => {
  return (
    <p>
      <svg
        onClick={() => {
          favoritesChecker(thisCard.id)
            ? removeFromFavs(thisCard.id)
            : addToFavs(thisCard);
        }}
        className={
          favoritesChecker(thisCard.id) ? "svg selected" : "svg not-selected"
        }
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
    </p>
  );
};
FavoriteIcon.propTypes = {
  thisCard: PropTypes.object.isRequired,
  favoritesChecker: PropTypes.func.isRequired,
  addToFavs: PropTypes.func.isRequired,
  removeFromFavs: PropTypes.func.isRequired,
};
export default FavoriteIcon;
