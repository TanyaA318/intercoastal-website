import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand" onClick={() => setMenuOpen(false)}>
          <img
            src="/logo.jpg"
            alt="Intercoastal Outdoor Equipment"
            className="brand-logo"
          />
          <div>
            <p className="brand-kicker">Authorized Bad Boy Dealer</p>
            <h1 className="brand-title">Intercoastal Outdoor Equipment</h1>
          </div>
        </Link>

        <button
  className="menu-toggle"
  type="button"
  onClick={() => {
    alert("menu clicked");
    setMenuOpen((open) => !open);
  }}
>
  <span></span>
  <span></span>
  <span></span>
</button>
       
        <nav className={`site-nav ${menuOpen ? "site-nav-open" : ""}`}>
          <NavLink to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/inventory" className="nav-link" onClick={() => setMenuOpen(false)}>
            Inventory
          </NavLink>
          <NavLink to="/service" className="nav-link" onClick={() => setMenuOpen(false)}>
            Service
          </NavLink>
          <NavLink to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>
            About Us
          </NavLink>
          <NavLink to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
