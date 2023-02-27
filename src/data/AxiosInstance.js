import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "http://localhost:5000",
});
const excludeURL = ["/login", "/register"];

AxiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("userToken");

  if (!excludeURL.includes(config.url) && token) {
    // eslint-disable-next-line no-param-reassign
    config.header.token = token;
  }

  return config;
});

export default AxiosInstance;
