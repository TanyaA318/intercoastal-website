import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header-inner">

  <div className="header-left">
    <Link to="/" className="brand">
      <img src="/logo.jpg" alt="Intercoastal Outdoor Equipment" />
      <div>
        <div className="brand-kicker">AUTHORIZED BAD BOY DEALER</div>
        <div className="brand-title">Intercoastal Outdoor Equipment</div>
      </div>
    </Link>

    <a href="tel:+12522216069" className="header-phone">
      (252) 221-6069
    </a>
  </div>

  <nav className="site-nav">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/inventory">Inventory</NavLink>
    <NavLink to="/service">Service</NavLink>
    <NavLink to="/about">About Us</NavLink>
    <NavLink to="/contact">Contact</NavLink>
  </nav>

</div>

       <button
  className="menu-toggle"
  type="button"
  aria-label="Toggle navigation"
  aria-expanded={menuOpen}
  onClick={() => setMenuOpen((open) => !open)}
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
