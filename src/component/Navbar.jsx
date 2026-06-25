 import { Link } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        ShopZone
      </div>

      <div className="nav-links">
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/men">Men</Link>
        <Link className="link" to="/women">Women</Link>
        <Link className="link" to="/cart">Cart</Link>
      </div>

      <div className="right">
        <button>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;