// axios interceptors

import axios from "axios";

const client = axios.create({
  baseURL: "https//fakestoreapi.com",
  headers: {},
});

export default client;
