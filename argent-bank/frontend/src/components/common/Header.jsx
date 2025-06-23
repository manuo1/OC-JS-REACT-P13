import { Link } from "react-router-dom";
import argentBankLogo from "../../assets/img/argentBankLogo.png";
import NavUserProfile from "./NavUserProfile.jsx";
import NavLogout from "./NavLogout.jsx";
import NavLogin from "./NavLogin.jsx";

export default function Header({ firstName }) {
  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {firstName ? (
          <>
            <NavUserProfile firstName={firstName} />
            <NavLogout />
          </>
        ) : (
          <NavLogin />
        )}
      </div>
    </nav>
  );
}
