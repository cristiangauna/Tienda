import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");


  const loginMutation = useMutation({
  mutationFn: (user) => {
    return fetch("https://api.escuelajs.co/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
  },

  onSuccess: (data) => {
    if (data.status == 201) {
      console.log("navegas a la home");
    }

    if (data.status == 400) {
      setErrorMessage("credenciales incorrectas");
    }
  },
});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("enviando datos", { email, password });
    loginMutation.mutate(email);
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
        <button>iniciar sesión</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </>
  );
}

export default Login;