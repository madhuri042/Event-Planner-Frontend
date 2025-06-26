import API from "../api";

export const createEvent = async (eventData) => {
  const res = await API.post("/events", eventData);
  return res.data;
};

export const getEvents = async () => {
  const res = await API.get("/events");
  return res.data;
};
