import { Navigate } from "react-router";
import { useAuth } from "./contexts/AuthContext";

function ProtectedRoute({ children }) {
  const { isAuthed } = useAuth();

  if (isAuthed) {
    return children;
  }

  return <Navigate to="/" replace />;
}

export default ProtectedRoute;
