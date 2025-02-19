import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import MobileNav from "./components/Navbar/MobileNav";
import { ToastContainer } from "react-toastify";
import { useAuth } from "./contexts/AuthContext";
import { ScrollToTop } from "./components";

const App = () => {
  const { isAuthenticated } = useAuth();

  useEffect(()=>{
    document.body.style.overflow = "auto";
    document.body.style.paddingRight = "0";

    // Cleanup function to reset styles if needed
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  },[])

  return (
    <>
      <Outlet />
      {isAuthenticated && <MobileNav />}
      <ToastContainer />
      <ScrollToTop />
    </>
  );
};
export default App;
