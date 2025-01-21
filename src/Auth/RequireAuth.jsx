import React, { useEffect, useState } from "react";
import { replace, useNavigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  // const isAuthenticated = useState(true);
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     navigate("/", replace);
  //   } else {
  //     navigate("/dashboard", replace);
  //   }
  // }, []);
  return <div>{children}</div>;
};

export default RequireAuth;
