// ProtectedRoute.jsx - Update this component
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import GlobalLoader from "../components/Loaders/GlobalLoader";

const ProtectedRoute = () => {
  const { isAuthenticated, authChecked } = useAuth();

  if (!authChecked) {
    return <GlobalLoader />;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
