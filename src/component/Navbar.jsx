 import { Link } from "react-router-dom";
import "../css/Navbar.css";
import { useState } from "react";
 import AuthModal from './AuthModal'
const Navbar = () => {
    const [showAuth, setShowAuth] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        ShopZone
      </div>

      <div className="nav-links">
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/men">Men</Link>
        <Link className="link" to="/women">Women</Link>
          <Link className="link" to="/electronics">electronics</Link>
        <Link className="link" to="/cart">Cart</Link>
      
      </div>
 <div>
      <button
  onClick={() => {
    
    setShowAuth(true);
  }}
>
  Login
</button>

      {showAuth && (
        <AuthModal onClose={() => setShowAuth(false)} />
      )}
    </div>
       
    </nav>
  );
};

export default Navbar;