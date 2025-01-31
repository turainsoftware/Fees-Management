import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { AuthHome } from "../pages";
import { GlobalLoader } from "../components";

const AuthHomeOrRedirect = () => {
  const { isAuthenticated, authChecked } = useAuth();

  if (!authChecked) {
    return <GlobalLoader />;
  }

  return isAuthenticated ? <Navigate to="/dashboard" replace /> : <AuthHome />;
};

export default AuthHomeOrRedirect;
