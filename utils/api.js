import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/api",
});

export const fetchDataFromApi = async (endpoint) => {
  const res = await instance.get(endpoint);
  const data = await res.data;
  return data;
};
