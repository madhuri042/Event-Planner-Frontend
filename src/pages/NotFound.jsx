import React from "react";
import { Link } from "react-router-dom";
// src/App.js
import '../styles/main.css'; // Import global styles


const NotFound = () => {
  return (
    <div>
      <h2>404 - Page Not Found</h2>
      <Link to="/">Go back Home</Link>
    </div>
  );
};

export default NotFound;
