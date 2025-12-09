import { BASE_URL } from "../constantes/api";


export const login = (user) => 
    fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
        })
        