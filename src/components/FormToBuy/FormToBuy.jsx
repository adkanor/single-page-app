import "./FormToBuy.scss";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { resetCartItems, checkOutBtnDisabled } from "../../stores/actions";
import { Link } from "react-router-dom";
function FormToBuy() {
  let productsInCart = useSelector((state) => state.cartReducer.allProducts);
  let checkOutBtn = useSelector((state) => state.cartReducer.checkOutBtn);
  let dispatch = useDispatch();
  const clearCart = () => {
    dispatch(resetCartItems());
    dispatch(checkOutBtnDisabled());
  };
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      age: "",
      adress: "",
      phoneNumber: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(2, "Too Short!")
        .max(15, "Too Long!")
        .required("Required"),
      lastName: Yup.string()
        .min(2, "Too Short!")
        .max(20, "Too Long!")
        .required("Required"),
      age: Yup.number("dfg")
        .min(10, "You should be older")
        .max(99, "Are you a real person?")
        .required("Required")
        .positive("Should be positive number"),
      adress: Yup.string().required("Required"),
      phoneNumber: Yup.number().required("Required"),
    }),
    onSubmit: (values) => {
      console.log({ ...values, ...productsInCart });
      clearCart();
    },
  });
  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <div className="form__input-container">
        <p className="form__input-content">First name</p>
        {formik.touched.firstName && formik.errors.firstName ? (
          <p className="form__input-error">{formik.errors.firstName}</p>
        ) : null}
        <input
          type="text"
          id="firstName"
          name="firstName"
          className="form__input"
          placeholder="First name"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />

        <p className="form__input-content">Last name</p>
        {formik.touched.lastName && formik.errors.lastName ? (
          <p className="form__input-error">{formik.errors.lastName}</p>
        ) : null}
        <input
          type="text"
          id="lastName"
          name="lastName"
          className="form__input"
          placeholder="Last name"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />

        <p className="form__input-content">Age</p>
        {formik.touched.age && formik.errors.age ? (
          <p className="form__input-error">{formik.errors.age}</p>
        ) : null}
        <input
          type="text"
          id="age"
          name="age"
          placeholder="Age"
          className="form__input"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.age}
        />
        <p className="form__input-content">Adress</p>
        {formik.touched.adress && formik.errors.adress ? (
          <p className="form__input-error">{formik.errors.adress}</p>
        ) : null}
        <input
          type="text"
          id="adress"
          name="adress"
          placeholder="Adress"
          className="form__input"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.adress}
        />
        <p className="form__input-content">Phone number</p>
        {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
          <span className="form__input-error">{formik.errors.phoneNumber}</span>
        ) : null}
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          className="form__input"
          onBlur={formik.handleBlur}
          placeholder="Phone number"
          onChange={formik.handleChange}
          value={formik.values.phoneNumber}
        />
      </div>
      {checkOutBtn ? (
        <button className="form__submit-button" type="submit">
          Checkout
        </button>
      ) : (
        <Link className="link" to="/">
          Thank you for your purchase! Go back to main page
        </Link>
      )}
    </form>
  );
}

export default FormToBuy;
