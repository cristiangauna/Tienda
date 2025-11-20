import { BASE_URL } from "../constantes/api";

export const getAllProducts = () =>
    fetch(`${BASE_URL}/products`).then((response) => response.json());