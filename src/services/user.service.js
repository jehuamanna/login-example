import axios from "axios";
import authHeader from "./auth-header";

const getUserData = () => {
  return axios
    .get("/user", { headers: authHeader() })
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch(() => Promise.reject("No Data Found"));
};

export default {
  getUserData,
};
