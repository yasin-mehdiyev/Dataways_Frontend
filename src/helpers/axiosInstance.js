import axios from "axios";

const BASE_URL = "https://sheet.best";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json; charset=utf8",
  },
});

export default axiosInstance;
