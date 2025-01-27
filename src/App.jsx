import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import MobileNav from "./components/Navbar/MobileNav";
import { ToastContainer } from "react-toastify";
import { useAuth } from "./contexts/AuthContext";

const App = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <Outlet />
      {isAuthenticated && <MobileNav />}
      <ToastContainer />
    </>
  );
};
export default App;
