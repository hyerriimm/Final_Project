
import axios from "axios";

export const instance = axios.create({
  baseURL: "http://13.125.229.126",
});

instance.interceptors.request.use((config) => {
  const token = localStorage.setItem("ACCESS_TOKEN");
  const refreshToken = localStorage.setItem("REFRESH_TOKEN");

  config.headers.authorization = token;
  config.headers.refreshtoken = refreshToken;

  return config;
});