import axios from "axios";
const productsUrl = "https://fakestoreapi.com/products";

export const getListOfProducts = () => {
  return axios.get(productsUrl);
};

export const getProduct = (id) => {
  return axios.get(`${productsUrl}/${id}`);
};
