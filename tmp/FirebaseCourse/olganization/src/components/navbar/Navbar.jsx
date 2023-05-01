import { Link } from "react-router-dom";
// styles
import "./Navbar.css";
// icon
import Temple from "../../assets/temple.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li className="logo">
          <Link exact to="/">
            <img src={Temple} alt="Dash logo"/>
            <span>Dash</span>
          </Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <button className="btn">Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
