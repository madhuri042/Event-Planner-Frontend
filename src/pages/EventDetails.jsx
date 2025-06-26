import React from "react";
import { useParams } from "react-router-dom";
import '../styles/main.css'; // Import global styles

const EventDetails = () => {
  const { id } = useParams();

  // Dummy event data (replace with actual API call)
  const event = {
    _id: id,
    title: "Music Festival 2025",
    date: "2025-09-10",
    location: "New York",
    description: "A grand music festival with popular artists.",
  };

  return (
    <div className="event-details-section">
      <h2 className="event-details-title">{event.title}</h2>
      <p className="event-details-text"><strong>Date:</strong> {event.date}</p>
      <p className="event-details-text"><strong>Location:</strong> {event.location}</p>
      <p className="event-details-text"><strong>Description:</strong> {event.description}</p>
    </div>
  );
};

export default EventDetails;
