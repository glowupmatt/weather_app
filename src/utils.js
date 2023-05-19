import axios from "axios";

const BASE_URL = "https://api.ipbase.com/v2/info?apikey=";

const ipOption = {
  url: BASE_URL,
  params: {},
  headers: {
    apikey: "KuHpLEPsndxzPmoBjpq2UBCpIE8QQt1MNjF7CNga",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, ipOption);
  return data;
};
