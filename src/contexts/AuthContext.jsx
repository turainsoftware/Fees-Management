// AuthContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import { authService } from "../services/AuthService";
import { replace, useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // Hooks

  // State Variables
  const [authToken, setAuthToken] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);

  //Before open application
  const check = () => {
    const storedAuthToken = localStorage.getItem("authToken");
    if (storedAuthToken) {
      setAuthToken(storedAuthToken);
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
    setAuthChecked(true);
  };

  const validateOtp = async ({ mobile, otp }) => {
    try {
      const data = await authService.validateOtp({ mobile: mobile, otp: otp });

      if (data?.status) {
        setAuthToken(data?.token);
        localStorage.setItem("authToken", data?.token);
        setIsAuthenticated(true);
        return true;
      }

      return false;
    } catch (error) {
      localStorage.removeItem("authToken");
      setAuthToken(null);
      setIsAuthenticated(false);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setAuthToken(null);
    setIsAuthenticated(() => false);
    check();
  };

  useEffect(() => {
    check();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        authToken,
        validateOtp,
        isAuthenticated,
        logout,
        authChecked, // Expose auth checked status
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return authContext;
};

export { AuthProvider, useAuth };
