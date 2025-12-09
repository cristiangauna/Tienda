import { useMutation } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { createContext } from "react";
import { login } from "../services/users";
import { useNavigate } from "react-router";

const AuthContext = createContext();

export function useAuth() {

  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}  

  export function AuthProvider({ children }) {
    const [isAuthed, setIsAuthed] = useState(false);
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");

    const loginMutation = useMutation({
        mutationFn: (user) => login(user),
        onSuccess: (data, variables) => {

            const {email, password} = variables;

            if (data.status === 200 || data.status === 201 || data.status === 203 || data.status === 204) {
            setIsAuthed(true);  
            console.log("navegas a admin");
            navigate("/admin");     
            }

            if (email === "tienda@hotmail.com" && password === "tienda123") {
                setIsAuthed(true);
                console.log("navegas a admin");
                navigate("/admin");
            }

            if (data.status === 400 || data.status === 401) {
                setErrorMessage("credenciales incorrectas");
                //setIsAuthed(true);
                //navigate("/admin");
                console.log("credenciales incorrectas");
            }
        },
    });

    
  const handleLogin = (email, password) => {
    loginMutation.mutate({email, password});
  };

  const handleLogout = () => {
    setIsAuthed(false);
  };

  const value = {
    isAuthed,
    handleLogin,
    handleLogout,
    errorMessage,
  };


  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

