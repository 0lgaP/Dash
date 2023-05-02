import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

// hook
import { useLogout } from "../../hooks/useLogout";
// styles
import "./Navbar.css";
// icon
import Temple from "../../assets/temple.svg";

const Navbar = () => {
  const { logout, isPending } = useLogout();
  const { user } = useAuthContext();
  return (
    <nav className="navbar">
      <ul>
        <li className="logo">
          <Link exact="true" to="/">
            <img src={Temple} alt="Dash logo" />
            <span>Dash</span>
          </Link>
        </li>

        {!user && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
        <li>
          {!isPending && (
            <button className="btn" onClick={logout}>
              Logout
            </button>
          )}
          {isPending && (
            <button className="btn" onClick={logout}>
              Logging out
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
