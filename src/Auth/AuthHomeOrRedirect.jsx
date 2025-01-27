import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { AuthHome } from "../pages";

const AuthHomeOrRedirect = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Navigate to="/dashboard" replace /> : <AuthHome />;
};

export default AuthHomeOrRedirect;
