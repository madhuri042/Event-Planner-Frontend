import React from "react";
import '../styles/main.css';

const Services = () => {
  const services = [
    "Event Planning",
    "Venue Selection",
    "Catering Management",
    "Entertainment Coordination",
    "Marketing & Promotion",
  ];

  return (
    <div className="services-section">
      <h2 className="services-title">Our Services</h2>
      <ul className="services-list">
        {services.map((service) => (
          <li key={service} className="service-item">
            {service}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
