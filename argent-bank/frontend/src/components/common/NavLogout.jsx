import { Link } from "react-router-dom";

export default function NavLogout() {
  return (
    <Link to="/logout" className="main-nav-item">
      <i className="fa fa-sign-out"></i> Sign Out
    </Link>
  );
}
