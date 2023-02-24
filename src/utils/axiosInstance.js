import axios from "axios";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("userToken");

  if (token) {
    // eslint-disable-next-line no-param-reassign
    config.headers.token = token;
  }

  return config;
});

export default axiosInstance;
