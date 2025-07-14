import React from "react";
import '../styles/main.css'; // Import global styles
import aboutImg from "../assets/about.jpg";  // Make sure you place your image in src/assets/

const About = () => {
  return (
    <div className="about-section" style={styles.container}>
      <div style={styles.textContainer}>
        <h2 className="about-title">About EventPlanner</h2>
        <p className="about-description">
          We help you organize, manage, and plan events with ease, offering
          comprehensive tools for every step. Our goal is to make event planning
          stress-free and efficient, whether it's a small gathering or a large-scale event.
        </p>
        <ul>
          <li>Event Planning</li>
          <li>Event Management</li>
          <li>Promotion Strategy</li>
          <li>Production</li>
          <li>Consulting</li>
        </ul>
        <p>Contact: +971 54 302 2390 </p>
        <p> www.latableevents.ae</p>
      </div>
      <div style={styles.imageContainer}>
        <img src={aboutImg} alt="Event Planner" style={styles.image} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    flexWrap: 'wrap',
    padding: '20px'
  },
  textContainer: {
    flex: 1,
    minWidth: '300px'
  },
  imageContainer: {
    flex: 1,
    minWidth: '300px'
  },
  image: {
    width: '100%',
    borderRadius: '8px'
  }
};

export default About;
