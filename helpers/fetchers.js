import axios from "axios";
import { yahooRequest } from "../utils/request";

export const getUserById = (url) => axios.get(url).then((res) => res.data.data);

export const getQuotes = async (quoteString) => {
  const { request } = yahooRequest();
  const url = `/finance/quote?symbols=${quoteString}`;
  const stocksResponse = await request.get(url);

  console.log("request", stocksResponse);
  return await stocksResponse.data.quoteResponse.result;
};
