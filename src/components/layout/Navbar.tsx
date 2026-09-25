import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const goTo = (path: string) => {
    setMenuOpen(false);
    if (location.pathname !== path) navigate(path);
  };
  return (
    <>
      <div className="notice-bar">
        <div className="notice-track">
          Please note: Deliveries are Nation wide.
        </div>
      </div>
      <nav className="navbar">
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          ☰
        </button>
        <img src="/images/logo.png" alt="Miss Classy" className="navbar-logo" />
        <div className="navbar-links">
          <button onClick={() => goTo("/")}>Home</button>
          <button onClick={() => goTo("/pre-order")}>Pre-Order</button>
          <button onClick={() => goTo("/shop")}>Shop</button>
          <button onClick={() => goTo("/categories")}>Available Goods</button>
          <button onClick={() => goTo("/new-arrivals")}>New Arrivals</button>
          <button
            className="icon-button"
            onClick={() => goTo("/search")}
            aria-label="Search"
          >
            <svg viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-4-4" />
            </svg>
          </button>
          <button
            className="icon-button newsletter-icon"
            aria-label="Newsletter"
          >
            <svg viewBox="0 0 24 24">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m4 7 8 6 8-6" />
            </svg>
          </button>
          <button
            className="icon-button"
            onClick={() => goTo("/profile")}
            aria-label="Profile"
          >
            <svg viewBox="0 0 24 24">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />
            </svg>
          </button>
          <button
            className="icon-button"
            onClick={() => goTo("/cart")}
            aria-label="Cart"
          >
            <svg viewBox="0 0 24 24">
              <path d="M3 4h2l2.5 11h10L20 7H6" />
              <circle cx="9" cy="20" r="1" />
              <circle cx="17" cy="20" r="1" />
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="mobile-menu">
            <button onClick={() => goTo("/")}>Home</button>
            <button onClick={() => goTo("/pre-order")}>Pre-Order</button>
            <button onClick={() => goTo("/shop")}>Shop</button>
            <button onClick={() => goTo("/categories")}>Categories</button>
            <button onClick={() => goTo("/new-arrivals")}>New Arrivals</button>
          </div>
        )}
      </nav>
    </>
  );
};
export default Navbar;
