import { BASE_URL } from "../constantes/api";

export const getAllProducts = () =>
    fetch(`${BASE_URL}/products`).then((response) => response.json());

export const getSingleProduct = (id) =>
    fetch(`${BASE_URL}/products/${id}`).then((response) => response.json());