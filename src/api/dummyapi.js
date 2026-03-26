import axios from "axios";

export const getPosts = () => {
  return axios.get("https://api.escuelajs.co/api/v1/products");
};

