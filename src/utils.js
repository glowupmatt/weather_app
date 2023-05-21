import axios from "axios";

const BASE_URL = "https://api.ipbase.com/v2/info?apikey=";

export const API_KEY = process.env.REACT_APP_API_KEY;

const ipOption = {
  url: BASE_URL,
  params: {},
  headers: {
    apikey: API_KEY,
  },
};

const randomQuote = "https://api.quotable.io/quotes/random";

const worldTimeApiURL = "http://worldtimeapi.org/api/ip/";

export const fetchRandomQuote = async (url) => {
  const { data } = await axios.get(`${randomQuote}`);
  return data;
};

export const fetchFromWorldTimeAPI = async (url) => {
  const { data } = await axios.get(`${worldTimeApiURL}`);
  return data;
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, ipOption);
  return data;
};
