const Navbar = () => (
  <>
    <div className="notice-bar">Please note: Abuja deliveries are paid to the driver.</div>

    <nav className="navbar">
      <img src="/images/logo.png" alt="Miss Classy" className="navbar-logo" />

      <div className="navbar-links">
        <button>Home</button>
        <button>Pre-Order</button>
        <button>Shop</button>
        <button>Categories</button>
        <button>New Arrivals</button>

        <button className="icon-button" aria-label="Search">
          <svg viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-4-4" />
          </svg>
        </button>

        <button className="icon-button" aria-label="Profile">
          <svg viewBox="0 0 24 24">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />
          </svg>
        </button>

        <button className="icon-button" aria-label="Cart">
          <svg viewBox="0 0 24 24">
            <path d="M3 4h2l2.5 11h10L20 7H6" />
            <circle cx="9" cy="20" r="1" />
            <circle cx="17" cy="20" r="1" />
          </svg>
        </button>
      </div>
    </nav>
  </>
);

export default Navbar;




