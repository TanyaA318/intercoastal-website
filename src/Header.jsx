import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="logo">
          Intercoastal Outdoor Equipment
        </Link>

        <nav className="site-nav">
          <Link to="/">Home</Link>
          <Link to="/inventory">Inventory</Link>
          <Link to="/service">Service</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
