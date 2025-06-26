import React from "react";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: 15,
        marginBottom: 10,
        borderRadius: 5,
      }}
    >
      <h3>{event.title}</h3>
      <p>{event.date}</p>
      <p>{event.location}</p>
      <Link to={`/events/${event._id}`}>View Details</Link>
    </div>
  );
};

export default EventCard;
