import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
});

const excludeTokenURL = ["/login", "/register"];

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("userToken");

  if (!excludeTokenURL.includes(config.url) && token) {
    // eslint-disable-next-line no-param-reassign
    config.headers.token = token;
  }

  return config;
});

export default axiosInstance;
