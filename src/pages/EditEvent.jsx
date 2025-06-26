import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import '../styles/main.css'; // Import global styles

const EditEvent = () => {
  const { id } = useParams();
  const [form, setForm] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
  });

  useEffect(() => {
    // Fetch event by id and fill form (dummy here)
    const fetchedEvent = {
      title: "Music Festival 2025",
      date: "2025-09-10",
      location: "New York",
      description: "A grand music festival with popular artists.",
    };
    setForm(fetchedEvent);
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Event updated! (Implement API call)");
  };

  return (
    <div className="edit-event-section">
      <h2 className="edit-event-title">Edit Event</h2>
      <form className="edit-event-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            name="title"
            value={form.title}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            id="date"
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input
            id="location"
            name="location"
            value={form.location}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={form.description}
            onChange={handleChange}
            required
            className="form-textarea"
          />
        </div>
        <button type="submit" className="btn-submit">
          Update Event
        </button>
      </form>
    </div>
  );
};

export default EditEvent;
