import axios from "axios";
const API_BASE_URL = process.env.API_BASE_URL;

const instance = axios.create({
  baseURL: `${API_BASE_URL}`,
});

export const fetchDataFromApi = async (endpoint) => {
  const res = await instance.get(endpoint);
  const data = await res.data;
  return data;
};
