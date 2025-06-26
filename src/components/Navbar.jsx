import React from "react";
import { Link } from "react-router-dom";
import '../styles/main.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">EventPlanner</Link>
      <Link to="/events" className="nav-link">Events</Link>
      <Link to="/services" className="nav-link">Services</Link>
      <Link to="/about" className="nav-link">About</Link>
      <Link to="/contact" className="nav-link">Contact</Link>
      <Link to="/login" className="nav-link">Login</Link>
      <Link to="/register" className="nav-link">Register</Link>
      <Link to="/chat" className="nav-link">AI Assistant</Link>

    </nav>
  );
};

export default Navbar;
