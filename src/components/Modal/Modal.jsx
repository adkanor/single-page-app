import { useDispatch, useSelector } from "react-redux";
import { TOOGLE_MODAL } from "../../stores/actions";
import PropTypes from "prop-types";
import "./Modal.scss";

function Modal({ header, textContent, submitBtnFunc }) {
  const dispatch = useDispatch();
  const isModalOpened = useSelector((state) => state.modalReducer.isOpened);

  return (
    <div
      className={isModalOpened ? "modal active" : "modal"}
      onClick={() => dispatch({ type: TOOGLE_MODAL })}
    >
      <div className="modal_content" onClick={(e) => e.stopPropagation()}>
        <div
          className="modal-closeButton toClose"
          onClick={() => dispatch({ type: TOOGLE_MODAL })}
        >
          X
        </div>
        <h2 className="modal-header">{header}</h2>
        <p className="modalTextContent">{textContent}</p>

        <div className="btnsForModal">
          <button
            className="actionForModal submit"
            onClick={() => {
              dispatch({ type: TOOGLE_MODAL });
              submitBtnFunc();
            }}
          >
            OK
          </button>
          <button
            className="actionForModal cancel"
            onClick={() => dispatch({ type: TOOGLE_MODAL })}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  header: PropTypes.string.isRequired,
  textContent: PropTypes.string.isRequired,
  submitBtnFunc: PropTypes.func.isRequired,
};
export default Modal;
