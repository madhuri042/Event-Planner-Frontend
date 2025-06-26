import React from "react";
import { Link } from "react-router-dom";
import '../styles/main.css'; // Import global styles

const Home = () => {
  return (
    <div className="home-section">
      <h1 className="home-title">Welcome to EventPlanner Assistant</h1>
      <p className="home-description">
        Your one-stop solution for planning and managing events effortlessly.
      </p>
      <Link to="/events">
        <button className="home-button">View Events</button>
      </Link>
    </div>
  );
};

export default Home;
