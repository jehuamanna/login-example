import axios from "axios";
import "./mockaxios";

const API_URL = "/api/auth/";

const login = (username, password) => {
  return axios
    .post(API_URL + "login", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    })
    .catch(() => Promise.reject("Invalid username/password"));
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  login,
  logout,
};
