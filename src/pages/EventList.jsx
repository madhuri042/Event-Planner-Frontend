import React, { useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import '../styles/main.css';

const dummyEvents = [
  {
    _id: "1",
    title: "Music Festival 2025",
    date: "2025-09-10",
    location: "New York",
  },
  {
    _id: "2",
    title: "Tech Conference",
    date: "2025-07-15",
    location: "San Francisco",
  },
];

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Replace with API call
    setEvents(dummyEvents);
  }, []);

  return (
    <div className="event-list-section">
      <h2 className="event-list-title">All Events</h2>
      {events.length === 0 && <p className="no-events">No events available.</p>}
      <div className="event-list-container">
        {events.map((event) => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventList;