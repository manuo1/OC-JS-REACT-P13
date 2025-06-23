import { Link } from "react-router-dom";

export default function NavUserProfile({ firstName }) {
  return (
    <Link to="/user" className="main-nav-item">
      <i className="fa fa-user-circle"></i> {firstName}{" "}
    </Link>
  );
}
