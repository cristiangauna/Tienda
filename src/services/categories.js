import { BASE_URL } from "../constantes/api";

export const getAllCategories = () =>
    fetch(`${BASE_URL}/categories`).then((response) => response.json());