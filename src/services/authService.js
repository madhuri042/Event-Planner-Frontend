import API from "../Api";

export const register = async (userData) => {
  const res = await API.post("/users/register", userData);
  return res.data;
};

export const login = async (userData) => {
  const res = await API.post("/users/login", userData);
  localStorage.setItem("token", res.data.token);
  return res.data;
};

export const logout = () => {
  localStorage.removeItem("token");
};