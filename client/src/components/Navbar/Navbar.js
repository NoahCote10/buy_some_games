import React, { useState, useEffect } from "react";
import { Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';

export default function Navbar({ currentPage, handlePageChange }) {
  const links = [
    { name: "Home", to: "/" },
    { name: "Profile", to: "/users" },
    { name: "Sign In", to: "/login" },
    { name: "Sign Out", to: "#signOut" },
    { name: "Cart", to: "#cart" },
  ];

  return (
    <Nav variant="tabs" activeKey={currentPage} onSelect={handlePageChange}>
      {links.map((link) => (
        <Nav.Item key={link.name}>
          <Link eventKey={link.name} to={link.to}>
            {link.name}
          </Link>
        </Nav.Item>
      ))}
    </Nav>
  );
}
