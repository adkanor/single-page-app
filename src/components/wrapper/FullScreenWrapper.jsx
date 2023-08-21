import "./FullScreenWrapper.scss";
import PropTypes from "prop-types";
function FullScreenWrapper({ children }) {
  return <div className="fullScreenWrapper">{children}</div>;
}

FullScreenWrapper.propTypes = {
  children: PropTypes.array,
};
export default FullScreenWrapper;
