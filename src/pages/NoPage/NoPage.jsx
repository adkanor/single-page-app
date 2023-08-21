import { Link } from "react-router-dom";

import "./NoPage.scss";
function NoPage() {
  return (
    <div className="noPage">
      <h1 className="noPage__error">Error 404</h1>
      <p className="noPage__message">Please try later</p>
      <p className="noPage__message">or</p>
      <Link className="noPage__link" to="/">
        Click here to go to main page
      </Link>
    </div>
  );
}
export default NoPage;
