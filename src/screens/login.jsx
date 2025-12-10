import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { login } from "../services/users";
import { Link, Route, useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import styles from "./login.module.css";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { handleLogin, errorMessage } = useAuth();


  const handleSubmit = (e) => { //(e) es de evento
    e.preventDefault(); // e de evento y preventDefault para evitar que refresque la pagina al presionar el boton iniciar sesion
    console.log("enviando datos", { email, password });
    //loginMutation.mutate(email);
    handleLogin(email, password);
  };


  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          value={email}
          onChange={(e) => {
              setEmail(e.target.value);            
          }}
          id="email"
          type="email"
        />

        <label htmlFor="password">Contraseña:</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          type="password"
        />
        <button className={styles.añadido}>iniciar sesión</button>
      </form>
      {errorMessage && <p className={styles.descuento}> {errorMessage}</p>}
    </>
  );
}

export default Login;