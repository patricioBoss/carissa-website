import axios from "axios";

export const yahooRequest = () => {
  const baseURL = process.env.NEXT_PUBLIC_YAHOO_FINANCE_API;

  const axiosInstance = axios.create({
    baseURL,
  });
  return { request: axiosInstance };
};
