import axios from "axios";
import authHeader from "./auth-header";

const getUsersData = () => {
  return axios
    .get("/users", { headers: authHeader() })
    .then((response) => {
      return response.data;
    })
    .catch(() => Promise.reject("No Data Found"));
};

export default {
  getUsersData,
};
